import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';





export class NavbarLogin extends Component {
    onLogOut=()=>{
        firebase.auth().signOut();
        NotificationManager.warning("Successfully Logout",'Logout',9000);
        NotificationManager.info("See you soon",'Bye!!',10000);

    }
    render() {
        console.log("navbar login", this.props.user.email)
        const email=this.props.user.email.slice(0,2).toUpperCase();

        return (
            <div>

                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-1">
                        <span className="float-right">
                            <div className="dropdown">
                                <div className="rounded-circle bg-dark ml-2" data-toggle="dropdown" style={{ cursor: "pointer", height: '40px', width: "40px" }}><h5 style={{color:"white",paddingLeft:"7px",paddingTop:"7px"}}>{email}</h5></div>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/UserProfile">Dashboard</Link>
                                    <Link className="dropdown-item" to="/" onClick={this.onLogOut}>Log Out</Link>
                                </div>
                            </div>


                        </span>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>

        )
    }
}

export default NavbarLogin;
