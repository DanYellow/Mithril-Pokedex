/* @flow */

import m from 'mithril'
import _ from 'lodash'

import SearchBar from './SearchBar'
import Pokedex from './Pokedex'
import Loader from './Loader'

import APIManager from '../APIManager'
import PkmnUtils from '../PkmnUtils'

const PokedexApp = {
  maxDexID: 721,

  oninit(vnode: Object) {
    console.log("Pokedex initialized")

    this.pokemonList = []
    this.pokemonCache = []

    this.isLoading = true
    this.formSubmittedDebounce = _.debounce(this.formSubmitted, 600, true)

    this.loadingText = "Chargement";
  },

  oncreate(vnode: Object) {
    const maxDexID = 30
    APIManager.getPokemon(maxDexID).then((pkmnDatas) => {
      this.pokemonList = pkmnDatas
      this.pokemonCache = pkmnDatas
      window.debug.pokemon = pkmnDatas

      this.isLoading = false
      m.redraw()
    }).catch((error) => {
      console.error('error', error)
      this.isLoading = false 
    })
  },

  formSubmitted(value: string) {
    this.isLoading = true
    if (value) {
      this.pokemonList = PkmnUtils.filterPokemon(value, this.pokemonCache)
    } else {
      this.pokemonList = this.pokemonCache
    }
    this.isLoading = false
    m.redraw()
  },

  view(vnode: Object) {
    return (
      <div>
        <SearchBar submitCallback={ this.formSubmittedDebounce.bind(this) }/>
        { this.pokemonList.length > 0 && <Pokedex datas={this.pokemonList} /> }
        { (this.pokemonList.length === 0 && this.isLoading) && <Loader /> }

        { (this.pokemonList.length === 0 && !this.isLoading) && <p>Aucun résultat</p> }
      </div>
    )
  }
}

export default PokedexApp
