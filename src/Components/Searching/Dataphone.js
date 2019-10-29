import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Dataphone extends Component {
    render() {
        const phone =this.props.phn;
        if(phone===undefined){
            return (
                <div>
                    <div className="col-sm-12">
                        <i className="fas fa-phone-square float-left "></i>
                        <p className="float-left ml-1" style={{ fontSize: "10px" }}> {phone}</p>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="col-sm-12">
                    <i className="fas fa-phone-square float-left "></i>
                    <p className="float-left ml-1" style={{ fontSize: "10px" }}> {phone}</p>
                </div>
            </div>
        )
    }
}

Dataphone.defaultProps={
    phn:"Not Provided"
}

Dataphone.propTypes={
    phn:propTypes.string
}

export default Dataphone
