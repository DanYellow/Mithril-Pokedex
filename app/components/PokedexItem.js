/* @flow */

import m from 'mithril'
import FormData from 'form-data'

import wordings from '../wordings'
import Utils from '../utils'

import './../styles/PokedexItem.scss'

const PokedexItem = {
  oninit (vnode: Object) {
    this.vnodeRef = vnode 
  },

  view (vnode: Object) {
    let {data} = vnode.attrs
    let {name} = data
    const foo = 56

    return (
      <article class='PokedexItem'>
        <figure>
          <img src={data.sprites.front_default} width={100} />
          <figcaption>{name}</figcaption>
        </figure>
      </article>
    )
  }
}



export default PokedexItem
