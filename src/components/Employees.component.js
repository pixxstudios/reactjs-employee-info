import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import EmployeesItem from './EmployeesItem.component';

export default class Employees extends Component{
  constructor(props){
    super(props);
    this.LoadEmployeeData();
  }

  LoadEmployeeData(){
    console.log('loading employee data ... ');

  }

  render(){
    return(
      <div>
        <EmployeesItem />
        <EmployeesItem />
        <EmployeesItem />
        <EmployeesItem />
        <EmployeesItem />
        <EmployeesItem />
      </div>
    )
  }
}
