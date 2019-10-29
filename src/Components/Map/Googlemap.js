import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyle = {
    width: '100%',
    height: '100%'
}

export class Googlemap extends Component {
    render() {
        console.log("props",this.props)
        if (this.props.coords != null) {
            return (<div className="map-responsive">
                <div>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyle}
                        zoomControlOptions={true}
                        initialCenter={{
                            lat: this.props.coords.lat,
                            lng: this.props.coords.lng
                        }}
                    >
                        <Marker
                            
                            position={{
                                lat: this.props.coords.lat,
                                lng: this.props.coords.lng
                            }}
                        >

                        </Marker>


                        {this.props.myplaces.map(item => {
                             console.log("item",item)
                            return <Marker
                                key={item.id}
                                position={{
                                    lat: item.geometry.location.lat(),
                                    lng: item.geometry.location.lng()
                                }}
                            >
                            </Marker>
                        })}
                        
                        {/* <Marker
                            name={}
                            position={{lat: 37.759703, lng: -122.428093}}
                            onClick={this.onMarkerClick} 
                        />
                        <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow> */}

                    </Map>
                </div>
            </div>
            );
        }
        return <p>Hold on! Loading...</p>
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
})(Googlemap)
