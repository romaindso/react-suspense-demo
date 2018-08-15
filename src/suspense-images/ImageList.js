import React, { Component } from 'react';

export default class ImageList extends Component {
  render() {
    console.log(this.props.images);

    return (
      <div>
        {this.props.images.map(img => {
          return <img style={{ height: 200 }} key={img.id} src={img.images.original.url} />
        })}
      </div>)
  }
}