import React, { Component } from "react";
class GifSearch extends Component {
  render() {
    return (
      <div>
        <form onSubmit={event => this.props.submit(event)} className="form-control">
          <input
            onChange={this.props.handleChange}
            type="text"
            value={this.props.value}
          />
          <button className="btn btn-success">SEARCH GIFS</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
