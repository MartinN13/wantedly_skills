class User extends React.Component {
  render() {
    return (
      <tr className="active">
        <td>{this.props.user.id}</td>
        <td><a href={'/users/' + this.props.user.id}>{this.props.user.name}</a></td>
        <td>{this.props.user.email}</td>
      </tr>
    );
  }
}


