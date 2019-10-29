import React, { Component } from 'react'
import school from './school.png'
import Blogin from '../Home/Blogin';


export class Searchnavbar extends Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-1">
                        <span>
                            <img src={school} className="float-left" style={{width:"100px",height:"30px"}} alt="Cinque Terre" />
                        </span>
                        <Blogin/>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        )
    }
}

export default Searchnavbar
