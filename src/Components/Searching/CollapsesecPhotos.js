import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from "./image3.png";



export class CollapsesecPhotos extends Component {
    render() {
        const photos = this.props.map.photos;
        if (photos === undefined) {
            return <img style={{
                height: '820px'
            }} src={image} alt="Images" />
        }
        else {
            return (
                <div>
                    <Carousel
                        showThumbs={false}
                        dynamicHeight={true}

                    >
                        {photos.map(item => {
                            return <img style={{
                                height: '500px'
                            }} key={item.getUrl()} src={item.getUrl()} alt="Images" />
                        })}

                    </Carousel>

                </div>
            )
        }
    }
}

export default CollapsesecPhotos
