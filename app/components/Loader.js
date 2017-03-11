import m from 'mithril'

import './../styles/Loader.scss'

import loader from '../images/pika-loader-mini.gif'



const Loader = {
  oninit(vnode) {
    this.vnodeRef = vnode
  },

  view(vnode) {
    return (
      <figure class='Loader'>
        <img src={loader} />
        <figcaption>Chargement</figcaption>
      </figure>
    )
  }
}

export default Loader
