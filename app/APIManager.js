// @flow

import m from 'mithril'

export default class APIManager {
   /**
    * Retrives all Pokemon
    * @param  {Number} max pokemon
    * @return {Promise<Object[]>} [description]
    */
  static getAllPokemon(max = 5) {
    if (max > 721) { max =  721; }
    console.time('pokemon fetched')
    let promises = []
    for (let id = 1; id <= max; id++) {
      promises.push(
        m.request({
          url: `${APIManager.baseURL}/pokemon/${id}/`,
          background: true
        }).then(function(response) {
          return response
        })
      )
    }

    return Promise.all(promises).then(values => {
      console.timeEnd('pokemon fetched')
      return values
    });
  }

  /**
   * Retrieves Pokemon for a specific id
   * @param  {Number} id Id of Pokemon
   * @return {Promise}    Result
   */
  static getPokemonForId(id) {
    if (isNaN(id) || id == 0) { return Promise.reject('Not an id') }

    return m.request({
      url: `${APIManager.baseURL}/pokemon/${id}/`,
      background: false
    }).then(function(response) {
      return response 
    })
  }

  /**
   * Retrieves base url
   * @return {String} Base url
   */
  static get baseURL() {
    return 'http://pokeapi.co/api/v2';
  }
  // static const baseURL: string = 'http://pokeapi.co/api/v2'
}


