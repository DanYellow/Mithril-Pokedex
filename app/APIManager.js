/* @flow */

import m from 'mithril'

export default class APIManager {

  /**
   * Retrives all Pokemon
   * @return {Promise<Object[]>} [description]
   */
  static getPokemon(): Promise<Object[]> {
    let promises = []
    for (let id = 1; id < 2; id++) {
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
      return values
    });
  }

  /**
   * Retrieves Pokemon for a specific id
   * @param  {Number} id Id of Pokemon
   * @return {Promise}    Result
   */
  static getPokemonForId(id: number): Promise<Object|string> {
    if (isNaN(id) || id == 0) { return Promise.reject('Not an id') }

    return m.request({
      url: `${APIManager.baseURL}/pokemon/25/`
    }).then(function(response) {
      return response
    })
  }

  /**
   * Retrieves base url
   * @return {String} Base url
   */
  static get baseURL(): string {
    return 'http://pokeapi.co/api/v2';
  }
  // static const baseURL: string = 'http://pokeapi.co/api/v2'
}


