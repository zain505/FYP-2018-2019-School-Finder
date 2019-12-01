import React, { Component } from 'react'
import Blogin from '../Home/Blogin';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import firebase from 'firebase'

const vacancyOptions = [{
  label: "1",
  value: "1"
}, {
  label: "2",
  value: "2"
},
{
  label: "3",
  value: "3"
},
{
  label: "4",
  value: "4"
},
{
  label: "5",
  value: "5"
},
{
  label: "5+",
  value: "5+"
},
{
  label: "10+",
  value: "10+"
}]
export class UserAccount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      schoolName:"",
      feeYear:"",
      admissionTestFee:"",
      registrationFee:"",
      transportFee:"",
      booksFee:"",
      uniformFee:"",
      examFee:"",
      preSchool:"",
      preKG:"",
      kgToGrade1:"",
      grade2ToGrade5:"",
      grade6ToGrade8:"",
      grade9ToGrade10:"",
      jobPosition:"",
      jobNumberVacancy:"",
      jobQualification:"",
      jobDepartment:""

    }
  }
  onSchoolName = (e) => {
    this.setState({ schoolName:e.target.value })
  }
  onChangeYear = (e) => {
    this.setState({ feeYear:e.target.value })
  }
  onAdmissionFee = (e) => {
    this.setState({ admissionTestFee:e.target.value })
  }
  onRegistrationFee = (e) => {
    this.setState({ registrationFee:e.target.value })
  }
  onTransportFee = (e) => {
    this.setState({ transportFee:e.target.value })
  }
  onBooksFee = (e) => {
    this.setState({ booksFee:e.target.value })
  }
  onUniformFee = (e) => {
    this.setState({ uniformFee:e.target.value })
  }
  onExamFee = (e) => {
    this.setState({ examFee:e.target.value })
  }
  onPreSchool = (e) => {
    this.setState({ preSchool:e.target.value })
  }
  onPreKg = (e) => {
    this.setState({ preKG:e.target.value })
  }
  onKgToGrade1 = (e) => {
    this.setState({ kgToGrade1:e.target.value })
  }
  onGrade2ToGrade5 = (e) => {
    this.setState({ grade2ToGrade5:e.target.value })
  }
  onGrade6ToGrade8 = (e) => {
    this.setState({ grade6ToGrade8:e.target.value })
  }
  onGrade9ToGrade10 = (e) => {
    this.setState({ grade9ToGrade10:e.target.value })
  }
  onJobPosition = (e) => {
    this.setState({ jobPosition:e.target.value })
  }
  onNumberVacancy = (jobNumberVacancy) => {
    this.setState({ jobNumberVacancy })
  }
  onJobQualification = (e) => {
    this.setState({ jobQualification:e.target.value })
  }
  onJobDepartment = (e) => {
    this.setState({ jobDepartment:e.target.value })
  }


  onChangeSubmit = () => {
    firebase.database().ref('Details').push({
      Year: this.state.feeYear,
      Name:this.state.schoolName,
      Admission_Fee: this.state.admissionTestFee,
      Registration_Fee: this.state.registrationFee,
      Transport_Fee: this.state.transportFee,
      Uniform_Fee: this.state.uniformFee,
      Books_Fee: this.state.booksFee,
      Exam_Fee: this.state.examFee,
      PreSchool_Fee:this.state.preSchool,
      PreKg_Fee:this.state.preKG,
      KgToGrade1_Fee:this.state.kgToGrade1,
      Grade2ToGrade5_Fee:this.state.grade2ToGrade5,
      Grade6ToGrade8_Fee:this.state.grade6ToGrade8,
      Grade9ToGrade10_Fee:this.state.grade9ToGrade10,
      JobPosition_Fee:this.state.jobPosition,
      JobVacancy_Fee:this.state.jobNumberVacancy,
      JobQualification_Fee:this.state.jobQualification,
      JobDepartment_Fee:this.state.jobDepartment,
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <Blogin />
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <h1 className="lead font-weight-bold">Add New Fee Structure and Post A Job</h1>
                <button className="btn btn-primary btn-sm">Reset All</button>
              </div>
            </div>
            <div className="card-body">
              <h3>Fees Detail</h3>
              <div className="row">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">School Name</span>
                    <input className="form-control" placeholder="ABC school" onChange={this.onSchoolName} value={this.state.schoolName} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Fees Year</span>
                    <input className="form-control" placeholder="ex (2019-2020)" onChange={this.onChangeYear} value={this.state.feeYear} />
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Admission Test Fee</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onAdmissionFee} value={this.state.admissionTestFee} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Registration Fee</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onRegistrationFee} value={this.state.registrationFee} />
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Transport Fee</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onTransportFee} value={this.state.transportFee} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Books Fee</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onBooksFee} value={this.state.booksFee} />
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Uniform Fee</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onUniformFee} value={this.state.uniformFee} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Exam Fee</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onExamFee} value={this.state.examFee} />
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Pre School</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onPreSchool} value={this.state.preSchool} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Pre KG</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onPreKg} value={this.state.preKG} />
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">KG To Grade1</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onKgToGrade1} value={this.state.kgToGrade1} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Grade2 To Grade5</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onGrade2ToGrade5} value={this.state.grade2ToGrade5} />
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Grade6 To Grade8</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onGrade6ToGrade8} value={this.state.grade6ToGrade8} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Grade9 To Grade10</span>
                    <input className="form-control" placeholder="ex (PKR-500)" onChange={this.onGrade9ToGrade10} value={this.state.grade9ToGrade10} />
                  </div>
                </div>
              </div>
              <h3>Job Detail</h3>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Position</span>
                    <input className="form-control" placeholder="ex. Chimistry Teacher" onChange={this.onJobPosition} value={this.state.jobPosition} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Number of Vacancies</span>
                    <div class="form-group">
                      <Select
                      options={vacancyOptions}
                      onChange={this.onNumberVacancy}
                      value={this.state.jobNumberVacancy}
                    />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Required Qualification</span>
                    <input className="form-control" placeholder="ex. BS(Chemistry)" onChange={this.onJobQualification} value={this.state.jobQualification} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <span className="lead">Department / Category</span>
                    <input className="form-control" placeholder="ex. Chemistry" onChange={this.onJobDepartment} value={this.state.jobDepartment} />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end py-2">
                <button className="btn btn-outline-primary mx-2" onClick={this.onChangeSubmit}>Save</button>
                <button className="btn btn-outline-light border text-dark"> Go Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserAccount
