import React, { Component } from "react";
import GifList from "../components/GifList";

import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    searchTerm: "",
    gifs: []
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getGifs();
  }

  render() {
    return (
      <div>
        <GifSearch
          value={this.state.searchTerm}
          handleChange={this.handleChange}
          submit={this.handleSubmit}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
  // In our app the <GifListContainer /> will be responsible for fetching the data from the giphy api, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the <GifList> component, as a prop.
  componentDidMount() {
    this.getGifs();
  }

  getGifs() {
    fetch(
      "http://api.giphy.com/v1/gifs/search?q=" +
        this.state.searchTerm +
        "&api_key=zXOP2s5aC7NMVoiISgBpf7i3VzGn8hqz&limit=3"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ gifs: json.data });
      });
  }
}

// It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.
