class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login = this.login.bind(this);
  }
  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  handlePassword(e) {
    this.setState({password: e.target.value});
  }
  login() {
    $.ajax({
      method: 'POST',
      url: this.props.url,
      dataType: 'json',
      data: {
        email: this.state.email,
        password: this.state.password
      },
      success: result => {
        window.localStorage.setItem('auth_token', result.auth_token);
        this.setState({loggedIn: true});
        location.reload();
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  render () {
    return (
      <div className="column col-12">
        <h1>Login</h1>
        <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail}></input>
        </div>
        <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="text" placeholder="Password" value={this.state.password} onChange={this.handlePassword}></input>
        </div>
        <div className="form-group">
          <button onClick={this.login} className="btn btn-primary">Login</button>
        </div>
      </div>
    );
  }
}


