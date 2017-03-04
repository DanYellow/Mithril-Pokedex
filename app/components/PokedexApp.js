/* @flow */

import m from 'mithril'

import SearchBar from './SearchBar'
import Pokedex from './Pokedex'
import APIManager from '../APIManager'

const PokedexApp = {
  oninit(vnode: Object) {
    console.log("Pokedex initialized")
    
    this.pokemonList = []
    this.isLoading = true
  },

  oncreate(vnode: Object) {
    APIManager.getPokemon(26).then((pkmnDatas) => {
      this.pokemonList = pkmnDatas
      this.isLoading = false
      m.redraw()
    }).catch((error) => {
      console.error('error', error)
      this.isLoading = false
    })
  },

  formSubmitted(value: string) {},

  view(vnode: Object) {
    return (
      <div>
        <SearchBar submitCallback={(e) => this.formSubmitted()}/>
        { this.pokemonList.length > 0 && <Pokedex datas={this.pokemonList} /> }
        { this.pokemonList.length === 0 && <p>Chargement</p> }
      </div>
    )
  }
}

export default PokedexApp
