import React, { Component } from 'react'
import firebase from 'firebase'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export class Modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            username: "zain ur rehman"
        }
    }
    onChangeName = (e) => {
        this.setState({ email: e.target.value })
    }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    onClickSignUp = () => {
        const email = this.state.email;
        const password = this.state.password;
        const displayName = this.state.username;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                if (user.user.uid !== undefined) {
                    firebase.database().ref(`users/${user.user.uid}`).set({ displayName: displayName });
                    NotificationManager.success(`Successfully signed In with ${this.state.email} `, 'Horrahh!!', 9000);
                }
                else {
                    NotificationManager.error("Please check your network", 'Something Wrong', 9000);
                }
            })
            .catch((err) => {
                NotificationManager.error(err.toString(), 'Something Wrong', 9000);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <input type="email" value={this.state.email} onChange={this.onChangeName} className="border-0 w-100" placeholder="Email" />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-12">
                        <input type="password" value={this.state.password} onChange={this.onChangePassword} className="border-0 w-100" placeholder="Password" />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-4">

                    </div>

                    <div className="col-sm-8">
                        <button onClick={this.onClickSignUp} className="btn btn-primary float-right mr-1">
                            <i className="fas fa-user mr-1"></i>
                            User</button>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        )
    }
}

export default Modal
