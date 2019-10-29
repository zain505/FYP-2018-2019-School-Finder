import React, { Component } from 'react'

export class MpaPhone extends Component {
    render() {
        const phn = this.props.phn;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 mt-1">
                        <span>
                            <i className="fas fa-phone-square float-left "></i>
                            <p className="float-left ml-1" style={{ fontSize: "10px" }}> {phn ? phn : "Not Provided"}</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MpaPhone
