import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import pic from './school.png'
import firebase from 'firebase'

const options = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Others', label: 'Others' },
];

const options2 = [
  { value: '15', label: '15 yo' },
  { value: '16', label: '16 yo' },
  { value: '17', label: '17 yo' },
  { value: '18', label: '18 yo' },
  { value: '19', label: '19 yo' },
  { value: '20', label: '20 yo' },
  { value: '21', label: '21 yo' },
  { value: '22', label: '22 yo' },
  { value: '23', label: '23 yo' },
  { value: '24', label: '24 yo' },
  { value: '25', label: '25+' },
];

const options3 = [
  { value: 'Lahore', label: 'Lahore' },
  { value: 'Islamabad', label: 'Islamabad' },
  { value: 'Karachi', label: 'Karachi' },
  { value: 'Bhawalpur', label: 'Bhawalpur' },
  { value: 'Multan', label: 'Multan' },
  { value: 'Sahiwal', label: 'Sahiwal' },
  { value: 'Haiderabad', label: 'Haiderabad' },
  { value: 'Sakhar', label: 'Sakhar' },
  { value: 'Sadiqabad', label: 'Sadiqabad' }
];
export class UserAccount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      date: "",
      email: "",
      gender: "",
      age: "",
      phone: "",
      add: "",
      city:"",
      school:"",
      principl:"",
      comment:""

    }
  }
  onChangeDate = (date) => { 
    this.setState({ date }) 
   }
  

  onChangeName = (e) => {
    this.setState({ name: e.target.value })

  }
  onChangePhone = (e) => {
    this.setState({ phone: e.target.value })

  }
  onChangeAddress = (e) => {
    this.setState({ add: e.target.value })

  }

  onChangePriciple = (e) => {
    this.setState({ principl: e.target.value })

  }

  onChangeComment = (e) => {
    this.setState({ comment: e.target.value })

  }

  onChangeSchool = (e) => {
    this.setState({ school: e.target.value })

  }
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangeGender = (gender) => {
    this.setState({ gender })
    console.log(this.state.gender)
  }

  onChangeCity = (city) => {
    this.setState({ city })
  }

  onChangeAge = (age) => {
    this.setState({ age })
  }
  // setValues = (values) => {
  //   console.log("hello date", values);
  // }

  onChangeSubmit=()=>{
    firebase.database().ref('User-signup').push({
      name: this.state.name,
      date: this.state.date,
      email: this.state.email,
      gender: this.state.gender,
      age: this.state.age,
      phone: this.state.phone,
      add: this.state.add,
      city:this.state.city,
      school:this.state.school,
      principl:this.state.principl,
      comment:this.state.comment
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-5">
            <span><i style={{ color: "grey" }} className="fas fa-users fa-2x float-left"></i></span>
            <h4 className="float-left ml-1" style={{ color: "grey" }}>User SignUp</h4>
          </div>
          <div className="col-sm-2">
            <img src={pic} alt="loading-logo" style={{ height: "30px", width: "110px" }} />
          </div>
          <div className="col-sm-5">

            <Link to="/Userlogin" style={{ color: "grey", float: "right" }} >
              <span>I have already an account</span>
            </Link>
            <span className="ml-1 mr-1 float-right">|</span>
            <Link to="App" style={{ color: "grey", float: "right" }} >
              <i className="fas fa-home"></i><span className="ml-1">Home</span>
            </Link>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Name</b><br />
                    <input className="border border-top-0" style={{ width: "100%" }} type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeName} />
                  </div>
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Email</b><br />
                    <input className=" border border-top-0" style={{ width: "100%" }} type="Email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Date of Birth</b><br />
                    <DatePicker
                      onChange={this.onChangeDate}
                      value={this.state.date}
                    />
                  </div>
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Gender</b><br />
                    <Select
                      options={options}
                      onChange={this.onChangeGender}
                      value={this.state.gender}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Phone Number</b><br />
                    <input className=" border border-top-0" style={{ width: "100%" }} type="text" placeholder="Phone Number" onChange={this.onChangePhone} value={this.state.phone} />
                  </div>
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Age</b><br />
                    <Select
                      options={options2}
                      onChange={this.onChangeAge}
                      value={this.state.age}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Address</b><br />
                    <input className=" border border-top-0" style={{ width: "100%" }} type="text" placeholder="Address" onChange={this.onChangeAddress} value={this.state.add} />
                  </div>
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>City</b><br />
                    <Select
                      options={options3}
                      onChange={this.onChangeCity}
                      value={this.state.city}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Which School Your Kids/Siblings Are Going?</b><br />
                    <input className=" border border-top-0" style={{ width: "100%" }} type="text" placeholder="School name" onChange={this.onChangeSchool} value={this.state.school} />
                  </div>
                  <div className="col-sm-6">
                    <b style={{ color: "grey" }}>Your School's principal Name </b><br />
                    <input className=" border border-top-0" style={{ width: "100%" }} type="text" placeholder="Principal name" onChange={this.onChangePriciple} value={this.state.principl} />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-12">
                    <b style={{ color: "grey" }}>Write A Comment About Your School </b><br />
                    <input className=" border border" style={{ width: "100%", height: "60px" }} type="text" placeholder="Comment" onChange={this.onChangeComment} value={this.state.comment} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-sm-12">
            <button className="btn btn-default" style={{ backgroundColor: "grey", color: "white" }} onClick={this.onChangeSubmit}>Save</button>
            <button className="btn btn-default ml-1" style={{ backgroundColor: "grey", color: "white" }}>Reset</button>
            <Link to="/UserProfile">abc</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default UserAccount
