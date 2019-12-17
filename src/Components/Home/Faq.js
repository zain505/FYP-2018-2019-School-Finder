import React, { Component } from 'react'
import Blogin from "./Blogin"
import { Link } from 'react-router-dom';

export class Faq extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Blogin />
                    <div className="card mt-3">
                        <div className="card-header">
                            <div className="d-flex justify-content-between">
                                <div>
                                <span className="lead font-weight-semibold">FAQ</span>
                                </div>
                                <div>
                                <Link to="/" className="text-dark" >
                                <button className="btn btn-primary btn-sm">Go Home</button>
                                </Link>  
                                </div>
                            </div>
                            
                        </div>
                        <div className="card-body">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                            What is SchoolsDiary
        </a>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                        <div class="card-body">
                                            SchoolsDiary is web application that facilitating the parents and job seekeers who struggle to find a best & budget school for their kids and whom struggling for jobs hunting.
        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                            How can i find a particular school information by its name?
      </a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            If you know the shool name you can search your school by its name. You can see all essential information of a school like Map, photos, <strong>Fee structure</strong> feedback jobs etc
        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                            How can i find schools that located near me
        </a>
                                    </div>
                                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            We are using <i>GeoLocation</i> support so you can see list of schools in <b>5000m (5KM)</b> radius.
        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapsefour">
                                            I am unable to find my current location
        </a>
                                    </div>
                                    <div id="collapsefour" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            This problem occurs usually when you do not allow your GeoLocation services. Go to your browser settings and allow browser to access current location
        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq
