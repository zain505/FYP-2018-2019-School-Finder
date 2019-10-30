import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import avatar from "./avatar.png"
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';





export class NavbarLogin extends Component {
    onLogOut = () => {
        firebase.auth().signOut();
        NotificationManager.warning("Successfully Logout", 'Logout', 9000);
        NotificationManager.info("See you soon", 'Bye!!', 10000);

    }
    render() {
        console.log("navbar login", this.props.user.email)
        const email = this.props.user.email.slice(0, 2).toUpperCase();

        return (
            <div>

                <div className="row">
                    <div className="col-sm-12 mt-1">
                        <span className="d-flex justify-content-end pr-5">
                            <div className="d-flex flex-wrap pt-1">
                                <Link to="/" className="text-dark" >
                                    <i className="fab fa-android mr-1 text-dark"></i>
                                    Download Mobile App</Link>
                                <Link to="/" className="text-dark" >
                                    <i className="fab fa-readme pl-3 mr-1 text-dark"></i>
                                    User GuidLine</Link>
                                <Link to="/" className="text-dark" >
                                    <i className="fas fa-language pl-3 mr-1 text-dark"></i>
                                    En</Link>
                            </div>
                            <div className="dropdown">
                                <div className="rounded-circle bg-dark ml-2" data-toggle="dropdown" style={{ cursor: "pointer", height: '40px', width: "40px" }}><h5 style={{ color: "white", paddingLeft: "7px", paddingTop: "7px" }}>{email}</h5></div>
                                <div className="dropdown-menu" style={{ width: "210px" }}>
                                    <div className="d-flex justify-content-between p-1">
                                        <div className="d-flex flex-column">
                                            <span className="text-secondary">Dummy Name</span>
                                            <small className="text-secondary">zain.rehman155@gmail.com</small>
                                        </div>
                                        <img src={avatar} style={{ width: "30px", height: "30px", borderRadius: "10px" }} alt="avatar-pic" />
                                    </div>
                                    <div className="d-flex justify-content-between mt-3 bg-light">
                                        <Link to="/UserProfile">
                                            <button className="btn btn-primary">Dashboard</button>
                                        </Link>
                                        <Link to="/" onClick={this.onLogOut}>
                                            <button className="btn btn-default border">signOut</button>
                                        </Link>
                                    </div>
                                    {/* <Link className="dropdown-item" to="/UserProfile">Dashboard</Link>
                                    <Link className="dropdown-item" to="/" onClick={this.onLogOut}>Log Out</Link> */}
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>

        )
    }
}

export default NavbarLogin;
