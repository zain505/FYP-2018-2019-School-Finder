import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Searching/Search';
import Map from './Components/Map/Map'
import UserAccount from './Components/Accounts/UserAccount';
import Userlogin from './Components/Accounts/Userlogin'
import UserProfile from './Components/Accounts/UserProfile'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as firebase from 'firebase';
import Faq from './Components/Home/Faq';
import MobileApp from './Components/Home/MobileApp';

const config={
    apiKey: "AIzaSyDEbHtP0-XDfu-S6WLT0uDYzKZrkqJpUf0",
    authDomain: "developme-301dd.firebaseapp.com",
    databaseURL: "https://developme-301dd.firebaseio.com",
    projectId: "developme-301dd",
    storageBucket: "developme-301dd.appspot.com",
    messagingSenderId: "617162703555",
    appId: "1:617162703555:web:05ed88531337bfeb"
}
firebase.initializeApp(config);

class Routes extends React.Component {
    state ={ list: null,myLocation:null}
    getdata=(list)=>{
        this.setState({list})
    }
    render() {

        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/Search" render={ () => <Search list={this.state.list}/>}></Route>
                        <Route path="/Map" render={ () => <Map />}></Route>
                        <Route path="/Faq" render={ () => <Faq />}></Route>
                        <Route path="/MobileApp" render={ () => <MobileApp />}></Route>
                        <Route path="/UserAccount" render={() => <UserAccount />}></Route>
                        <Route path="/Userlogin" render={() => <Userlogin />}></Route>
                        <Route path="/UserProfile" render={() => <UserProfile />}></Route>
                        <Route path="/" render={() => <App getData={this.getdata}/>}></Route>
                        
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(
    
   <Routes/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
