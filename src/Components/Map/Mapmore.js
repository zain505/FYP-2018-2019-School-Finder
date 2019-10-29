import React, { Component } from 'react'
import MapImage from './MapImage';
import MapRating from './MapRating';
import MapName from './MapName';
import MapGRating from './MapGRating';
import MapInfo from './MapInfo';
import MapWebsite from './MapWebsite';
import MpaPhone from './MpaPhone';
//import Geocode from "react-geocode";

export class Mapmore extends Component {
    render() {
        if (this.props.myplaces != null) {
            var details = this.props.myplaces.map(item => {
                return (
                    <div key={item.id}>
                        <div className="row ">
                            <div style={{ backgroundColor: "#F9FFF4" }} className="col-sm-12 ml-1 mb-2">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <MapImage photos={item.photos} /><br />
                                        <MapRating rating={item.rating} />
                                    </div>
                                    <div className="col-sm-8">
                                        <MapName name={item.name} /><br />
                                        <MapInfo adr={item.formatted_address} />
                                        <MpaPhone phn={item.international_phone_number} />
                                        <MapWebsite web={item.website} />
                                        <MapGRating userR={item.user_ratings_total} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }
        return (
            <div className=" float-left mt-1" style={{ height: "550px", width: "40%", overflow: "scroll", zIndex: "1" }}>
                <div className="row">
                    <div className="bg-light col-sm-12 bg-light ml-1">
                        <p style={{ fontWeight: "lighter", fontSize: "15px", textAlign: "center" }}>Sorted By:<b style={{ fontWeight: "bold" }}>Near Your Location</b></p>
                        <small style={{ fontSize: "7px" }}>{this.address}</small>
                    </div>
                </div>
                <div className="row">
                    <div className="bg-light col-sm-12 ml-1">
                        {details}
                    </div>
                </div>
            </div>
        )
    }
}

export default Mapmore
