import React, { Component } from 'react';
import '../App.css';
import { Modal, Button}  from 'react-bootstrap';

export default class EmployeeModal extends Component{
  constructor(props){
    super(props);
    console.log('EmployeeModal constructor', props);
    this.state = { show : false };
  }

  componentWillReceiveProps(props){
  //  console.log(this.props);
    if(this.props !== undefined){
      console.log(this.props.show);
    }
    this.setState({ show : this.props.show});
    console.log('componentWillReceiveProps' ,this.props.show);
  }

  render(){
    let close = () => this.setState({ show: false});

    return (
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
      </div>
    );
  }
}
