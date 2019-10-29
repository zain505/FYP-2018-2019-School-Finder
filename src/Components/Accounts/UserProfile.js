import React, { Component } from 'react'
import school from './school.png'
import avatar from './avatar.png'
import Blogin from '../Home/Blogin'
import * as firebase from 'firebase'

export class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current_status: "Tell us are you student or graduate!",
            dob: "date of birth",
            age: "19 YO",
            gender: "Gender",
            display_picture: avatar,
            city: "City",
            province: "Province"
        }
    }
    render() {
        return (
            <div>

                <div className="container">
                    <Blogin />
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-wrap">
                            <i className="fas fa-camera fa-2x position-absolute"></i>
                            <img src={avatar} className="border" style={{ width: "200px", height: "200px" }} alt="logo-avatar" />
                        
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column p-3">
                                <h3 className="text-secondary ">Muahmmad Zain Ur Rehman</h3>
                                <span className="text-info">Student</span>
                                <div className="d-flex justify-content-start pt-2">
                                    <button className="btn btn-default border">
                                    <i class="fas fa-comment-alt pr-1"></i>
                                        Send Messages</button>
                                    <button className="btn btn-primary border ml-2">Contacts</button>
                                    <button className="btn btn-link">Report User</button>
                                </div>
                                <span className="text-secondary pt-3">House #123, Johar Towm,Lahore,Pakistan</span>
                            </div>
                            </div>    
                        </div>
                        <a href="javascrip:void(0)" className="p-3" >Edit</a>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="d-flex w-75 border">
                            <div className="d-flex justify-content-end">
                            <i class="fas fa-redo-alt"></i>
                            </div>
                        </div>
                        <div className="bg-primary w-25 border">l</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserProfile
