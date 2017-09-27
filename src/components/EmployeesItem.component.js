import React, { Component } from 'react';
import '../App.css';

export default class EmployeesItem extends Component{
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(){
    console.log('open modal');
  }

  render(){
    return(
      <div className="employee-item col-md-4 col-sm-2 col-lg-4" onClick={this.openModal}>
        <div className="employee-img">
          <img src={this.props.avatar} alt="" className="img-thumbnail"/>
        </div>
        <div className="employee-details">
          <div className="employee-name">{this.props.firstName} {this.props.lastName}</div>
          <div className="employee-age">Age: {this.props.age}</div>
          <div className="employee-job">Job title: {this.props.jobTitle}</div>
        </div>
      </div>
    )
  }
}
