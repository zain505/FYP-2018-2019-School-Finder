import React, { Component } from 'react'
import ReactStars from 'react-rating-stars-component'

export class MapRating extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div>
              <ReactStars
                count={5}
                size={20}
                half={true}
                value={this.props.rating}
                edit={false} />
              <b>{this.props.rating >= 4.5 ? "Excellent":"Good/Fair"}</b>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MapRating
