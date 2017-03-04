/* @flow */
import m from 'mithril'

import PokedexApp from './components/PokedexApp'

import reset from './styles/reset.css'
import app from './styles/app.css'

let str: number = 'hello world!';
console.log(str);

let container = document.body
m.mount(document.body, PokedexApp)
