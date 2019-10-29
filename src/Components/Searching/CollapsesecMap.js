import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyle = {
  width: '100%',
  height: '130%'
}

export class CollapsesecMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyle}
        zoomControlOptions={true}
        initialCenter={{
          lat: this.props.map.geometry.location.lat(),
          lng: this.props.map.geometry.location.lng()
        }}
      >
        <Marker
          position={{
            lat: this.props.map.geometry.location.lat(),
            lng: this.props.map.geometry.location.lng()
          }}
        />
      </Map>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
})(CollapsesecMap)
