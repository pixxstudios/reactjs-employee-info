import React, { Component } from 'react';
import '../App.css';

export default class AppHeader extends Component{
  constructor(props){
    super(props);
    this.state = {companyEst : ""};
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      companyEst : nextProps.companyInfo.companyEst.substring(0,10)
    })
  }

  render(){
    return(
      <div className="app-header">
        <div className="header-left">
          <h3>{this.props.companyInfo.companyName}</h3>
          <p>{this.props.companyInfo.companyMotto}</p>
          </div>

          <div className="header-right">
            Since: {this.state.companyEst}
          </div>
      </div>
    )
  }
}
