import React, { Component } from 'react';
import '../App.css';

export default class AppHeader extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="app-header">
        This is the application header.
      </div>
    )
  }
}
