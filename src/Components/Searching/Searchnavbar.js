import React, { Component } from 'react'
import school from './school.png'
import Blogin from '../Home/Blogin';


export class Searchnavbar extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 mt-1">
                        <div className="d-flex justify-content-between">
                            <span>
                                <img src={school} style={{ width: "100px", height: "30px" }} alt="Cinque Terre" />
                            </span>
                            <Blogin />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Searchnavbar
