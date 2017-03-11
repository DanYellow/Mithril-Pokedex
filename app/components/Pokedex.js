import m from 'mithril'
import uuidV4 from 'uuid/v4'

import wordings from '../wordings'
import PokedexItem from './PokedexItem'

import './../styles/Pokedex.scss'

const Pokedex = {
  oninit(vnode) {
    this.vnodeRef = vnode
  },

  view (vnode) {
    const pokemonList = vnode.attrs.datas

    return (
      <section class='Pokedex'>
        {pokemonList.map((pkmn) => {
          return <PokedexItem data={pkmn} key={uuidV4()} />
        })}
      </section>
    )
  }
}

export default Pokedex
