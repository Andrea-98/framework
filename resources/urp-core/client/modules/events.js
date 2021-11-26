import * as alt from 'alt-client';
import Core from '../main';

//  Initialize Ticks
alt.onServer('Core:Client:CharacterLoaded', () => {
    Core.Functions.startTicks()
    Core.Functions.interactionMode()
})

//  Data manager
alt.onServer('playerData:set', (key, value) => {
    Core.Functions.handleSetplayerData(key, value)
})

alt.on('playerData:changed', (key, value, old) => {
    if(key === 'isDead'){
    Core.Functions.handleDeath(value)
    }
})

alt.on('connectionComplete', () => {
    Core.Browser.createInstance()
})

alt.on('disconnect', () => {
    Core.Browser.destroyInstance()
})