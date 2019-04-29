import React from 'react';

const GifList = props => (
  <div>
    {props.gifs.map(gif => <img src={gif.images.original.url} alt=""/>)}
  </div>
);

export default GifList