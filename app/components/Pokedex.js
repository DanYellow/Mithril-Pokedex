// @flow
// @jsx Object

import m from 'mithril'
import uuidV4 from 'uuid/v4'

import wordings from '../wordings'
import APIManager from '../APIManager'

import PokedexItem from './PokedexItem'

import './../styles/Pokedex.scss'

let Pokedex = {
  oninit(vnode:Object) {
    this.vnodeRef = vnode

    this.pokemonList = []
    this.pokemonCache = []
  },

  onupdate(vnode:Object) {},

  oncreate(vnode: Object) {
    this.fetchPokemon(50)
  },

  view (vnode:Object) {
    const {list, searchValue } = vnode.attrs

    return (
      <section class='Pokedex'>
        {this.pokemonList.map((pkmn) => {
          return <PokedexItem data={pkmn} key={uuidV4()} />
        })}
      </section>
    )
  },


  fetchPokemon(maxDexID: number = 15) {
    let allPromises = new Promise((resolve) => {
      resolve(true)
    })

    for (let id = 1; id <= maxDexID; id++) {
      allPromises = allPromises.then(() => {
        return APIManager.getPokemonForId(id).then((pkmnDatas) => {
          this.pokemonList.push(pkmnDatas)
          this.pokemonCache.push(pkmnDatas)

          this.vnodeRef.attrs.onDataPopulationCallback(this.pokemonCache)
          
          window.debug.pokemon = pkmnDatas
          if (!this.searchValue) {
            // m.redraw()
          }
        })
      })
    }
    allPromises.then(() => {
      this.vnodeRef.attrs.onLoadingEndCallback(this.pokemonCache)
      // m.redraw()
    })
  },
}


export default Pokedex
