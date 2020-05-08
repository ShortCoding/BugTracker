import React, {Component} from 'react';

 
export class SignIn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
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
        console.log(this.state.username, ' ', this.state.password);
        this.props.history.push('/dashboard');
    }
    
    render(){
        return (
            <div>
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={this.handleOnSubmit}>
                    <div className="form-label-group">
                        <input type="text" id="inputUsernameEmail" className="form-control" name="username" 
                               value={this.state.username} onChange={this.handleOnChange}
                               placeholder="Username / Email" required autoFocus />
                        <label htmlFor="inputUsernameEmail">Username</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" name="password" 
                               value={this.state.password} onChange={this.handleOnChange}
                               placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    
                    <button className="btn btn-lg btn-primary btn-block text-uppercase"
                            type="submit">Sign In
                    </button>
                </form>
                <hr className="my-4" />
                <div >
                    <button className="btn btn-lg btn-google btn-block text-uppercase"
                            type="submit" >
                        Sign In with Google
                    </button>
                    <button className="btn btn-lg btn-facebook btn-block text-uppercase"
                            type="submit" >
                        Sign In with Facebook
                    </button>
                </div>

                <input type="button" className="btn btn-dark d-block ml-auto mt-3 small" 
                       onClick={this.props.switchToRegister} value="Register"/>
            </div>
        );
    }
}
