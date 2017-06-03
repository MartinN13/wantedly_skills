class UserEndorsementCount extends React.Component {
  render () {
    let endorsementCount = 0;

    this.props.endorsements.forEach((endorsement, index) => {
      const userSkillId = endorsement.user_skill_id;
      const userSkill = this.props.userSkills.filter(x => x.id === userSkillId);

      if (userSkill[0].skill_id == this.props.skill.id) {
        endorsementCount++;
      }
    });

    const avatarAttribute = {'data-initial': endorsementCount};

    return (
      <div className="tile-icon">
        <figure className="avatar avatar-sm" {...avatarAttribute}></figure>
      </div>
    )
  }
}


