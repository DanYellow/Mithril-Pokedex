// @flow
// @jsx Object

import m from 'mithril'

import './../styles/Loader.scss'

import loader from '../images/pika-loader-mini.gif'

const Loader = {
  oninit(vnode: Object) {
    this.vnodeRef = vnode
  },

  view(vnode: Object) {
    return (
      <figure class='Loader'>
        <img src={loader} />
        <figcaption>Chargement</figcaption>
      </figure>
    )
  }
}

export default Loader
