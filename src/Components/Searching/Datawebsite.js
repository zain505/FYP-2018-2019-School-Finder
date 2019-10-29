import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Datawebsite extends Component {
    render() {
        const website=this.props.web;
        
        if(website===undefined){
            console.log("datawebsite undefined")
            return (
                <div>
                <div className="col-sm-12">
                    <i className="fab fa-internet-explorer float-left "></i>
                    <p className="float-left ml-1 text-dark" style={{ fontSize: "10px" }}> {website}</p>
                </div>
            </div>
                
            )
            
        }
        else{
            return(
                <div>
                    <div className="col-sm-12">
                        <i className="fab fa-internet-explorer float-left "></i>
                        <a target="blank" href={this.props.web} className="float-left ml-1 text-dark" style={{ fontSize: "10px" }}> {website}</a>
                    </div>
                </div>
            )
            
        }
       
    }
}

Datawebsite.defaultProps={
    web:"Not Provided"
}

Datawebsite.propTypes={
    web:propTypes.string.isRequired
}

export default Datawebsite
