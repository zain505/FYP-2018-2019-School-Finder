import React, { Component } from 'react'

export class MapGRating extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 border-top">
                    <small className="float-left">total reviews: {this.props.userR}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapGRating
