import React, { Component } from 'react';
import '../App.css';
import EmployeesItem from './EmployeesItem.component';

export default class Employees extends Component{
  constructor(props){
    super(props);

    this.state = {
      employees:[]
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      employees: nextProps.employees
    });
  }

  render(){
    return(
      <div>
        {
          this.state.employees.map(function(employee, index){
                return <EmployeesItem
                        key={index}
                        avatar={employee.avatar}
                        index={index}
                        age={employee.age}
                        bio={employee.bio}
                        dateJoined={employee.dateJoined}
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        jobTitle={employee.jobTitle}
                />
          })
        }
      </div>
    )
  }
}
