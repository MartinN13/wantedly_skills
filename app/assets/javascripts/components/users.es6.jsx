class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ''
    };
  }
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token')); 
      },
      dataType: 'json',
      success: result => {
        users = result.map((user, index) => {
          return (
            <User key={index} user={user} />
          )
        });
        this.setState({users: users});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  render() {
    return (
      <div className="users">
        <h1>Users</h1>
        {this.state.users}
      </div>
    )
  }
}