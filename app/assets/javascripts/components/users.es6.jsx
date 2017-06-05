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
      <div className="content">
        <div className="column col-12">
          <h1>Users</h1>
          <table className="table table-striped table-hover user">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>{this.state.users}</tbody>
          </table>
        </div>
      </div>
    )
  }
}