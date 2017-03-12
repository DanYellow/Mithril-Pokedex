/* @flow */

import m from 'mithril'

import PokedexApp from './components/PokedexApp'

import reset from './styles/reset.css'
import app from './styles/app.css'

window.debug = {}

let container = document.body
// m.mount(document.body, PokedexApp)


m.route(document.body, "/", {
    "/": PokedexApp,
    "/pokemon/:id": PokedexApp,
    "/:id": PokedexApp,
})