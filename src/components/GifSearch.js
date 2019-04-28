import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    searchTerm: ''
    }

handleOnChange = event => {
this.setState({
  searchTerm: event.target.value})
}

handleSubmit = (event) => {
  event.preventDefault()
  this.props.search(this.state.searchTerm)
}

render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.searchTerm}
          onChange={this.handleOnChange}
        />
      </form>
    </div>
) }


}
