import React, { Component } from 'react'
import firebase from 'firebase';
import NavbarLogin from './NavbarLogin';
import Navbar from './Navbar';


class Blogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authListener()
    }
    authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            }
            else {
                this.setState({ user: null })
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.user!=null?(<NavbarLogin user={this.state.user} />):(<Navbar/>)}
            </div>
        )
    }
}

export default Blogin;