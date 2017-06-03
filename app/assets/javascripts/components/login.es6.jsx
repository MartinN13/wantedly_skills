class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  componentDidMount() {
    if (window.localStorage.getItem('auth_token')) {
      this.setState({loggedIn: true});
    }
  }
  render () {
    if (this.state.loggedIn) {
      /* current user url */
      return <Profile url={'/api/v1/users/2'} />
    }
    else {
      return <LoginForm url={this.props.url} />
    }
  }
}


