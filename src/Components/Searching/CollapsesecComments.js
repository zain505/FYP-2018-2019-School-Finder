import React, { Component } from 'react'
import ReactStars from 'react-rating-stars-component'

export class CollapsesecComments extends Component {
    render() {
        const reviews = this.props.map.reviews
        if (reviews === undefined) {
            return <p>No Data Found</p>
        }
        else {
            return (
                <div>
                    <div className="container mt-3">
                        <h4 className="text-secondary">Showing {reviews.length} Comments</h4>
                        {reviews.map(item => {
                           return <div key={item.text} className="media border border-top-0 border-right-0 border-left-0  mb-2  ">
                                <img src={item.profile_photo_url} alt="John Doe" className="mr-3 rounded-circle" style={{ width: "50px", height: "50px" }} />
                                <div className="media-body">
                                    <span>{item.author_name} </span><br/>
                                    <span className={item.text===""?'text-danger':'text-secondary'}>{item.text===""?"Not Available":item.text}</span><br/>
                                    <small className="text-secondary"><i>Posted {item.relative_time_description}</i></small>
                                    <span className="float-left ml-1"><ReactStars
                                        count={5}
                                        size={18}
                                        half={true} value={item.rating} edit={false} /></span>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            )
        }

    }
}

export default CollapsesecComments
