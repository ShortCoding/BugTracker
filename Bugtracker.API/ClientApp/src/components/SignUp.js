import React, { Component } from 'react';
import authService from '../services/AuthService';
// import {connect} from 'react-redux';
// import {userPostFetch} from '../redux/actions';

import 'react-router-dom';

export class SignUp extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            firstname: '', lastname:'', 
            username : '',
            email : '',
            password : '', 
            passwordConfirmed: '',
            status : null
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange = e => {
        this.setState({[e.target.name] : e.target.value});
    }

    handleOnSubmit = e => {
        e.preventDefault(); 
        let user = {
            FirstName : this.state.firstname,
            LastName : this.state.lastname,
            Username : this.state.username,
            Email : this.state.email, 
            Password : this.state.password
        }
        let status = authService.register(user);
        status.then((res) =>{
            alert(res.data.Message);
        }).catch((err) => console.log(err));
        
        this.setState({status : status});
        this.clearInputs();
    }
    
    clearInputs = () => {
        this.setState({
            firstname: '',
            lastname:'',
            username : '',
            email : '',
            password : '',
            passwordConfirmed: ''
        })
    }
    
    render() {
        const statusMessage = this.state.status &&
            <div className="alert alert-warning" role="alert">
                {this.state.status.Message}
            </div> ; 
        
        return (
            <div>
                { statusMessage }
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin" onSubmit={this.handleOnSubmit}>
                    <div className="form-label-group">
                        <input type="text" id="inputFirstName" className="form-control" name="firstname"
                               value={this.state.firstname} onChange={this.handleOnChange}
                               placeholder="Firstname" required autoFocus />
                        <label htmlFor="inputFirstName">Firstname</label>
                    </div>
                    <div className="form-label-group">
                        <input type="text" id="inputLastname" className="form-control" name="lastname"
                               value={this.state.lastname} onChange={this.handleOnChange}
                               placeholder="Lastname" required autoFocus />
                        <label htmlFor="inputLastname">Lastname</label>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" name="email"
                               value={this.state.email} onChange={this.handleOnChange}
                               placeholder="Email address" />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                        <input type="text" id="inputUsername" className="form-control" name="username"
                               value={this.state.username} onChange={this.handleOnChange}
                               placeholder="Username" required autoFocus />
                        <label htmlFor="inputUsername">Username</label>
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
                <input type="button" className="btn btn-dark d-block ml-auto mt-3 small" 
                       onClick={this.props.switchToLogin} value="Sign In" />
            </div>
        );
    }

}

// const mapDispatchToProps = dispatch => ({
//     userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })
//
// export default connect(null, mapDispatchToProps)(SignUp);