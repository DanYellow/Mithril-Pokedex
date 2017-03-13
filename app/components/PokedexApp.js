// @flow
// @jsx Object

import m from 'mithril'
import _ from 'lodash'

import SearchBar from './SearchBar'
import Pokedex from './Pokedex'
import Loader from './Loader'
import Popin from './Popin'

import APIManager from '../APIManager'
import PkmnUtils from '../PkmnUtils'

const PokedexApp = {
  maxDexID: 721,

  oninit(vnode: any) {
    console.log("Pokedex initialized")

    this.pokemonList = []
    this.pokemonCache = []

    this.isLoading = true
    this.formSubmittedDebounce = _.debounce(this.formSubmitted, 600, true)

    this.loadingText = 'Chargement';
    this.searchValue = '';
  },

  oncreate(vnode) {},

  loadingEnded(pkmnList) {
    this.isLoading = false
    this.pokemonCache = pkmnList
    m.redraw()
  },

  onDataPopulation(pkmnList) {
    this.pokemonCache = pkmnList
  },

  formSubmitted(value) {
    this.searchValue = value

    this.isLoading = true
    if (value) {
      this.pokemonList = PkmnUtils.filterPokemon(value, this.pokemonCache)
    } else {
      this.pokemonList = this.pokemonCache
    }
    this.isLoading = false
    m.redraw()
  },

  view(vnode) {
    return (
      <div onscroll={ this.infiniteScroll }>
        <SearchBar submitCallback={ this.formSubmittedDebounce.bind(this) }/>
        <Pokedex list={this.pokemonList} search={this.searchValue} onLoadingEndCallback={this.loadingEnded.bind(this)} onDataPopulationCallback={this.onDataPopulation.bind(this)} />
        { this.isLoading && <Loader /> }

        { (this.pokemonList.length === 0 && !this.isLoading && this.searchValue) && <p>Aucun résultat</p> }
        { (vnode.attrs.id && this.pokemonCache[(vnode.attrs.id-1)]) && <Popin data={this.pokemonCache[(vnode.attrs.id-1)]} /> }
      </div>
    )
  }
}

export default PokedexApp
