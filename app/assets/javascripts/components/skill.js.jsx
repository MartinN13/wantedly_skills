class Skill extends React.Component {
  render() {
    return (
      <tr className="active">
        <td>{this.props.skill.name}</td>
      </tr>
    );
  }
}