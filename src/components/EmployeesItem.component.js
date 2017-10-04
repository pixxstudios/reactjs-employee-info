import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Modal, Button}  from 'react-bootstrap';
//import EmployeeModal from './EmployeeModal.component';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
export default class EmployeesItem extends Component{
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modal ="";
  //  this.displayEmployeeData = this.displayEmployeeData.bind(this);
    this.state = {
      showModal : false
    };
}
    // Get the modal
  //  console.log('myModal ', ReactDOM.findDOMNode(this.refs.myModal));
//var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
//console.log('btn ',btn);
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//btn.onclick = function() {
  //  modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
  //  modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
/*modal.onclick = function(event) {
  console.log('window click ', this);
    if (event.target.className == "modal") {
       this.closeModal();//this.modal.style.display = "none";
    }
  }.bind(this);
*/

  closeModal(){
    console.log('close button ',this.modal);
    this.modal.style.display = "none" ;
    console.log('close button 2  ',this.modal);
  }

  openModal(){
    //console.log('open modal', EmployeeModal);
    this.setState({
      showModal:true,
      show:true
    });

    this.modal = ReactDOM.findDOMNode(this.refs.myModal);
    //span = ReactDOM.findDOMNode(this.refs.closeBtn);//document.getElementsByClassName("close")[0];

    this.modal.style.display = "block";
    console.log('openModal', this.state.showModal);
  //  <EmployeeModal show='true'/>
    //this.state.showModal ? <EmployeeModal show='true'/> : null
  }

/*  displayEmployeeData(){
    console.log(this.state.showModal);
    if(this.state.showModal){
      //return <EmployeeModal show={this.state.showModal} />;
      let close = () => this.setState({showModal:false, show: false});

      return(
      <div className="modal-container" style={{height: 200}}>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>)
    }
    else{
      return("")
    }
  }*/

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
