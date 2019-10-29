import React, { Component } from 'react'
import {Link} from "react-router-dom"
import school from './school.png'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-light navbar-dark" >
                    <a className="navbar-brand" href="#">
                        <img src={school} alt="logo-school" style={{width:"130px",height:"40px",marginLeft:"150px"}} />
                    </a>
                    <ul className="navbar-nav" style={{marginLeft:"500px"}}>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:"black"}} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style={{color:"black"}} to="/Map">School Map</Link>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                                    <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </li>   
                    </ul>
                </nav>
            </div >
                )
            }
        }
        
        export default Navbar
