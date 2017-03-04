import m from 'mithril'

import SearchBar from './SearchBar'

import APIManager from '../APIManager'

const PokedexApp = {
  oninit: function(vnode) {
    console.log("Pokedex loaded")
    
    this.pokemon = '{}'
    this.isLoading = false;
  },

  formSubmitted(value) {
    this.isLoading = true;

    // APIManager.getPokemonForId(1).then((pkmnDatas) => {
    //   console.log("pkmnDatas", pkmnDatas)
    //   this.isLoading = false
    // }).catch((error) => {
    //   this.pokemon = "error"
    //   // console.log(error, this.pokemon)
    //   this.isLoading = false
    //   m.redraw() // Set state
    // })

    APIManager.foo().then((pkmnDatas) => {
      console.log("pkmnDatas 2", pkmnDatas)

      this.pokemon = "error"
    })
  },

  view (vnode) {
    console.log('gregerger')
    return (
      <div>
        <SearchBar foo={this.pokemon} submitCallback={(e) => this.formSubmitted()}/>
      </div>
    )
  }
}



export default PokedexApp
