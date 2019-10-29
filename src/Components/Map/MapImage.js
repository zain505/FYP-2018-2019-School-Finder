import React, { Component } from 'react'
import image from './image3.png'

export class MapImage extends Component {
  render() {
    const photos=this.props.photos
    return (
      <div>
        <img style={{height:"100px",width:"100px"}} 
        src={photos ? photos[0].getUrl() : image}
        alt="school_image"/>
      </div>
    )
  }
}

export default MapImage
