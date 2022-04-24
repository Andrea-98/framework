import db from 'mysql2-wrapper';
import Core from 'urp-core';
import * as alt from 'alt-server';

import { DEALERSHIP_LIST } from '../shared/config';
Core.Interactions.createMultipleInteractions(DEALERSHIP_LIST);

alt.onClient('Dealership:RefreshEstoque', (source) => {
    loadDealership(source);
});

alt.onClient('Dealership:FinishBuy', (source, data) => {
    buyVehicle(source, data.model);
});

const loadDealership = async (source) => {
    const result = await executeSync('SELECT * from dealership');
    alt.emitClient(source, 'Dealership:UpdateVeh', JSON.stringify(result));
};

const buyVehicle = async (source, model) => {
    const result = await executeSync(
        'SELECT * from dealership WHERE model = ?',
        [model],
        undefined,
        alt.resourceName
    );
    const vehicle = result[0];
    alt.log(source.getMeta('playerData').ssn);
    let hasVeh = await executeSync(
        'SELECT * FROM characters_vehicles WHERE ssn = ? AND model = ?',
        [source.getMeta('playerData').ssn, model]
    );
    if (hasVeh[0])
        return alt.emitClient(
            source,
            'notify',
            'error',
            'Error',
            'you already have this vehicle'
        );

    if (
        Core.Money.hasFullMoney(source, vehicle.price) &&
        parseInt(vehicle.stock) > 0
    ) {
        Core.Money.getFullPayment(source, vehicle.price);
        Core.Vehicles.addToSource(source, vehicle.model);
        alt.emitClient(source, 'Dealership:close');
        updateSync('UPDATE dealership SET stock = ? WHERE model = ?', [
            parseInt(vehicle.stock) - 1,
            model,
        ]);
    }
};

const executeSync = (query, parameters) => {
    return new Promise((resolve, reject) => {
        const resolvePromise = (response) => {
            resolve(response);
        };
        db.execute(query, parameters, resolvePromise, alt.resourceName);
    });
};

const insertSync = (query, parameters) => {
    return new Promise((resolve, reject) => {
        const resolvePromise = (response) => {
            resolve(response);
        };
        db.insert(query, parameters, resolvePromise, alt.resourceName);
    });
};

const updateSync = (query, parameters) => {
    return new Promise((resolve, reject) => {
        const resolvePromise = (response) => {
            resolve(response);
        };
        db.update(query, parameters, resolvePromise, alt.resourceName);
    });
};
