import React, { Component } from 'react';
import {Sidebar} from "./Sidebar";
import {TopNavbar} from "./TopNavbar";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      
    return (
      <div>
        <Sidebar />
        <TopNavbar />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
