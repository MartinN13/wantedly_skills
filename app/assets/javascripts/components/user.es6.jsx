class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    return (
      <tr className="active">
        <td>{this.state.user.id}</td>
        <td>{this.state.user.name}</td>
        <td>{this.state.user.email}</td>
      </tr>
    );
  }
}


