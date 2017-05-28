class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false
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
    let loggedIn = null;
    if (this.state.loggedIn) {
      loggedIn = <Profile />
    } else {
      loggedIn = <LoginForm email={this.state.email} password={this.state.password} url={this.props.url} />
    }
    return (
      <div>
        {loggedIn}
      </div>
    )
  }
}


