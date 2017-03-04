let o = require("mithril/ospec/ospec")

import APIManager from './app/APIManager'

o.spec("math", function() {
    o("addition works", function() {
        o(1 + 2).equals(3)
    })
})

o.spec('pokemon', () => {
  o(APIManager.getPokemon()).equal
})