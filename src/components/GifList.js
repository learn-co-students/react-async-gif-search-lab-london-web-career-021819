import React, { Component } from 'react'

export default class GifList extends Component {

render() {
  return(
    <div>
      <ul>
        {this.props.gifs.map(gif =>
          <li>
            <h3>
              {gif.title}
            </h3>
            <img
              key={gif.id}
              src={gif.url}
              alt=''
              width='300px'
            />
          </li>
        )}
      </ul>
    </div>
) }

}
