import React, { Component } from 'react';

export class Note extends Component {
    render() {
        return (
            <div>
                <div className="row mt-2">
                    <div className="col-sm-12">
                        <div className="d-flex justify-content-center">
                            <i className="fas fa-info-circle text-info fa-2x"></i>
                            <span className="text-secondary pt-1 pl-2">For better results
                            <b> search</b> with <kbd>schools near place_name</kbd> or with <kbd>school name</kbd>.
                         </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Note
