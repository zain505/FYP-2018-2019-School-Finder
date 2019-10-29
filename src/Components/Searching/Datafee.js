import React, { Component,Fragment } from 'react'
import ReactStars from 'react-rating-stars-component'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export class Datafee extends Component {
    constructor(props){
        super(props)
        this.state={
            isClicked:false,
            count:5
        }
    }
    onHeartClick=(e)=>{
        
        this.setState({
            isClicked:!this.state.isClicked
            
        })
        
        if(this.isClicked=!undefined){
            return this.isClicked
            
        }
        
    }
    render() {
        if(this.state.isClicked===true){
             NotificationManager.success('Added succefully to fav','Got It',9000)
        }
        if(this.state.isClicked===false){
            NotificationManager.success('Removed from list','Got It',9000)
            
        }
        return (
            <Fragment>
                <div className="col-sm-6">
                    <span className="float-left pt-2 pr-1"><b>Rating</b></span>
                    
                        <ReactStars
                            count={5}
                            size={25}
                            half={true} value={this.props.rating} edit={false} />
                            
                </div>
                <div className="col-sm-6">
                <i className="fas fa-heart float-right p-3 mr-1" 
                title={this.state.isClicked?"This is in your favourite list":"Clicked to favourite"} 
                onClick={this.onHeartClick} style={{color: this.state.isClicked===true?"red":"black", cursor:"pointer"}}></i>
                </div>
                <NotificationContainer/>
                </Fragment>
            
        )
    }
}

export default Datafee
