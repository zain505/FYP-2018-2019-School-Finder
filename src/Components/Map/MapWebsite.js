import React, { Component } from 'react'

export class MapWebsite extends Component {
    render() {
        const web = this.props.web;

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 mb-1">
                        <span>
                            <i className="fab fa-internet-explorer float-left "></i>
                            <a href={web} className="float-left ml-1 text-dark" style={{ fontSize: "10px" }}>{web ? web : "Not Provided"}</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapWebsite
