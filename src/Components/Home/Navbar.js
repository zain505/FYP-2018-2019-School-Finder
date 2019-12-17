import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Modal } from './Modal';

export class Navbar extends Component {


    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-sm-12 mt-1 pr-5">
                        <div className="d-flex justify-content-end p-2">
                            <Link to="/MobileApp" className="text-dark" >
                                <i className="fab fa-android mr-1 text-dark"></i>
                                Download Mobile App</Link>
                            <Link to="/Faq" className="text-dark" >
                                <i className="fab fa-readme pl-3 mr-1 text-dark"></i>
                                User GuidLine</Link>
                            <Link to="/" className="text-dark" >
                                <i className="fas fa-language pl-3 mr-1 text-dark"></i>
                                En</Link>
                            <Link to="/Userlogin" className="text-dark">
                                <i className="fas fa-sign-in-alt pl-3 mr-1 text-dark"></i>
                                Login</Link>
                            <Link data-toggle="modal" className="text-dark" data-target="#exampleModal" to="/UserAccount">
                                <i className="fas fa-user-plus text-dark pl-3 mr-1"></i>
                                Register</Link>
                            <div className="modal" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Registration</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <Modal />
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

export default Navbar;
