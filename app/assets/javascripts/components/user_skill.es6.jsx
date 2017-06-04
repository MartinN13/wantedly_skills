class UserSkill extends React.Component {
  render() {
    console.log(this.props.currentUser);
    const userSkillId = this.props.userSkills.filter(userSkill => userSkill.skill_id == this.props.skill.id);
    return (
      <div className="tile tile-centered">
        <div className="tile-content">
          <label className="chip" data-skill-id={this.props.skill.id} data-user-skill-id={userSkillId[0].id}>{this.props.skill.name}
            {this.props.currentUser.id == this.props.user.id &&
              <button className="btn btn-clear" onClick={this.props.removeSkill}></button>
            }
          </label>
          <UserEndorsements user={this.props.user} currentUser={this.props.currentUser} skill={this.props.skill} userSkills={this.props.userSkills} endorsements={this.props.endorsements} />
        </div>
      </div>
    )
  }
}