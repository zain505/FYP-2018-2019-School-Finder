import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoogleApiWrapper } from 'google-maps-react';
import { Dataimage } from './Dataimage';
import { Dataname } from './Dataname';
import { Dataadress } from './Dataadress';
import { Dataphone } from './Dataphone';
import { Datawebsite } from './Datawebsite';
import { Datafee } from './Datafee';
import { Collapsesec } from './Collapsesec';
import robot from '../Searching/broken-robot.png'
import "../../App.css"

export class Maindiv extends Component {
    render() {
        if (this.props.mysearch !== null) {
            return this.props.mysearch.map(item => {
                return (
                    <div key={item.id}>
                        <div className="row mt-1 mb-1" style={{ backgroundColor: "#ebeced",boxShadow:"grey" }}>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-3 border-right">
                                        <Dataimage
                                            img1={item.photos}
                                        />

                                    </div>

                                    <div className="col-sm-6 border-right">
                                        <Dataname
                                            name={item.name}
                                        />
                                        <hr className="bg-dark" />
                                        <div className="row">
                                            <Dataadress
                                                adr={item.formatted_address}
                                            />
                                        </div>
                                        <div className="row">

                                            <Dataphone
                                                phn={item.international_phone_number}
                                            />
                                        </div>
                                        <div className="row">
                                            <Datawebsite
                                                web={item.website}
                                            />
                                        </div><hr />
                                        <div className="row">
                                            <Datafee
                                                rating={item.rating}
                                            />
                                        </div>

                                    </div>
                                    <div className="col-sm-3">
                                        <div className="row mt-5">
                                            <div className="col-sm-4"></div>
                                            <div className="col-sm-4">
                                                {/* <p><b>Admission:</b><i>{this.state.obj1.admission}</i></p> */}
                                            </div>
                                            <div className="col-sm-4"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-8">
                                                <button className="btn btn-primary" data-toggle="collapse" data-target="#demo" style={{ width: "100%" }}>
                                                    More info
                                                     <i className="fas fa-angle-right ml-1"></i>
                                                </button>

                                            </div>
                                            <div className="col-sm-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="demo" className="collapse">
                            <Collapsesec map={item} />
                        </div>
                    </div>
                )
            });
        }
        return (<div>
            <div className="d-flex justify-content-center">
                <img src={robot} alt="something wrong" style={{ height: "100px", width: "100px" }} />
                <div className="d-flex align-items-center">
                    <h4 className="text-secondary p-2 pt-1">Check Your Internet Connection Or Check Your Query!</h4>
                </div>
            </div>
        </div>)
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
})(Maindiv)
// export default