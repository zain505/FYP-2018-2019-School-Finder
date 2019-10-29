
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GoogleApiWrapper } from 'google-maps-react';

export class Return extends Component { 
    render() {
        return (
              <div>
                  <div className="row">
                      <div className="col-sm-12 mt-5">
                      <button ref={this.props.setRef} className="btn btn-dark float-left" onClick={this.props.fetchPlaces}>
                      <i className="fas fa-compass fa-sm mr-1"></i>
                      Find Near Schools</button>
                      <Link to="/">
                      <button  className="btn btn-dark float-right" >
                      <i className="fas fa-arrow-left fa-sm mr-1"></i> 
                        <span>Return</span>
                      </button>
                      </Link>
                      
                      </div>
                  </div>
              </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
  })(Return)
