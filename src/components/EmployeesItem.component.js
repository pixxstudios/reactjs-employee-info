import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

export default class EmployeesItem extends Component{
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modal ="";
    this.state = {
      showModal : false
    };
}

  // close the modal window on clicking of the close button
  closeModal(){
    this.modal.style.display = "none" ;
  }

  // opens the modal window on clicking of the tile
  openModal(){
    this.setState({
      showModal:true,
      show:true
    });

    this.modal = ReactDOM.findDOMNode(this.refs.myModal);
    this.modal.style.display = "block";
  }

  render(){
    return(
      <div className="employee-item" >
      <div className="employee-img" onClick = {this.openModal}>
        <img src={this.props.avatar} alt="" className="img-thumbnail"/>
      </div>
      <div className="employee-details" onClick = {this.openModal}>
        <div className="employee-name">{this.props.firstName} {this.props.lastName}</div>
        <div className="employee-age">Age: {this.props.age}</div>
        <div className="employee-job">Job title: {this.props.jobTitle}</div>
        <h4 onClick = {this.openModal}> View More ... </h4>
      </div>

      <div className="modal" ref="myModal">
        <div className="modal-content">
          <span className="close" onClick={this.closeModal}>&times;</span>
          <div>
            <div className="modal-left">
              <img src={this.props.avatar} alt="" className="img-thumbnail"/>
              <h5>{this.props.jobTitle}</h5>
              <h5>Age: {this.props.age}</h5>
              <h5>Date Joined: {this.props.dateJoined.substring(0,10)}</h5>
            </div>
            <div className = "modal-right">
                <h4>{this.props.firstName} {this.props.lastName}</h4>
                <p>{this.props.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
