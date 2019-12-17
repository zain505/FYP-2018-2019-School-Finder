import React, { Component } from 'react'
import { job_structure } from '../../../src/Jobs'

export class CollapsesecJobs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            School_job: null
        }
    }
    render() {
        const Jobs = job_structure[Math.floor(Math.random() * 5)]
        console.log(Math.floor(Math.random() * 5)) 
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
                                {Jobs.jobPosition}
                            </span>
                            <span className="font-weight-bold py-2">
                                Qualification
                            </span>
                            <span className="lead">
                                {Jobs.jobPosition}
                            </span>
                            <span className="font-weight-bold py-2">
                                Department
                            </span>
                            <span className="lead">
                                {Jobs.jobPosition}
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
}

export default CollapsesecJobs
