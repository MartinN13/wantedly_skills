class User extends React.Component {
  render() {
    return (
      <tr className="active">
        <td>{this.props.user.id}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.email}</td>
      </tr>
    );
  }
}


