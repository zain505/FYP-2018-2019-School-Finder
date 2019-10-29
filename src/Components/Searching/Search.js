import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Filter } from './Filter';
import { Mapbutton } from './Mapbutton';
import { Maindiv } from './Maindiv';
import { Footer } from '../Home/Footer';


export class Search extends Component {
    state = {
        searchTerm: '',
        data: null
    }

   componentDidMount(){
   this.setState({ data: this.props.list})
   } 
   
    render() {  
        return (
            <div>
                <div className="bg-light">
                    <Filter />
                </div>
                <div className="container">
                    <Mapbutton mysearch={this.state.data}/>
                    <Maindiv mysearch={this.state.data} />
                    <Footer />
                    
                </div>
            </div>
        )
    }
}

export default withRouter(Search);

