import React, { Component } from 'react'
import { fees_structure } from '../../../src/Jobs'

export class CollapsesecJobs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            School_fee: null
        }
    }
    render() {
        const Jobs = fees_structure[Math.floor(Math.random() * 10) + 1]
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <span className="display-4">We Are Hiring!</span>
                </div>
                <div className="text-center">
                    <div className="d-flex flex-column">
                    <span className="font-weight-bold py-2">
                        Position
                    </span>
                    <span className="lead">
                    {Jobs.jobPosition}
                    </span>
                    <span className="font-weight-bold py-2">
                        Number of Vacancies
                    </span>
                    <span className="lead">
                        {Jobs.noOfVacancy}
                    </span>
                    <span className="font-weight-bold py-2">
                        Qualification
                    </span>
                    <span className="lead">
                        {Jobs.RequiredQualification}
                    </span>
                    <span className="font-weight-bold py-2">
                        Department
                    </span>
                    <span className="lead">
                        {Jobs.Department}
                    </span>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CollapsesecJobs
