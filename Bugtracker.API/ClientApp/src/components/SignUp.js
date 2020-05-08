import React, { Component } from 'react';
import 'react-router-dom';

export class SignUp extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username : '',
            email : '',
            password : '', 
            passwordConfirmed: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(e){
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value});
    }

    handleOnSubmit(e){
        e.preventDefault();
        
    }
    
    render() {
        return (
            <div>
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin" onSubmit={this.handleOnSubmit}>
                    <div className="form-label-group">
                        <input type="text" id="inputUserame" className="form-control" name="username" 
                               value={this.state.username} onChange={this.handleOnChange}
                               placeholder="Username" required autoFocus />
                        <label htmlFor="inputUserame">Username</label>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" name="Email"
                               value={this.state.email} onChange={this.handleOnChange}
                               placeholder="Email address" required />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <hr />

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" name="password"
                               value={this.state.password} onChange={this.handleOnChange}
                               placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputConfirmPassword" className="form-control" name="passwordConfirmed"
                               value={this.state.passwordConfirmed} onChange={this.handleOnChange}
                               placeholder="Password" required />
                        <label htmlFor="inputConfirmPassword">Confirm password</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block text-uppercase"
                            type="submit">Register
                    </button>
                </form>
                <hr className="my-4" />
                <div >
                    <button className="btn btn-lg btn-google btn-block text-uppercase"
                            type="submit" >
                        <i className="fab fa-google mr-2"></i> Sign up with
                        Google
                    </button>
                    <button className="btn btn-lg btn-facebook btn-block text-uppercase"
                            type="submit" >
                        <i className="fab fa-facebook-f mr-2"></i> Sign up with
                        Facebook
                    </button>
                </div>
                <input type="button" className="btn btn-dark d-block ml-auto mt-3 small" 
                       onClick={this.props.switchToLogin} value="Sign In" />
            </div>
        );
    }

}