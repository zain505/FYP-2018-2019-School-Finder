import React, { Component } from 'react'

export class MapName extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <b className="text-dark" style={{fontSize:"15px"}}>{this.props.name}</b>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapName
