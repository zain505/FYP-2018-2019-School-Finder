import React, { Component } from 'react'
export class MapInfo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <span className="float-left">
                            <i className="fas fa-map-marker-alt float-left fa-sm "></i>
                            <span className="float-left ml-1" style={{ fontSize: "9px" }}> {this.props.adr}</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapInfo
