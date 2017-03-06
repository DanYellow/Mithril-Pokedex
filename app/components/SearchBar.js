import m from 'mithril'
import FormData from 'form-data'

import wordings from '../wordings'
import Utils from '../utils'

import './../styles/SearchBar.scss'

const SearchBar = {
  oninit(vnode: Object) {
    this.vnodeRef = vnode
    this.userSubmission = null
  },

  onSubmit(e: Object) {
    e.preventDefault()

    this.userSubmission = Utils.getFormData(e.target).search
    this.vnodeRef.attrs.submitCallback(this.userSubmission)
  },

  view (vnode: Object) {
    return (
      <form onsubmit={ (e) => this.onSubmit(e) } class='SearchBar'>
        <input type='search' name='search'
               value={ this.userSubmission }
               placeholder={ wordings.search_bar.input_placeholder }
               />
      </form>
    )
  }
}



export default SearchBar
