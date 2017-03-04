import 'whatwg-fetch'
import m from 'mithril'

export default class APIManager {
  /**
   * Retrives all Pokemon
   * @return {PromisePromise<object[]>} [description]
   */
  static getPokemon(): Promise<object[]> {
    let promises = []
    for (let id = 1; id < 9; id++) {
      promises.push(
        m.request({
          url: `${APIManager.baseURL}/pokemon/${id}/`
        }).then(function(response) {
          return response.json()
        })
      )
    }

    return Promise.all(promises).then(values => { 
      return values;
    });
  }

  /**
   * Retrieves Pokemon for a speficif id
   * @param  {Number} id Id of Pokemon
   * @return {Promise}    Result
   */
  static getPokemonForId(id: number): Promise {
    if (isNaN(id) || id == 0) { return Promise.reject("Not an id") }

    return m.request({
      url: `${APIManager.baseURL}/pokemon/25/`
    }).then(function(response) {
      return response.json()
    })
  }
}


APIManager.baseURL = 'http://pokeapi.co/api/v2'