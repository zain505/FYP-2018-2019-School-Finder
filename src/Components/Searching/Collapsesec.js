import React, { Component } from 'react'
import CollapseTabs from './CollapseTabs';

export class Collapsesec extends Component {

    render() {
    
        return (
            <div >
                <CollapseTabs map={this.props.map}/>
            </div>
        )
    }
}

export default Collapsesec
