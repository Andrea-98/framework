(this['webpackJsonpaltv-basic'] = this['webpackJsonpaltv-basic'] || []).push([
    [0],
    {
        63: function (e, t, c) {},
        64: function (e, t, c) {},
        71: function (e, t, c) {
            'use strict';
            c.r(t);
            var n = c(1),
                a = c.n(n),
                s = c(11),
                i = c.n(s),
                o = (c(63), c(3)),
                r = (c(64), c.p + 'static/media/call.5fa04bf1.png'),
                l = c.p + 'static/media/contacts.4b1d9045.png',
                j = c.p + 'static/media/messages.a425e1c2.png',
                d = c.p + 'static/media/calculator.e98e3762.png',
                b = c(5),
                u = c(0);
            function m(e) {
                var t = e.img,
                    c = e.onclick,
                    n = e.to;
                return 'call' === t
                    ? Object(u.jsxs)(b.b, {
                          to: n,
                          children: [
                              ' ',
                              Object(u.jsx)('div', {
                                  className: 'iconAPP',
                                  style: {
                                      backgroundImage: 'url('.concat(r, ')'),
                                  },
                                  onClick: c,
                              }),
                          ],
                      })
                    : 'contacts' === t
                    ? Object(u.jsx)(b.b, {
                          to: n,
                          children: Object(u.jsx)('div', {
                              className: 'iconAPP',
                              style: { backgroundImage: 'url('.concat(l, ')') },
                              onClick: c,
                          }),
                      })
                    : 'camera' === t
                    ? Object(u.jsx)(b.b, {
                          to: n,
                          children: Object(u.jsx)('div', {
                              className: 'iconAPP',
                              style: { backgroundImage: 'url('.concat(d, ')') },
                              onClick: c,
                          }),
                      })
                    : 'msg' === t
                    ? Object(u.jsx)(b.b, {
                          to: n,
                          children: Object(u.jsx)('div', {
                              className: 'iconAPP',
                              style: { backgroundImage: 'url('.concat(j, ')') },
                              onClick: c,
                          }),
                      })
                    : Object(u.jsx)(u.Fragment, {});
            }
            var h = c(2),
                x = {
                    TimeFormat: function (e) {
                        var t = e,
                            c = Math.floor(t / 3600);
                        t %= 3600;
                        var n = Math.floor(t / 60),
                            a = t % 60;
                        return (
                            (n = String(n).padStart(2, '0')),
                            (c = String(c).padStart(2, '0')),
                            (a = String(a).padStart(2, '0')),
                            n <= 0
                                ? ''.concat(a)
                                : c <= 0
                                ? ''.concat(n, ':').concat(a)
                                : ''.concat(c, ':').concat(n, ':').concat(a)
                        );
                    },
                    useQuery: function () {
                        return new URLSearchParams(Object(h.e)().search);
                    },
                    WhatTime: function (e) {
                        var t = new Date().getTime() - parseInt(e),
                            c = Math.floor(t / 1e3),
                            n = Math.floor(c / 60),
                            a = Math.floor(n / 60);
                        return Math.floor(a / 24) > 0
                            ? a + ' days ago'
                            : a > 0
                            ? a + ' hours ago'
                            : n > 0
                            ? n + ' minutes ago'
                            : c > 0
                            ? c + ' seconds ago'
                            : void 0;
                    },
                    VerifyTxt: function (e) {
                        if (e.length > 1) return e;
                    },
                    FormatStringNumber: function (e) {
                        if ('' !== e && null !== e && void 0 !== e) {
                            var t = e.split(''),
                                c = 0,
                                n = '';
                            return (
                                t.map(function (e) {
                                    3 === ++c || 6 === c
                                        ? (n = n + e + '-')
                                        : (n += e);
                                }),
                                n
                            );
                        }
                    },
                },
                O = c.p + 'static/media/iphone.c4d3c4e3.png',
                f = c.p + 'static/media/chamada.876b287b.mp3',
                p = c.p + 'static/media/chamando.8164bc4f.mp3',
                g = (c.p, c(75));
            function v(e) {
                var t = e.children,
                    c = e.Main,
                    n = e.Desfoc;
                return Object(u.jsx)('div', {
                    className: 'App',
                    children: Object(u.jsx)(g.a.div, {
                        initial: { opacity: 1, y: 550 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                            y: { type: 'spring', stiffness: 20 },
                            default: { duration: 2 },
                        },
                        children: Object(u.jsxs)('div', {
                            className: 'Phone',
                            children: [
                                Object(u.jsxs)('div', {
                                    className: 'BoxViwer',
                                    style: {
                                        backgroundColor: c.color,
                                        backgroundImage: c.img,
                                        backdropFilter: c.filter,
                                    },
                                    children: [
                                        Object(u.jsx)('div', {
                                            className: 'BoxViwerDesfoc',
                                            style: { display: n },
                                        }),
                                        Object(u.jsxs)('div', {
                                            className: 'Topbar',
                                            children: [
                                                Object(u.jsx)('p', {
                                                    className: 'ml-4',
                                                    children: 'Vivo',
                                                }),
                                                Object(u.jsxs)('p', {
                                                    className: 'mr-3 between',
                                                    children: [
                                                        Object(u.jsx)('i', {
                                                            class: 'fal fa-battery-half',
                                                        }),
                                                        ' ',
                                                        Object(u.jsx)('i', {
                                                            class: 'fal fa-signal-4',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(u.jsx)('img', { src: O, alt: 'png' }),
                                Object(u.jsx)('div', {
                                    className: 'BoxViwerI',
                                    children: t,
                                }),
                            ],
                        }),
                    }),
                });
            }
            var C = !1,
                I = new Audio(f),
                N = new Audio(p);
            function y(e) {
                var t = e.type;
                return (
                    C ||
                        'play' !== t ||
                        ((C = !0), I.play(), (I.volume = 0.1), (I.loop = !0)),
                    C && 'stop' === t && ((C = !1), I.pause()),
                    Object(u.jsx)(u.Fragment, {})
                );
            }
            function k(e) {
                var t = e.type;
                return (
                    C ||
                        'play' !== t ||
                        ((C = !0), N.play(), (N.volume = 0.5), (N.loop = !0)),
                    C && 'stop' === t && ((C = !1), N.pause()),
                    Object(u.jsx)(u.Fragment, {})
                );
            }
            var F,
                P,
                w = [],
                M = [],
                V = [],
                S = [],
                B = function (e) {
                    var t = !1,
                        c = '';
                    return (
                        M.map(function (n) {
                            parseInt(n.number) === parseInt(e) &&
                                ((t = !0), (c = n.data.name));
                        }),
                        t || (c = e),
                        c
                    );
                };
            alt.on('Phone:GetAllData', function (e, t, c, n, a) {
                console.log('[PHONE] Loading...'),
                    '' !== e[0].contact &&
                        ((M = JSON.parse(e[0].contact)),
                        console.log('[PHONE] Loading Finish Contact')),
                    '' !== t[0].recent &&
                        ((V = JSON.parse(t[0].recent)),
                        console.log('[PHONE] Loading Finish Recent')),
                    '' !== c &&
                        ((S = c),
                        console.log('[PHONE] Loading Finish History')),
                    (F = n),
                    console.log('[PHONE] Loading Finish Number'),
                    (P = a),
                    console.log('[PHONE] Loading Finish Ssn');
            });
            var T = {
                    GetMessage: function () {
                        return w;
                    },
                    GetSSN: function () {
                        return P;
                    },
                    CheckAtlV: function () {
                        return void 0 !== window.alt;
                    },
                    GetContact: function () {
                        return M;
                    },
                    SaveContact: function (e) {
                        return (
                            !(function (e) {
                                var t = !1;
                                return (
                                    M.map(function (c) {
                                        c.number === e && (t = !0);
                                    }),
                                    !!t
                                );
                            })(e.number) &&
                            (M.push(e),
                            setTimeout(function () {
                                alt.emit('Phone:UpdateContact', P, M);
                            }, 100),
                            !0)
                        );
                    },
                    CallNumber: function (e) {
                        alt.emit('Phone:CallLink', e);
                    },
                    AceptCall: function (e) {
                        console.log(e),
                            y({ type: 'stop' }),
                            alt.emit('Phone:CallAcept', e);
                    },
                    GetRecents: function () {
                        return V;
                    },
                    VerifyContact: B,
                    DestroyCall: function (e, t, c) {
                        e == F
                            ? alt.emit('Phone:DestroyCallMy', e, t, c)
                            : alt.emit('Phone:DestroyCall', e);
                    },
                    MyNumber: function () {
                        return F;
                    },
                    CreateMessage: function (e, t, c, n) {
                        alt.emit('Phone:CreateMessage', e, t, c, n),
                            alt.emit('Phone:updatecontain', n),
                            S.push({
                                id: c,
                                id_player_one: F,
                                id_player_two: n,
                                contain_message: 1,
                            });
                    },
                    GetHistory: function () {
                        return S;
                    },
                    GetChatId: function (e) {
                        alt.emit('Phone:GetChatMessage', e);
                    },
                    WhatPhone: function (e) {
                        var t = '';
                        return (
                            S.map(function (c) {
                                c.id === e &&
                                    (parseInt(c.id_player_one) === parseInt(F)
                                        ? (t = c.id_player_two)
                                        : parseInt(c.id_player_two) ===
                                              parseInt(F) &&
                                          (t = c.id_player_one));
                            }),
                            t
                        );
                    },
                    DeleteContact: function (e) {
                        var t = M.filter(function (t) {
                            return t.number !== e;
                        });
                        (M = t),
                            console.log(t),
                            setTimeout(function () {
                                alt.emit('Phone:UpdateContact', P, M);
                            }, 100);
                    },
                    InserRecents: function (e) {
                        if (V.length >= 35)
                            for (var t = 0; t < 10; t++) V.pop(t);
                        V.push({
                            number: e,
                            name: B(e),
                            data: new Date().getTime(),
                        }),
                            setTimeout(function () {
                                alt.emit('Phone:UpdateRecents', P, V);
                            }, 100);
                    },
                    VerifyCharacter: function (e) {
                        if (
                            !(
                                e <= 1 ||
                                null === e ||
                                void 0 === e ||
                                '' === e
                            ) &&
                            e.length >= 2
                        ) {
                            var t = e.split(''),
                                c = 0,
                                n = '';
                            return (
                                t.map(function (e) {
                                    75 === ++c
                                        ? (n = n + e + '...')
                                        : c < 75 && (n += e);
                                }),
                                n
                            );
                        }
                    },
                },
                L = {};
            (L.Functions = x), (L.communication = T);
            var A = L,
                D = c.p + 'static/media/walpaper.04f956eb.jpg',
                _ = c.p + 'static/media/perfil.08e05437.png';
            function R(e) {
                var t = e.children,
                    c = e.color,
                    n = e.fontsize,
                    a = e.outlined,
                    s = e.Margin,
                    i = e.cursor,
                    o = e.to,
                    r = e.onclick;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)(b.b, {
                        to: ''.concat(o || []),
                        children: Object(u.jsx)('i', {
                            onClick: r && r,
                            className: a
                                ? 'material-icons-outlined'
                                : 'material-icons',
                            style: {
                                color: c || 'black',
                                fontSize: n || '16px',
                                margin: s || '0',
                                cursor: i ? 'pointer' : 'auto',
                            },
                            children: t,
                        }),
                    }),
                });
            }
            function E(e) {
                var t = e.width,
                    c = e.height;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)('div', {
                        className: 'Backgroud',
                        style: {
                            width: t || '35px',
                            height: c || '35px',
                            backgroundImage: 'url('.concat(_, ')'),
                        },
                    }),
                });
            }
            function G(e) {
                var t = e.children;
                e.type;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)('div', {
                        style: {
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                        },
                        children: Object(u.jsx)('div', {
                            style: {
                                backgroundColor: '#bebebe',
                                marginLeft: '5px',
                            },
                            className: 'Bx-msg',
                            children: t,
                        }),
                    }),
                });
            }
            function z(e) {
                var t = e.children;
                e.type;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)('div', {
                        style: {
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        },
                        children: Object(u.jsx)('div', {
                            style: {
                                backgroundColor: '#35c759',
                                color: '#fff',
                                marginRight: '5px',
                            },
                            className: 'Bx-msg',
                            children: t,
                        }),
                    }),
                });
            }
            function H(e) {
                var t = e.children,
                    c = e.title,
                    n = e.onclick,
                    a = e.Pcolor,
                    s = e.Scolor;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsxs)('div', {
                        style: {
                            padding: ' 5px 10px',
                            borderBottom: '1px solid #acacac',
                            color: a || 'black',
                        },
                        children: [
                            Object(u.jsx)('p', { children: c }),
                            Object(u.jsxs)('p', {
                                style: { color: s || '#0179fe' },
                                onClick: n,
                                children: [' ', t, ' '],
                            }),
                        ],
                    }),
                });
            }
            function W(e) {
                var t = e.children,
                    c = e.height,
                    n = e.bcolor,
                    a = e.overflow,
                    s = e.id,
                    i = e.bt,
                    o = e.bb;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)('div', {
                        style: {
                            padding: ' 0 0 5px 0',
                            height: c || '100px',
                            borderTop: i ? '1px solid #e5e5e5' : 'none',
                            borderBottom: o ? '1px solid #e5e5e5' : 'none',
                        },
                        children: Object(u.jsx)('div', {
                            id: s,
                            style: {
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                backgroundColor: n || 'transparent',
                                overflow: a ? 'auto' : 'hiden',
                            },
                            children: t,
                        }),
                    }),
                });
            }
            function K(e) {
                var t = e.children,
                    c = e.width,
                    n = e.bcolor,
                    a = e.color,
                    s = e.acenter,
                    i = e.padding;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)('div', {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            width: c || '100%',
                            backgroundColor: n || 'transparent',
                            color: a || 'black',
                            alignItems: s ? 'center' : 'start',
                            padding: i || '0',
                        },
                        children: t,
                    }),
                });
            }
            function Q(e) {
                var t = e.children,
                    c = e.width,
                    n = e.bcolor,
                    a = e.color,
                    s = e.acenter,
                    i = e.padding;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)('div', {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            width: c || '100%',
                            backgroundColor: n || 'transparent',
                            color: a || 'black',
                            alignItems: s ? 'center' : 'start',
                            padding: i || '0',
                        },
                        children: t,
                    }),
                });
            }
            function U(e) {
                var t = e.children,
                    c = e.d,
                    n = e.color,
                    a = e.fontsize,
                    s = e.bcolor,
                    i = e.outlined,
                    o = e.ml,
                    r = e.mr,
                    l = e.cursor,
                    j = e.to,
                    d = e.onclick;
                return (
                    (void 0 !== j && null !== j) || (j = ''),
                    Object(u.jsx)(u.Fragment, {
                        children:
                            j.length >= 1
                                ? Object(u.jsx)(b.b, {
                                      to: j,
                                      children: Object(u.jsx)('div', {
                                          onClick: d,
                                          style: {
                                              display: 'flex',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              color: n || 'white',
                                              width: c,
                                              height: c,
                                              backgroundColor: s || '#0179fe',
                                              borderRadius: '50%',
                                              marginLeft: o || '0',
                                              marginRight: r || '0',
                                              cursor: l ? 'pointer' : 'auto',
                                          },
                                          children: Object(u.jsx)('div', {
                                              style: { fontSize: a || '16px' },
                                              className: i
                                                  ? 'material-icons-outlined'
                                                  : 'material-icons',
                                              children: t,
                                          }),
                                      }),
                                  })
                                : Object(u.jsx)('div', {
                                      onClick: d,
                                      style: {
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          color: n || 'white',
                                          width: c,
                                          height: c,
                                          backgroundColor: s || '#0179fe',
                                          borderRadius: '50%',
                                          marginLeft: o || '0',
                                          marginRight: r || '0',
                                          cursor: l ? 'pointer' : 'auto',
                                      },
                                      children: Object(u.jsx)('div', {
                                          style: { fontSize: a || '16px' },
                                          className: i
                                              ? 'material-icons-outlined'
                                              : 'material-icons',
                                          children: t,
                                      }),
                                  }),
                    })
                );
            }
            function J(e) {
                var t = e.children,
                    c = e.title,
                    n = e.to,
                    a = e.onclick,
                    s = e.bcolor,
                    i = e.colorCicle,
                    o = e.color;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsxs)('div', {
                        children: [
                            Object(u.jsx)(Q, {
                                width: '50px',
                                children: Object(u.jsx)(U, {
                                    onclick: a,
                                    to: n,
                                    backgroundColor: s || '#0179fe',
                                    color: i || '#fff',
                                    fontsize: '17px',
                                    d: '30px',
                                    children: t,
                                }),
                            }),
                            Object(u.jsx)('p', {
                                style: {
                                    paddingTop: '2px',
                                    color: o || '#929292',
                                    fontSize: '8px',
                                    width: '100%',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                },
                                children: c,
                            }),
                        ],
                    }),
                });
            }
            function X(e) {
                var t = e.children,
                    c = e.width,
                    n = e.margin,
                    a = e.color,
                    s = e.txtaling,
                    i = e.to,
                    o = e.onclick,
                    r = e.cursor;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)(b.b, {
                        to: ''.concat(i || []),
                        children: Object(u.jsx)('p', {
                            onClick: o,
                            style: {
                                margin: n || '0',
                                cursor: r || 'auto',
                                width: c || '100%',
                                color: a || '#0179fe',
                                textAlign: s || 'center',
                            },
                            children: t,
                        }),
                    }),
                });
            }
            function Y(e) {
                var t = e.children,
                    c = e.childrenLeft,
                    n = e.childrenRight;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsxs)('div', {
                        style: {
                            display: 'flex',
                            width: '240px',
                            padding: '10px 5px',
                            fontSize: '13px',
                            fontWeight: '600',
                        },
                        children: [
                            Object(u.jsx)('div', {
                                style: { width: '75px' },
                                children: c,
                            }),
                            Object(u.jsx)('div', {
                                style: { width: '80px' },
                                children: t,
                            }),
                            Object(u.jsx)('div', {
                                style: { width: ' 75px' },
                                children: n,
                            }),
                        ],
                    }),
                });
            }
            function Z(e) {
                var t = e.setMain,
                    c = e.setDesfoc,
                    a = e.setBackBar;
                Object(n.useEffect)(
                    function () {
                        t({ color: 'transparent', img: 'url('.concat(D) }),
                            c('block'),
                            a(!1);
                    },
                    [t, c, a]
                );
                var s = A.Functions.useQuery(),
                    i = Object(n.useState)('false'),
                    r = Object(o.a)(i, 2),
                    l = r[0],
                    j = r[1],
                    d = Object(n.useState)(!1),
                    b = Object(o.a)(d, 2),
                    m = b[0],
                    h = b[1],
                    x = Object(n.useState)(s.get('number')),
                    O = Object(o.a)(x, 2),
                    f = O[0],
                    p = O[1],
                    g = Object(n.useState)('space-between'),
                    v = Object(o.a)(g, 2),
                    C = v[0],
                    I = v[1],
                    N = Object(n.useState)({ incal: !1, decorido: 0 }),
                    F = Object(o.a)(N, 2),
                    P = F[0],
                    w = F[1];
                return (
                    Object(n.useEffect)(
                        function () {
                            P.incal &&
                                setTimeout(function () {
                                    return w({
                                        incal: !0,
                                        decorido: P.decorido + 1,
                                    });
                                }, 1e3);
                        },
                        [P]
                    ),
                    Object(n.useEffect)(function () {
                        'true' === s.get('chamada') &&
                            (I('center'), j('chamando')),
                            'true' === s.get('recebendo')
                                ? (y({ type: 'play' }),
                                  A.communication.InserRecents(s.get('number')))
                                : k({ type: 'play' }),
                            A.communication.CheckAtlV() &&
                                alt.on('Phone:InChanel', function () {
                                    'false' === s.get('recebendo') &&
                                        (p(A.communication.MyNumber()),
                                        h(!0),
                                        w({ incal: !0, decorido: 0 }),
                                        k({ type: 'stop' }),
                                        j('incall'));
                                });
                    }, []),
                    Object(u.jsxs)('div', {
                        className: 'BoxMainCallLink',
                        children: [
                            Object(u.jsxs)('div', {
                                className: 'BoxViwerCallLink',
                                children: [
                                    Object(u.jsx)('h1', {
                                        children: A.communication.VerifyContact(
                                            s.get('number')
                                        ),
                                    }),
                                    ')',
                                    'incall' === l
                                        ? Object(u.jsx)('p', {
                                              children: A.Functions.TimeFormat(
                                                  P.decorido
                                              ),
                                          })
                                        : 'chamando' === l
                                        ? Object(u.jsx)('p', {
                                              children: 'Chamando',
                                          })
                                        : Object(u.jsx)(u.Fragment, {}),
                                    l &&
                                        Object(u.jsx)('div', {
                                            className: 'BoxToolsCallLinkExt ',
                                            children: Object(u.jsxs)('div', {
                                                className: 'BoxToolsCallLink',
                                                children: [
                                                    Object(u.jsxs)('div', {
                                                        className:
                                                            'LineNumberCallLinkTools mb-3',
                                                        children: [
                                                            Object(u.jsx)(q, {
                                                                name: 'Mute',
                                                                children:
                                                                    'mic_off',
                                                            }),
                                                            Object(u.jsx)(q, {
                                                                name: 'Keypad',
                                                                children:
                                                                    'dialpad',
                                                            }),
                                                            Object(u.jsx)(q, {
                                                                name: 'Audio',
                                                                children:
                                                                    'volume_off',
                                                            }),
                                                        ],
                                                    }),
                                                    Object(u.jsxs)('div', {
                                                        className:
                                                            'LineNumberCallLinkTools',
                                                        children: [
                                                            Object(u.jsx)(q, {
                                                                name: 'Add call',
                                                                children: 'add',
                                                            }),
                                                            Object(u.jsx)(q, {
                                                                name: 'FaceTime',
                                                                children:
                                                                    'videocam',
                                                            }),
                                                            Object(u.jsx)(q, {
                                                                name: 'Contacts',
                                                                children:
                                                                    'people',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                ],
                            }),
                            Object(u.jsx)('div', {
                                className: 'CallLinkFull',
                                children: Object(u.jsxs)('div', {
                                    className: 'LineNumberCallLink',
                                    style: { justifyContent: C },
                                    children: [
                                        Object(u.jsx)(U, {
                                            to: '/',
                                            fontsize: '26px',
                                            bcolor: '#eb4e3d',
                                            d: '50px',
                                            onclick: function () {
                                                A.communication.DestroyCall(
                                                    f,
                                                    s.get('number'),
                                                    m
                                                ),
                                                    k({ type: 'stop' });
                                            },
                                            children: 'call_end',
                                        }),
                                        'incall' === l || 'chamando' === l
                                            ? Object(u.jsx)(u.Fragment, {})
                                            : Object(u.jsx)(U, {
                                                  fontsize: '26px',
                                                  bcolor: '#35c759',
                                                  d: '50px',
                                                  to: '/PhoneCallfull/CallLink?chamada=true&number='
                                                      .concat(
                                                          s.get('number'),
                                                          '&recebendo='
                                                      )
                                                      .concat(
                                                          s.get('recebendo')
                                                      ),
                                                  onclick: function () {
                                                      A.communication.AceptCall(
                                                          s.get('number')
                                                      ),
                                                          j('incall'),
                                                          I('center'),
                                                          'true' ===
                                                              s.get(
                                                                  'recebendo'
                                                              ) &&
                                                              (h(!0),
                                                              w({
                                                                  incal: !0,
                                                                  decorido: 1,
                                                              }));
                                                  },
                                                  children: 'call',
                                              }),
                                    ],
                                }),
                            }),
                        ],
                    })
                );
            }
            function q(e) {
                var t = e.children,
                    c = e.name,
                    n = e.onclick;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsxs)('div', {
                        className: 'NumberCenterCallLinkToolsExt',
                        children: [
                            Object(u.jsx)('div', {
                                className: 'NumberCenterCallLinkTools ',
                                onClick: n,
                                children: Object(u.jsx)('i', {
                                    class: 'material-icons',
                                    children: t,
                                }),
                            }),
                            Object(u.jsx)('p', { children: c }),
                        ],
                    }),
                });
            }
            function $(e) {
                var t = e.setMain,
                    c = e.setDesfoc,
                    a = A.Functions.useQuery();
                Object(n.useEffect)(
                    function () {
                        t({ color: '#f8f7fc', img: 'none' }), c('none');
                    },
                    [t, c]
                );
                var s = Object(n.useState)({
                        number: a.get('number') ? a.get('number') : '',
                        data: {
                            name: '',
                            sobrenome: '',
                            favorito: !1,
                            img: '',
                        },
                    }),
                    i = Object(o.a)(s, 2),
                    r = i[0],
                    l = i[1];
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsxs)('div', {
                        className: 'BoxMainInfoContactadd',
                        children: [
                            Object(u.jsx)(Y, {
                                childrenLeft: Object(u.jsx)(X, {
                                    txtaling: 'left',
                                    to: '/PhoneCallFull/PhoneApp?aba='.concat(
                                        a.get('lastpage')
                                    ),
                                    cursor: !0,
                                    children: 'Cacelar',
                                }),
                                childrenRight: Object(u.jsx)(X, {
                                    to: '/',
                                    color: 'Black',
                                    txtaling: 'right',
                                    onclick: function () {
                                        A.communication.SaveContact(r);
                                    },
                                    cursor: !0,
                                    children: 'OK',
                                }),
                                children: Object(u.jsx)(X, {
                                    color: 'black',
                                    children: 'New Contact',
                                }),
                            }),
                            Object(u.jsx)(Q, {
                                children: Object(u.jsx)(E, {
                                    width: '70px',
                                    height: '70px',
                                }),
                            }),
                            Object(u.jsx)(Q, {
                                padding: '5px 0',
                                children: Object(u.jsx)('p', {
                                    className: 'addFoto Tx-a-c blueC',
                                    children: 'Adicionar Foto',
                                }),
                            }),
                            Object(u.jsxs)('div', {
                                className: 'CardContactsTools',
                                children: [
                                    Object(u.jsx)('div', {
                                        className: 'NumberCenterNovoContato',
                                        children: Object(u.jsx)('input', {
                                            type: 'text',
                                            placeholder: 'Nome',
                                            onKeyUp: function (e) {
                                                l({
                                                    number: r.number,
                                                    data: {
                                                        name: e.target.value,
                                                        sobrenome:
                                                            r.data.sobrenome,
                                                        favorito:
                                                            r.data.favorito,
                                                        img: r.data.img,
                                                    },
                                                });
                                            },
                                        }),
                                    }),
                                    Object(u.jsx)('div', {
                                        className: 'NumberCenterNovoContato',
                                        children: Object(u.jsx)('input', {
                                            type: 'text',
                                            placeholder: 'Sobrenome',
                                            onKeyUp: function (e) {
                                                l({
                                                    number: r.number,
                                                    data: {
                                                        name: r.data.name,
                                                        sobrenome:
                                                            e.target.value,
                                                        favorito:
                                                            r.data.favorito,
                                                        img: r.data.img,
                                                    },
                                                });
                                            },
                                        }),
                                    }),
                                    Object(u.jsx)('div', {
                                        className: 'NumberCenterNovoContato',
                                        children:
                                            9 === r.number.length
                                                ? Object(u.jsx)('input', {
                                                      className: 'input',
                                                      type: 'text',
                                                      placeholder: 'Peeeehone',
                                                      value: A.Functions.FormatStringNumber(
                                                          r.number
                                                      ),
                                                      disabled: !0,
                                                  })
                                                : Object(u.jsx)('input', {
                                                      className: 'input',
                                                      type: 'text',
                                                      placeholder: 'Phone',
                                                      onChange: function (e) {
                                                          l({
                                                              number: e.target
                                                                  .value,
                                                              data: {
                                                                  name: r.data
                                                                      .name,
                                                                  sobrenome:
                                                                      r.data
                                                                          .sobrenome,
                                                                  favorito:
                                                                      r.data
                                                                          .favorito,
                                                                  img: r.data
                                                                      .img,
                                                              },
                                                          });
                                                      },
                                                  }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function ee(e) {
                var t = e.setMain,
                    c = e.setDesfoc,
                    a = A.Functions.useQuery();
                return (
                    Object(n.useEffect)(
                        function () {
                            t({ color: '#f8f7fc', img: 'none' }), c('none');
                        },
                        [t, c]
                    ),
                    Object(u.jsx)(u.Fragment, {
                        children: Object(u.jsxs)('div', {
                            className: 'BoxMainInfoContact',
                            children: [
                                Object(u.jsxs)('label', {
                                    children: [
                                        Object(u.jsx)(R, {
                                            fontsize: '20px',
                                            color: '#0179fe',
                                            to: '/PhoneCallFull/PhoneApp?aba='.concat(
                                                a.get('lastpage')
                                            ),
                                            children: 'chevron_left',
                                        }),
                                        Object(u.jsx)('p', {
                                            children: 'Contacts',
                                        }),
                                    ],
                                }),
                                Object(u.jsx)('div', {
                                    className: 'FullContact',
                                    children: Object(u.jsx)(E, {
                                        width: '70px',
                                        height: '70px',
                                    }),
                                }),
                                Object(u.jsx)('div', {
                                    className: 'FullContact',
                                    children: a.get('name'),
                                }),
                                Object(u.jsxs)(K, {
                                    children: [
                                        Object(u.jsx)(J, {
                                            to: '/PhoneCallFull/MesageIn?number='.concat(
                                                a.get('number'),
                                                '&buscar=true'
                                            ),
                                            title: 'Message',
                                            children: 'chat_bubble',
                                        }),
                                        Object(u.jsx)(J, {
                                            to: '/PhoneCallfull/CallLink?number='.concat(
                                                a.get('number'),
                                                '&recebendo=false&chamada=true'
                                            ),
                                            onclick: function () {
                                                A.communication.CallNumber(
                                                    a.get('number')
                                                ),
                                                    A.communication.InserRecents(
                                                        a.get('number')
                                                    );
                                            },
                                            title: 'Call',
                                            children: 'local_phone',
                                        }),
                                        Object(u.jsx)(J, {
                                            title: 'WhatsApp',
                                            children: 'whatsapp',
                                        }),
                                    ],
                                }),
                                Object(u.jsxs)('div', {
                                    className: 'CardContactsTools',
                                    children: [
                                        Object(u.jsx)(H, {
                                            title: 'Name',
                                            children: a.get('name'),
                                        }),
                                        Object(u.jsx)(H, {
                                            title: 'Phone',
                                            children: a.get('number'),
                                        }),
                                        Object(u.jsx)(H, {
                                            children: 'Remove From Favourites',
                                        }),
                                        Object(u.jsx)(H, {
                                            onclick: function () {
                                                A.communication.DeleteContact(
                                                    a.get('number')
                                                );
                                            },
                                            children: 'Remove Contact',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            }
            function te() {
                var e = Object(n.useState)(!1),
                    t = Object(o.a)(e, 2),
                    c = t[0],
                    a = t[1],
                    s = Object(n.useState)(''),
                    i = Object(o.a)(s, 2),
                    r = i[0],
                    l = i[1];
                function j(e) {
                    r.length < 9 && l(r + e);
                }
                return (
                    Object(n.useEffect)(
                        function () {
                            var e = r.length;
                            a(e > 0);
                        },
                        [r]
                    ),
                    Object(u.jsxs)(u.Fragment, {
                        children: [
                            Object(u.jsx)('div', {
                                className: 'BoxDisc',
                                children: Object(u.jsx)('h1', {
                                    id: 'NumberDisc',
                                    children: A.Functions.FormatStringNumber(r),
                                }),
                            }),
                            Object(u.jsxs)('div', {
                                className: 'BoxNumber',
                                children: [
                                    Object(u.jsxs)('div', {
                                        className: 'LineNumber mb-2',
                                        children: [
                                            Object(u.jsx)(ce, {
                                                caracter: '',
                                                onclick: function () {
                                                    j('1');
                                                },
                                                children: '1',
                                            }),
                                            Object(u.jsx)(ce, {
                                                caracter: 'A B C',
                                                onclick: function () {
                                                    j('2');
                                                },
                                                children: '2',
                                            }),
                                            Object(u.jsx)(ce, {
                                                caracter: 'D E F',
                                                onclick: function () {
                                                    j('3');
                                                },
                                                children: '3',
                                            }),
                                        ],
                                    }),
                                    Object(u.jsxs)('div', {
                                        className: 'LineNumber mb-2',
                                        children: [
                                            Object(u.jsx)(ce, {
                                                caracter: 'G H I',
                                                onclick: function () {
                                                    j('4');
                                                },
                                                children: '4 ',
                                            }),
                                            Object(u.jsx)(ce, {
                                                caracter: 'J K L',
                                                onclick: function () {
                                                    j('5');
                                                },
                                                children: '5',
                                            }),
                                            Object(u.jsx)(ce, {
                                                caracter: 'M N O',
                                                onclick: function () {
                                                    j('6');
                                                },
                                                children: '6',
                                            }),
                                        ],
                                    }),
                                    Object(u.jsxs)('div', {
                                        className: 'LineNumber mb-2',
                                        children: [
                                            Object(u.jsx)(ce, {
                                                caracter: 'P Q R S',
                                                onclick: function () {
                                                    j('7');
                                                },
                                                children: '7',
                                            }),
                                            Object(u.jsx)(ce, {
                                                caracter: 'T U V',
                                                onclick: function () {
                                                    j('8');
                                                },
                                                children: '8',
                                            }),
                                            Object(u.jsx)(ce, {
                                                caracter: 'W X Y Z',
                                                onclick: function () {
                                                    j('9');
                                                },
                                                children: '9',
                                            }),
                                        ],
                                    }),
                                    Object(u.jsxs)('div', {
                                        className: 'LineNumber mb-2',
                                        children: [
                                            Object(u.jsx)('div', {
                                                className: 'NumberCenter',
                                                onClick: function () {
                                                    j('*');
                                                },
                                                children: Object(u.jsx)('i', {
                                                    className:
                                                        'fal fa-asterisk',
                                                }),
                                            }),
                                            Object(u.jsxs)('div', {
                                                className: 'Number',
                                                onClick: function () {
                                                    j('0');
                                                },
                                                children: [
                                                    Object(u.jsx)('h1', {
                                                        children: '0',
                                                    }),
                                                    Object(u.jsx)('p', {
                                                        children: Object(u.jsx)(
                                                            'i',
                                                            {
                                                                class: 'fal fa-plus',
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            Object(u.jsx)('div', {
                                                className: 'NumberCenter',
                                                onClick: function () {
                                                    j('#');
                                                },
                                                children: Object(u.jsx)('i', {
                                                    class: 'fal fa-hashtag',
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(u.jsxs)('div', {
                                        className: 'LineNumber mb-2',
                                        children: [
                                            Object(u.jsx)('div', {
                                                className: 'FakeNumber',
                                                children:
                                                    c &&
                                                    Object(u.jsx)(R, {
                                                        to: '/PhoneCallFull/Novocontato?lastpage=dialpad&number='.concat(
                                                            r
                                                        ),
                                                        color: '#0179fe',
                                                        fontsize: '26px',
                                                        children: 'add',
                                                    }),
                                            }),
                                            Object(u.jsx)(U, {
                                                to: '/PhoneCallfull/CallLink?number='.concat(
                                                    r,
                                                    '&recebendo=false&chamada=true'
                                                ),
                                                fontsize: '26px',
                                                d: '50px',
                                                onclick: function () {
                                                    A.communication.CallNumber(
                                                        r
                                                    ),
                                                        A.communication.InserRecents(
                                                            r
                                                        );
                                                },
                                                bcolor: '#35c759',
                                                cursor: !0,
                                                children: 'call',
                                            }),
                                            Object(u.jsx)('div', {
                                                className: 'FakeNumber',
                                                children:
                                                    c &&
                                                    Object(u.jsx)(R, {
                                                        onclick: function () {
                                                            l(
                                                                r.substring(
                                                                    0,
                                                                    r.length - 1
                                                                )
                                                            );
                                                        },
                                                        children: 'backspace',
                                                    }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            }
            function ce(e) {
                var t = e.children,
                    c = e.caracter,
                    n = e.onclick;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsxs)('div', {
                        className: 'Number',
                        onClick: n,
                        children: [
                            Object(u.jsx)('h1', { children: t }),
                            Object(u.jsx)('p', { children: c }),
                        ],
                    }),
                });
            }
            function ne() {
                var e = Object(n.useState)(A.communication.GetContact()),
                    t = Object(o.a)(e, 1)[0],
                    c = Object(n.useState)(''),
                    a = Object(o.a)(c, 2),
                    s = a[0],
                    i = a[1];
                return Object(u.jsxs)(u.Fragment, {
                    children: [
                        Object(u.jsxs)('div', {
                            className: 'ContactsViweI',
                            children: [
                                Object(u.jsxs)('div', {
                                    className: 'between',
                                    children: [
                                        Object(u.jsx)('h1', {
                                            children: 'Contacts',
                                        }),
                                        Object(u.jsx)(R, {
                                            to: '/PhoneCallFull/Novocontato?lastpage=contacts',
                                            color: '#0179fe',
                                            fontsize: '19px',
                                            cursor: !0,
                                            outlined: !0,
                                            children: 'add',
                                        }),
                                    ],
                                }),
                                Object(u.jsxs)('div', {
                                    className: 'input-grup',
                                    children: [
                                        Object(u.jsx)('i', {
                                            class: 'fal fa-search ml-1',
                                        }),
                                        Object(u.jsx)('input', {
                                            className: 'Input ml-2',
                                            type: 'text',
                                            placeholder: 'Search',
                                            onChange: function (e) {
                                                i(e.target.value);
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(u.jsx)('div', {
                            className: 'ContactsViweII',
                            children: t.map(function (e) {
                                if (
                                    -1 !=
                                    e.data.name
                                        .toLowerCase()
                                        .indexOf(s.toLowerCase())
                                )
                                    return Object(u.jsx)(ae, { db: e });
                            }),
                        }),
                    ],
                });
            }
            function ae(e) {
                var t = e.db;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)('div', {
                        className: 'CardContacts mt-1',
                        children: Object(u.jsx)(b.b, {
                            to: '/PhoneCallFull/infoContacts?number='
                                .concat(t.number, '&name=')
                                .concat(t.data.name, '&favorito=')
                                .concat(t.data.favorito, '&lastpage=contacts'),
                            children: Object(u.jsx)('div', {
                                className: 'InfoCardContacts a-c',
                                children: Object(u.jsx)('p', {
                                    className: 'name mb-1',
                                    children: t.data.name,
                                }),
                            }),
                        }),
                    }),
                });
            }
            function se(e) {
                var t = e.setMain,
                    c = e.setDesfoc,
                    a =
                        (e.BackPage,
                        Object(n.useState)({ I: !0, II: !1, III: !1, IV: !1 })),
                    s = Object(o.a)(a, 2),
                    i = s[0],
                    r = s[1],
                    l = Object(n.useState)(A.communication.GetContact()),
                    j =
                        (Object(o.a)(l, 1)[0],
                        Object(n.useState)(A.communication.GetRecents())),
                    d = Object(o.a)(j, 1)[0],
                    b = Object(n.useState)(!1),
                    m = Object(o.a)(b, 2),
                    h = m[0],
                    x = m[1],
                    O = A.Functions.useQuery();
                function f() {
                    return Object(u.jsxs)(u.Fragment, {
                        children: [
                            Object(u.jsx)('div', {
                                className: 'FavouritessViweI',
                                children: Object(u.jsx)('div', {
                                    className: 'between',
                                    children: Object(u.jsx)('h1', {
                                        children: 'Favourites',
                                    }),
                                }),
                            }),
                            Object(u.jsx)('div', {
                                className: 'FavouritesViweII',
                            }),
                        ],
                    });
                }
                function p() {
                    return Object(u.jsxs)(u.Fragment, {
                        children: [
                            Object(u.jsx)('div', {
                                className: 'RecentViweI',
                                children: Object(u.jsx)('h1', {
                                    children: 'Recentes',
                                }),
                            }),
                            Object(u.jsx)('div', {
                                className: 'RecentViweII',
                                children: d
                                    .map(function (e) {
                                        return Object(u.jsx)(oe, {
                                            db: e,
                                            data: A.Functions.WhatTime(e.data),
                                        });
                                    })
                                    .reverse(),
                            }),
                        ],
                    });
                }
                return (
                    Object(n.useEffect)(
                        function () {
                            t({ color: '#f8f7fc', img: 'none' }), c('none');
                        },
                        [t, c]
                    ),
                    Object(n.useEffect)(
                        function () {
                            var e = !0;
                            switch (O.get('aba')) {
                                case 'dialpad':
                                    r({ I: e, II: !1, III: !1, IV: !1 });
                                    break;
                                case 'contacts':
                                    r({ I: !1, II: e, III: !1, IV: !1 });
                                    break;
                                case 'recents':
                                    r({ I: !1, II: !1, III: e, IV: !1 });
                                    break;
                                case 'favourites':
                                    r({ I: !1, II: !1, III: !1, IV: e });
                            }
                        },
                        [h]
                    ),
                    Object(u.jsx)(u.Fragment, {
                        children: Object(u.jsxs)('div', {
                            className: 'BVMainFull',
                            children: [
                                Object(u.jsxs)('div', {
                                    className: 'CallViwer',
                                    children: [
                                        i.I && Object(u.jsx)(te, {}),
                                        i.II && Object(u.jsx)(ne, {}),
                                        i.III && Object(u.jsx)(p, {}),
                                        i.IV && Object(u.jsx)(f, {}),
                                    ],
                                }),
                                Object(u.jsxs)('div', {
                                    className: 'CallTols',
                                    children: [
                                        Object(u.jsx)(ie, {
                                            name: 'Favorites',
                                            to: '/PhoneCallFull/PhoneApp?aba=favourites',
                                            onclick: function () {
                                                return x(!h);
                                            },
                                            children: 'star',
                                        }),
                                        Object(u.jsx)(ie, {
                                            name: 'Recents',
                                            to: '/PhoneCallFull/PhoneApp?aba=recents',
                                            onclick: function () {
                                                return x(!h);
                                            },
                                            children: 'schedule',
                                        }),
                                        Object(u.jsx)(ie, {
                                            name: 'Contacts',
                                            to: '/PhoneCallFull/PhoneApp?aba=contacts',
                                            onclick: function () {
                                                return x(!h);
                                            },
                                            children: 'account_circle',
                                        }),
                                        Object(u.jsx)(ie, {
                                            name: 'Keypad',
                                            to: '/PhoneCallFull/PhoneApp?aba=dialpad',
                                            onclick: function () {
                                                return x(!h);
                                            },
                                            children: 'dialpad',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            }
            function ie(e) {
                var t = e.children,
                    c = e.name,
                    n = e.to,
                    a = e.onclick;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)(b.b, {
                        to: n,
                        children: Object(u.jsxs)('div', {
                            className: 'CallTolsIcon',
                            onClick: a,
                            children: [
                                Object(u.jsx)('div', {
                                    className: 'j-c',
                                    children: Object(u.jsx)('i', {
                                        class: 'material-icons',
                                        children: t,
                                    }),
                                }),
                                Object(u.jsx)('p', { children: c }),
                            ],
                        }),
                    }),
                });
            }
            function oe(e) {
                var t = e.db,
                    c = e.data;
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsxs)('div', {
                        className: 'CardRecente',
                        children: [
                            Object(u.jsx)('div', {
                                className: 'IconCard',
                                children: Object(u.jsx)('i', {
                                    class: 'material-icons',
                                    children: 'phone_forwarded',
                                }),
                            }),
                            Object(u.jsxs)('div', {
                                className: 'InfoCard a-c',
                                children: [
                                    Object(u.jsxs)('div', {
                                        className: 'InfoBox',
                                        children: [
                                            Object(u.jsx)('p', {
                                                className: 'name',
                                                children: t.name,
                                            }),
                                            Object(u.jsx)('p', {
                                                className: 'phone',
                                                children: t.number,
                                            }),
                                        ],
                                    }),
                                    Object(u.jsxs)('div', {
                                        className: 'InfoBox a-c mr-2',
                                        children: [
                                            Object(u.jsx)('p', {
                                                className: 'time',
                                                children: c,
                                            }),
                                            Object(u.jsx)(b.b, {
                                                to: '/PhoneCallFull/infoContacts?number='
                                                    .concat(t.number, '&name=')
                                                    .concat(
                                                        t.name,
                                                        '&favorito=',
                                                        '&lastpage=recents'
                                                    ),
                                                children: Object(u.jsx)('i', {
                                                    class: 'fal fa-info-circle ml-1',
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function re(e) {
                e.setMain, e.setDesfoc, A.Functions.useQuery();
                var t = Object(n.useState)(A.communication.GetHistory()),
                    c = Object(o.a)(t, 2),
                    a = c[0];
                c[1];
                return Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsxs)('div', {
                        className: 'BoxMainMesages',
                        children: [
                            Object(u.jsxs)('label', {
                                className: 'TopBar-Tools',
                                children: [
                                    Object(u.jsx)(b.b, {
                                        to: '/',
                                        children: Object(u.jsxs)('div', {
                                            className: 'flex',
                                            children: [
                                                Object(u.jsx)('i', {
                                                    class: 'material-icons-outlined blueC',
                                                    children: 'chevron_left',
                                                }),
                                                Object(u.jsx)('p', {
                                                    className: 'blueC',
                                                    children: 'Back',
                                                }),
                                            ],
                                        }),
                                    }),
                                    Object(u.jsx)('p', {
                                        className: 'Tx-a-r',
                                        children: 'OK',
                                    }),
                                ],
                            }),
                            Object(u.jsx)('div', {
                                className: 'TitleViwer',
                                children: Object(u.jsx)('h1', {
                                    children: 'Mensagens',
                                }),
                            }),
                            Object(u.jsx)('div', {
                                className: 'MensageViweII',
                                children: a.map(function (e) {
                                    if (0 !== e.contain_message)
                                        return Object(u.jsx)('div', {
                                            children: Object(u.jsx)(b.b, {
                                                to: '/PhoneCallFull/MesageIn?number='
                                                    .concat(
                                                        A.communication.WhatPhone(
                                                            e.id
                                                        ),
                                                        '&chat_id='
                                                    )
                                                    .concat(e.id),
                                                children: Object(u.jsxs)(
                                                    'div',
                                                    {
                                                        className:
                                                            'CardMensage ',
                                                        onClick: function () {
                                                            A.communication.GetChatId(
                                                                e.id
                                                            );
                                                        },
                                                        children: [
                                                            Object(u.jsx)(E, {
                                                                width: '35px',
                                                                height: '35px',
                                                            }),
                                                            Object(u.jsxs)(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'InfoCardMensage ',
                                                                    children: [
                                                                        Object(
                                                                            u.jsxs
                                                                        )(
                                                                            'label',
                                                                            {
                                                                                className:
                                                                                    'name between',
                                                                                children:
                                                                                    [
                                                                                        Object(
                                                                                            u.jsx
                                                                                        )(
                                                                                            'p',
                                                                                            {
                                                                                                children:
                                                                                                    A.communication.VerifyContact(
                                                                                                        A.communication.WhatPhone(
                                                                                                            e.id
                                                                                                        )
                                                                                                    ),
                                                                                            }
                                                                                        ),
                                                                                        Object(
                                                                                            u.jsxs
                                                                                        )(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'leftMensage flex ',
                                                                                                children:
                                                                                                    [
                                                                                                        Object(
                                                                                                            u.jsx
                                                                                                        )(
                                                                                                            'p',
                                                                                                            {
                                                                                                                className:
                                                                                                                    'mr-2',
                                                                                                                children:
                                                                                                                    '10:40',
                                                                                                            }
                                                                                                        ),
                                                                                                        Object(
                                                                                                            u.jsx
                                                                                                        )(
                                                                                                            'i',
                                                                                                            {
                                                                                                                class: 'material-icons-outlined',
                                                                                                                children:
                                                                                                                    'chevron_right',
                                                                                                            }
                                                                                                        ),
                                                                                                    ],
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            u.jsx
                                                                        )('p', {
                                                                            className:
                                                                                'TxtAreaMensage',
                                                                            children:
                                                                                A.communication.VerifyCharacter(
                                                                                    e.last_message
                                                                                ),
                                                                        }),
                                                                    ],
                                                                }
                                                            ),
                                                        ],
                                                    }
                                                ),
                                            }),
                                        });
                                }),
                            }),
                        ],
                    }),
                });
            }
            var le = c(16);
            function je(e) {
                var t = e.setMain,
                    c = e.setDesfoc,
                    a = A.Functions.useQuery();
                Object(n.useEffect)(
                    function () {
                        t({ color: '#fff', img: 'none' }), c('none');
                    },
                    [t, c]
                );
                var s = Object(n.useState)(A.communication.GetSSN()),
                    i = Object(o.a)(s, 1)[0],
                    r = Object(n.useState)([]),
                    l = Object(o.a)(r, 2),
                    j = l[0],
                    d = l[1],
                    b = Object(n.useState)(''),
                    m = Object(o.a)(b, 2),
                    h = m[0],
                    x = m[1],
                    O = Object(n.useState)(''),
                    f = Object(o.a)(O, 2),
                    p = f[0],
                    g = f[1];
                return (
                    Object(n.useEffect)(function () {
                        g(a.get('chat_id')),
                            'true' === a.get('buscar') &&
                                alt.emit('Phone:GetChatId', a.get('number')),
                            de(),
                            A.communication.CheckAtlV() &&
                                (alt.on('Phone:GetChatMessage', function (e) {
                                    d(e), de();
                                }),
                                alt.on('Phone:ReciveMessage', function (e) {
                                    A.communication.GetChatId(e.chat_id);
                                }),
                                alt.on('Phone:GetIdChat', function (e) {
                                    g(e);
                                }));
                    }, []),
                    Object(u.jsx)(u.Fragment, {
                        children: Object(u.jsxs)('div', {
                            className: 'BoxMainMesages',
                            children: [
                                Object(u.jsxs)('label', {
                                    className: 'TopBar-Tools',
                                    children: [
                                        Object(u.jsxs)('div', {
                                            className: 'boxMsgPadrao',
                                            children: [
                                                Object(u.jsx)(R, {
                                                    color: '#0179fe',
                                                    fontsize: '24px',
                                                    ml: '-11px',
                                                    to: '/PhoneCallFull/Mesage',
                                                    cursor: !0,
                                                    outlined: !0,
                                                    children: 'chevron_left',
                                                }),
                                                Object(u.jsx)('p', {
                                                    className: 'blueC',
                                                    style: {
                                                        marginLeft: '-3px',
                                                    },
                                                    children: 'Back',
                                                }),
                                            ],
                                        }),
                                        Object(u.jsxs)('div', {
                                            className: 'boxIMmensage',
                                            children: [
                                                Object(u.jsx)('div', {
                                                    className: 'PefilMsg',
                                                    children: Object(u.jsx)(E, {
                                                        width: '40px',
                                                        height: '40px',
                                                    }),
                                                }),
                                                Object(u.jsx)('p', {
                                                    className: 'phone',
                                                    children: a.get('number'),
                                                }),
                                            ],
                                        }),
                                        Object(u.jsx)('p', {
                                            className: 'boxMsgPadrao Tx-a-r',
                                        }),
                                    ],
                                }),
                                Object(u.jsx)(W, {
                                    height: '386px',
                                    bcolor: '#fff',
                                    id: 'message',
                                    bt: !0,
                                    overflow: !0,
                                    children: j.map(function (e) {
                                        return (
                                            console.log(i),
                                            e.ssn == i
                                                ? Object(u.jsx)(z, {
                                                      children: e.message,
                                                  })
                                                : Object(u.jsx)(G, {
                                                      children: e.message,
                                                  })
                                        );
                                    }),
                                }),
                                Object(u.jsxs)('div', {
                                    className: 'InputConversation',
                                    children: [
                                        Object(u.jsx)(R, {
                                            color: '#35c759',
                                            fontsize: '20px',
                                            mr: '5px',
                                            cursor: !0,
                                            outlined: !0,
                                            children: 'room',
                                        }),
                                        Object(u.jsxs)('div', {
                                            className: 'input-grup-mensage',
                                            children: [
                                                Object(u.jsx)('input', {
                                                    className: 'Input ml-1',
                                                    type: 'text',
                                                    placeholder: 'Search',
                                                    value: h,
                                                    onChange: function (e) {
                                                        x(e.target.value);
                                                    },
                                                    onKeyUp: function (e) {
                                                        'Enter' === e.key &&
                                                            (A.Functions.VerifyTxt(
                                                                h
                                                            ) &&
                                                                (d(
                                                                    [].concat(
                                                                        Object(
                                                                            le.a
                                                                        )(j),
                                                                        [
                                                                            {
                                                                                type: 'msg',
                                                                                ssn: i,
                                                                                message:
                                                                                    h,
                                                                            },
                                                                        ]
                                                                    )
                                                                ),
                                                                x(''),
                                                                de()),
                                                            A.communication.CreateMessage(
                                                                'msg',
                                                                h,
                                                                p,
                                                                a.get('number')
                                                            ));
                                                    },
                                                }),
                                                Object(u.jsx)('div', {
                                                    className: 'BtnSend ',
                                                    onClick: function () {
                                                        A.Functions.VerifyTxt(
                                                            h
                                                        ) &&
                                                            (A.communication.CreateMessage(
                                                                'msg',
                                                                h,
                                                                p,
                                                                a.get('number')
                                                            ),
                                                            d(
                                                                [].concat(
                                                                    Object(
                                                                        le.a
                                                                    )(j),
                                                                    [
                                                                        {
                                                                            type: 'msg',
                                                                            ssn: i,
                                                                            message:
                                                                                h,
                                                                        },
                                                                    ]
                                                                )
                                                            ),
                                                            x(''),
                                                            de());
                                                    },
                                                    children: Object(u.jsx)(
                                                        'i',
                                                        {
                                                            class: 'material-icons-outlined',
                                                            children:
                                                                'arrow_upward',
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            }
            function de() {
                var e = document.getElementById('message');
                e.scrollTop = e.scrollHeight - e.clientHeight;
            }
            function be(e) {
                var t = e.setMain,
                    c = e.setDesfoc,
                    a = Object(n.useState)({ I: !1, II: !1, III: !1, IV: !1 }),
                    s = Object(o.a)(a, 2),
                    i = s[0],
                    r = s[1],
                    l = Object(n.useState)(!0),
                    j = Object(o.a)(l, 2),
                    d = j[0],
                    m = j[1],
                    x = Object(h.g)().appType;
                return (
                    Object(n.useEffect)(
                        function () {
                            t({ color: '#f8f7fc', img: 'none' }), c('none');
                        },
                        [t, c]
                    ),
                    Object(n.useEffect)(
                        function () {
                            var e = !0;
                            switch (x) {
                                case 'infoContacts':
                                    r({
                                        I: e,
                                        II: !1,
                                        III: !1,
                                        IV: !1,
                                        V: !1,
                                        VI: !1,
                                    });
                                    break;
                                case 'CallLink':
                                    r({
                                        I: !1,
                                        II: e,
                                        III: !1,
                                        IV: !1,
                                        V: !1,
                                        VI: !1,
                                    });
                                    break;
                                case 'Novocontato':
                                    r({
                                        I: !1,
                                        II: !1,
                                        III: e,
                                        IV: !1,
                                        V: !1,
                                        VI: !1,
                                    });
                                    break;
                                case 'PhoneApp':
                                    r({
                                        I: !1,
                                        II: !1,
                                        III: !1,
                                        IV: e,
                                        V: !1,
                                        VI: !1,
                                    });
                                    break;
                                case 'Mesage':
                                    r({
                                        I: !1,
                                        II: !1,
                                        III: !1,
                                        IV: !1,
                                        V: e,
                                        VI: !1,
                                    });
                                    break;
                                case 'MesageIn':
                                    r({
                                        I: !1,
                                        II: !1,
                                        III: !1,
                                        IV: !1,
                                        V: !1,
                                        VI: e,
                                    });
                            }
                        },
                        [x]
                    ),
                    Object(u.jsxs)(u.Fragment, {
                        children: [
                            Object(u.jsxs)('div', {
                                className: 'BVMainFull',
                                children: [
                                    i.I &&
                                        Object(u.jsx)(ee, {
                                            setMain: t,
                                            setDesfoc: c,
                                        }),
                                    i.II &&
                                        Object(u.jsx)(Z, {
                                            setMain: t,
                                            setDesfoc: c,
                                            setBackBar: m,
                                        }),
                                    i.III &&
                                        Object(u.jsx)($, {
                                            setMain: t,
                                            setDesfoc: c,
                                        }),
                                    i.IV &&
                                        Object(u.jsx)(se, {
                                            setMain: t,
                                            setDesfoc: c,
                                        }),
                                    i.V &&
                                        Object(u.jsx)(re, {
                                            setMain: t,
                                            setDesfoc: c,
                                        }),
                                    i.VI &&
                                        Object(u.jsx)(je, {
                                            setMain: t,
                                            setDesfoc: c,
                                        }),
                                ],
                            }),
                            d &&
                                Object(u.jsx)(b.b, {
                                    to: '/',
                                    children: Object(u.jsx)('div', {
                                        className: 'BarReturnExtern',
                                        children: Object(u.jsx)('div', {
                                            className: 'BarRetunr',
                                            onClick: function () {},
                                        }),
                                    }),
                                }),
                        ],
                    })
                );
            }
            function ue(e) {
                var t = e.setMain,
                    c = e.setDesfoc;
                return (
                    Object(n.useEffect)(
                        function () {
                            t({
                                color: 'transparent',
                                img: 'url('.concat(D, ')'),
                            }),
                                c('none'),
                                y({ type: 'stop' }),
                                k({ type: 'stop' });
                        },
                        [t, c]
                    ),
                    Object(u.jsxs)(u.Fragment, {
                        children: [
                            Object(u.jsx)('div', {
                                className: 'BVMain',
                                children: Object(u.jsx)('div', {
                                    className: 'j-c',
                                    children: Object(u.jsx)('div', {}),
                                }),
                            }),
                            Object(u.jsx)('div', {
                                className: 'BVRodape',
                                children: Object(u.jsxs)('div', {
                                    className: 'icon-Bar',
                                    children: [
                                        Object(u.jsx)(m, {
                                            img: 'call',
                                            to: '/PhoneCallFull/PhoneApp',
                                        }),
                                        Object(u.jsx)(m, {
                                            img: 'contacts',
                                            to: '/PhoneCallFull/PhoneApp?aba=contacts',
                                        }),
                                        Object(u.jsx)(m, {
                                            img: 'msg',
                                            to: '/PhoneCallFull/Mesage',
                                        }),
                                        Object(u.jsx)(m, {
                                            img: 'camera',
                                            to: '',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    })
                );
            }
            var me = function () {
                    var e = Object(n.useState)({
                            color: 'transparent',
                            img: 'url('.concat(D, ')'),
                        }),
                        t = Object(o.a)(e, 2),
                        c = t[0],
                        a = t[1],
                        s = Object(n.useState)('none'),
                        i = Object(o.a)(s, 2),
                        r = i[0],
                        l = i[1];
                    return Object(u.jsx)(v, {
                        Main: c,
                        Desfoc: r,
                        children: Object(u.jsxs)(h.c, {
                            children: [
                                Object(u.jsx)(h.a, {
                                    path: '/',
                                    element: Object(u.jsx)(ue, {
                                        setMain: a,
                                        setDesfoc: l,
                                    }),
                                }),
                                Object(u.jsx)(h.a, {
                                    path: '/PhoneCallFull/:appType',
                                    element: Object(u.jsx)(be, {
                                        setMain: a,
                                        setDesfoc: l,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                he = c(20);
            i.a.render(
                Object(u.jsx)(b.a, {
                    children: Object(u.jsx)(a.a.StrictMode, {
                        children: Object(u.jsx)(he.a, {
                            children: Object(u.jsx)(me, {}),
                        }),
                    }),
                }),
                document.getElementById('root')
            );
        },
    },
    [[71, 1, 2]],
]);
//# sourceMappingURL=main.96f93845.chunk.js.map
