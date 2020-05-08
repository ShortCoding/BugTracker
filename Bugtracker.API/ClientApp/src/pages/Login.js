import React, { Component } from 'react';
import {SignUp} from "../components/SignUp";
import {SignIn} from "../components/SignIn";

export class Login extends Component {
  static displayName = Login.name;
  
  constructor(props) {
      super(props);
      this.state = { isSignUp: true };
  }
  
  handleSwitchComponent = () => this.setState({ isSignUp: !this.state.isSignUp });
  
  render () {
    
    return (
      <div>
          <div className="card card-wrapper card-signin flex-row">
              <div className="card-img-left d-none d-md-flex"> </div>
              <div className="card-body">
                  { this.state.isSignUp ?
                      <SignUp history= {this.props.history} switchToLogin={()=> this.handleSwitchComponent()}/>
                      : <SignIn history= {this.props.history} switchToRegister={() => this.handleSwitchComponent()}/>  }
              </div>
          </div>
      </div>
    );
  }
}
