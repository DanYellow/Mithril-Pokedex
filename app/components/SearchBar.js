import m from 'mithril'
import FormData from 'form-data'

import wordings from '../wordings'
import Utils from '../utils'

const SearchBar = {
  oninit: function(vnode) {
    this.vnodeRef = vnode
    this.userSubmission = null
  },

  onSubmit: function(e) {
    e.preventDefault()

    this.userSubmission = Utils.getFormData(e.target).search
    this.vnodeRef.attrs.submitCallback(this.userSubmission)
  },

  view (vnode) {
    return (
      <form id="search_form" onsubmit={(e) => this.onSubmit(e)}>
        <input type="search" name="search" value={this.userSubmission} placeholder={wordings.search_bar.input_placeholder} />
        <p>{vnode.attrs.foo}</p>
      </form>
    )
  }
}



export default SearchBar
