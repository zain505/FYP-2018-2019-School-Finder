import React, { Component } from 'react'

export class CollapsesecJobs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            School_fee: null
        }
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-column">
                    <h3>Fees For Year 2019</h3>
                    <div className="d-flex justify-content-start">
                    <input placeholder="search job" className="form-control"/>
                    <button className="btn btn-primary">Search</button>
                    </div>
                    
                    <span>hello</span>
                </div>
            </div>
        )
    }
}

export default CollapsesecJobs
