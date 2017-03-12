// @flow

import m from 'mithril'
import v from 'voca'
import uuidV4 from 'uuid/v4'
import _ from 'lodash'

import './../styles/Popin.scss'
import PkmnUtils from '../PkmnUtils'

const Popin = {
  oninit(vnode: Object) {
    this.vnodeRef = vnode
  },

  onremove: function(vnode) {
    document.body.classList.remove('has-popin')
    },

  oncreate() {
    document.body.classList.add('has-popin')
  },

  onbeforeupdate(vnode, old) {
    return false
  },


  view(vnode: Object) {
    let { data } = vnode.attrs
    let { name, id } = data
    let typesLinearized = _.reverse(_.map(data.types, 'type.name'))
    const gameCovers = _.reverse(data.game_indices)

    return (
      <section class='Popin'>
        <article>
          <header>
            <figure>
              <img src={ data.sprites.front_default } width={ 150 } />
              <h1>{ v.capitalize(name) }</h1>
            </figure>
            <a href={'/close/'} oncreate={m.route.link}>Close</a>
          </header>
          <div class='content'>
            <PkmnTableTypes weaknessAndImmunes={PkmnUtils.getWeaknessAndImmunes(typesLinearized.join('/'))} />
            
            <div class='GameAppareances'>
              <h2>Game Appareances</h2>
              <div class='wrapper'>
                {gameCovers.map((data, index) =>
                  <GameAppareances name={data.version.name} key={uuidV4()}/>
                )}
              </div>
            </div>
          </div>

        </article>
      </section>
    )
  }
}

export default Popin


const PkmnTableTypes = { 

  view(vnode: Object) {
    const weaknessAndImmunes = vnode.attrs.weaknessAndImmunes
    return (
      <div class='PkmnTableTypes'>
        <h2>Weakness and Immunes</h2>

        <section class='wrapper'>
          {this._renderTableEffectiveness(weaknessAndImmunes)}
          <p>
          Legend : {'\n'}
            - 2x / 4x : Super effective {'\n'}
            - 1x : Effective {'\n'}
            - .5x / .25x : Not very effective {'\n'}
            - 0x : Not effective {'\n'}
          </p>
        </section>
      </div>
    ) 
  },

  _renderTableEffectiveness (datas) {
    var styles = {}

    var template = [];
    var titles = {
      "4x" : "Strongly weak to",
      "2x" : "Weak to",
      "1x" : "Damaged normally by",
      "0.5x" : "Resistant to",
      "0.25x" : "Strongly resistant to",
      "0x" : "Immune to",
    }

    for (let coefficient in _.groupBy(datas, 'effetiveness')) {
      template.push(
        <div class='PkmnTableTypesContainer' key={uuidV4()}>
          <p style={styles.title}>{titles[coefficient]} : </p>

          <div class='TypesContainer' key={uuidV4()}>
            {_.groupBy(datas, 'effetiveness')[coefficient].map((type, index) => 
              <div key={uuidV4()} style={ {backgroundColor: PkmnUtils.typeColor(type.type)} }>
                <p style={styles.typeName}>
                  {type.type} | {type.effetiveness}
                </p>
              </div>
            )}
          </div>
        </div>
      )
    }
    return template;
  }
}

const GameAppareances = {
  oninit(vnode: Object) {
    this.vnodeRef = vnode
  },

  view(vnode: Object) {
    const data = vnode.attrs
    const { name } = data
    return ( 
      <figure style={{ marginTop: '10px', marginBottom: '5px' }}>
        <img src={ this._getCoverGame(name) } height={ 100 } />
      </figure>
    )
  },

    _getCoverGame (name) {
    switch(name) {
      case 'red':
        return require('../images/games_cover/red.png');
      case 'blue':
        return require('../images/games_cover/blue.png');
      case 'alpha-sapphire':
        return require('../images/games_cover/alpha-sapphire.png');
      case 'black-2':
        return require('../images/games_cover/black-2.png');
      case 'black':
        return require('../images/games_cover/black.png');
      case 'crystal':
        return require('../images/games_cover/crystal.png');
      case 'diamond':
        return require('../images/games_cover/diamond.png');
      case 'emerald':
        return require('../images/games_cover/emerald.png');
      case 'firered':
        return require('../images/games_cover/firered.png');
      case 'gold':
        return require('../images/games_cover/gold.png');
      case 'heartgold':
        return require('../images/games_cover/heartgold.png');
      case 'leafgreen':
        return require('../images/games_cover/leafgreen.png');
      case 'moon':
        return require('../images/games_cover/moon.png');
      case 'omega-ruby':
        return require('../images/games_cover/omega-ruby.png');
      case 'ruby':
        return require('../images/games_cover/ruby.png');
      case 'pearl':
        return require('../images/games_cover/pearl.png');
      case 'platinum':
        return require('../images/games_cover/platinum.png');
      case 'sapphire':
        return require('../images/games_cover/sapphire.png');
      case 'silver':
        return require('../images/games_cover/silver.png');
      case 'soulsilver':
        return require('../images/games_cover/soulsilver.png');
      case 'sun':
        return require('../images/games_cover/sun.png');
      case 'white-2':
        return require('../images/games_cover/white-2.png');
      case 'white':
        return require('../images/games_cover/white.png');
      case 'x':
        return require('../images/games_cover/x.png');
      case 'y':
        return require('../images/games_cover/y.png');
      case 'yellow':
        return require('../images/games_cover/yellow.png');
      default:
        return require('../images/games_cover/yellow.png');
        break;
    }
  }
}

