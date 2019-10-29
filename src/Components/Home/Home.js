import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Slider from "./Slider";
import Note from "./Note";
import Whatus from './Whatus';
import Footer from './Footer';
import Blogin from './Blogin';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Home extends Component {
  componentDidMount(){
    this.createNotification()
  }

  createNotification=()=>{
    NotificationManager.info(new Date().toDateString(),'Welcome!',3000);
  }
  
  render() {
    
    return (
      
        <div className="container">
          <Blogin/>
          <Logo />
          <Searchbar getData={this.props.getData} />
          <Slider />
          <Whatus />
          <Footer />
          <NotificationContainer/>
        </div>
        
      

    );
  }
}

export default withRouter(Home)
