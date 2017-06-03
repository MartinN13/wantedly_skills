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
    return (
      <div>
        {this.state.loggedIn ? (
          /* current user */
          <Profile url={'/api/v1/users/2'} />
          ) : (
          <LoginForm url={this.props.url} />
        )}
      </div>
    )
  }
}


