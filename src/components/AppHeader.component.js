import React, { Component } from 'react';
import '../App.css';

export default class AppHeader extends Component{

  render(){
    return(
      <div className="app-header">
        <div className="header-left">
          <h3>{this.props.companyInfo.companyName}</h3>
          <p>{this.props.companyInfo.companyMotto}</p>
          </div>

          <div className="header-right">
          Since: {this.props.companyInfo.companyEst}
          </div>
      </div>
    )
  }
}
