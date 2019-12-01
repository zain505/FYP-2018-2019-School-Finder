import React, { Component } from 'react'
import school from './school.png'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase';
import Blogin from '../Home/Blogin';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export class Userlogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }
    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onLoginUser = () => {
        const email = this.state.email;
        const password = this.state.password;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                //console.log('successfully sign In',u)
                NotificationManager.success(`Successfully login with ${this.state.email} `, 'Horrahh!!', 9000);
            })
            .catch((err) => {
                //console.log(err.toString())
                NotificationManager.error(err.toString(), 'Something went wrong', 9000);
            })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <Blogin />
                    <div style={{ marginTop: "130px" }} className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="row">
                                <div className="col-sm-12">
                                    <img src={school} alt="logo" style={{ height: "80px", width: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <p style={{ color: "lightGrey", fontSize: "25px", marginLeft: "60px", fontWeight: "bolder" }}>Member Login</p>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <label><b>Email:</b></label><br />
                            <input type="text" value={this.state.email} onChange={this.onChangeEmail} style={{ width: "100%", height: "35px" }} placeholder="Email" />
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <label><b>Password:</b></label><br />
                            <input type="password" value={this.state.password} onChange={this.onChangePassword} style={{ width: "100%", height: "35px" }} placeholder="Password" />
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="row">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <Link to="/">
                                        <button className="btn btn-dark" onClick={this.onLoginUser} style={{ width: "100%" }}>Login Me</button>
                                    </Link>

                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="row">
                                <div className="col-sm-6">

                                    <Link to="/" className="float-left"> <i className="fas fa-home"></i><span className="ml-1">Go Home</span>
                                    </Link>
                                </div>
                                <div className="col-sm-6">
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Userlogin