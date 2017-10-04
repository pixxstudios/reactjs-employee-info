import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import AppHeader from './components/AppHeader.component';
import Employees from './components/Employees.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      companyInfo:{},
      employees :[]
    };
    this.LoadEmployeeData = this.LoadEmployeeData.bind(this);
  }

  componentWillMount(){
    $.ajax({
      url : "sample-data.json",
      type : "get",
      dataType : "json",
      success : this.LoadEmployeeData
    })
  }

  LoadEmployeeData(data){
     this.setState({
       companyInfo : data.companyInfo,
       employees : data.employees
      });
      this.forceUpdate();
  }

  render() {
    return (
      <div className="container-fluid">
        <AppHeader companyInfo = {this.state.companyInfo}/>
        <Employees employees = { this.state.employees } />
      </div>
    );
  }
}

export default App;
