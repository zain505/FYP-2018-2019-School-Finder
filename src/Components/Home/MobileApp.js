import React, { Component } from 'react'
import coming from "./coming.jpg"
import { Link } from 'react-router-dom';
export class MobileApp extends Component {
    render() {
        return (
            <div>
                <div >
                <Link to="/">
                    <button className="btn btn-primary" style={{position:"absolute"}}>Go Home</button>
                    </Link>
                    <img src={coming} style={{width:"100%", height:"100%"}} />
                    
                    
                </div>
            </div>
        )
    }
}

export default MobileApp
