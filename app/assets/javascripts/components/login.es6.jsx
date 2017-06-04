class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: '',
      loaded: false
    }
  }
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/v1/profile',
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
      },
      dataType: 'json',
      success: result => {
        this.setState({user: result.id});
        this.setState({loggedIn: true});
        this.setState({loaded: true});
      },
      error: (result, xhr, status) => {
        console.error(result, xhr, status);
        this.setState({loaded: true});
      }
    });
  }
  render() {
    if (this.state.loaded) {
      if (this.state.loggedIn) {
        return <Profile url={'/api/v1/users/' + this.state.user} />
      } else {
        return <LoginForm url={'/authenticate'} />
      }
    } else {
      return <div />
    }
  }
}


