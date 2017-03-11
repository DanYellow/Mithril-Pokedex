// https://en.wikipedia.org/wiki/Analysis_paralysis
import m from 'mithril'
import FormData from 'form-data'
import v from 'voca'
import _ from 'lodash'
import classNames from 'classnames'

import wordings from '../wordings'
import Utils from '../utils'
import PkmnUtils from '../PkmnUtils'

import './../styles/PokedexItem.scss'

const PokedexItem = {
  oninit(vnode) {
    this.vnodeRef = vnode 
  },

  view(vnode) {
    let { data } = vnode.attrs
    let { name } = data

    let typesLinearized = _.reverse(_.map(data.types, 'type.name'))
    const borderColors = this.getBorderStyleForTypes(typesLinearized)

    return (
      <article class={ `PokedexItem ${classNames(typesLinearized)}` }
               style={ Object.assign({}, ...borderColors) }>
        <a href="#">
          <figure>
            <img src={data.sprites.front_default} width={ 100 } />
            <figcaption>{v.capitalize(name)}</figcaption>
          </figure>
        </a>
      </article>
    )
  },

  getBorderStyleForTypes(types) {
    const indexes = [0, 1]
    let borderColors = []

    indexes.forEach((index) => {
      let leftOrRight = (index === 0) ? 'left' : 'right'
      let topOrBottom = (index === 0) ? 'top' : 'bottom'
      let type = types[index] || types[0]

      borderColors.push({
        [v.camelCase(`border-${leftOrRight}-color`)]: PkmnUtils.typeColor(type),
        [v.camelCase(`border-${topOrBottom}-color`)]: PkmnUtils.typeColor(type),
      })
    })

    return borderColors
  }
}

export default PokedexItem
