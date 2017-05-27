class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    return (
      <table className="table table-striped table-hover user">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            </tr>
        </thead>
        <tbody>
          <tr className="active">
            <td>{this.state.user.id}</td>
            <td>{this.state.user.name}</td>
            <td>{this.state.user.email}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}


