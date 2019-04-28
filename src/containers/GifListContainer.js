import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

search = searchQuery => {
  fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=H6C7bUPBSdQEA2VB3uteUmWqLWtkmmyd`)
  .then(resp => resp.json())
  .then(({data}) => this.setState(
    {gifs: data.map(gif => ({
      url: gif.images.original.url,
      title: gif.title,
      id: gif.id}) )} ))
}

componentDidUpdate() {
  this.search()
}

render() {
  return (
    <div>
      <GifSearch search={this.search} />
      <GifList gifs={this.state.gifs} />
    </div>
) }

}
