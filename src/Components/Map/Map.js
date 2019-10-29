
import React, { Component } from 'react'
import { Return } from './Return';
import Googlemap from './Googlemap'
import { GoogleApiWrapper } from 'google-maps-react';
import { Mapmore } from './Mapmore';




export class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cuurentLocation: null, myplaces: []
        }
    }
    setRef = (ref) => {
        this.inputRef = ref
    }

    componentDidMount() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords;
                this.setState({
                    cuurentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }   
                });
                //console.log("this is from map",coords)
            }

            )
        }
    }

    fetchPlaces = () => {
        const google = window.google;
        // console.log(this.ref)
        // const buttonSearch=this.ref && this.ref.current.buttonsearch
        const button = this.inputRef
        const pyrmont = new window.google.maps.LatLng(this.state.cuurentLocation.lat, this.state.cuurentLocation.lng);
        const request = {
            location: pyrmont,
            radius: 5000,
            type: ['school']
        };
        const service = new window.google.maps.places.PlacesService(button);
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    const request = {
                        placeId: results[i].place_id
                    };
                    //console.log(this.placeId)
                    const places = new window.google.maps.places.PlacesService(button);
                    places.getDetails(request, (results, status) => {
                        button.innerHTML = 'Find Near Schools'
                        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                            this.setState({ myplaces: [...this.state.myplaces, results] })
                            //console.log("this is from map component", this.state.myplaces)
                        }
                    });
                    //this.setState({myplaces : [...this.state.myplaces, results] });
                }

                //
            }

        });
    }



    render() {
        return (
            <div>
                <div>

                    <Googlemap coords={this.state.cuurentLocation} myplaces={this.state.myplaces}/>

                    <div className="container" google={this.props.google}>
                        <Return fetchPlaces={this.fetchPlaces} setRef={this.setRef} showinfo={this.state.showingInfoWindow} />

                    </div>

                    <Mapmore coords={this.state.cuurentLocation} myplaces={this.state.myplaces} />

                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
})(Map)
