import React, { Component } from 'react'
import image  from "./image3.png";

export class Dataimage extends Component {
    render() {
       const photos=this.props.img1;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <img 
                        src={photos ? photos[0].getUrl() : image} 
                        className="rounded mt-1" 
                        style={{ width: "250px", height: "200px" }} 
                        alt="school_place" />
                    </div>
                </div>
            </div>
        )
    
        
    }
}


export default Dataimage
