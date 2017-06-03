class UserEndorsements extends React.Component {
  render () {
    let endorsements = [];

    this.props.endorsements.forEach((endorsement, index) => {
      const userSkillId = endorsement.user_skill_id;
      const userSkill = this.props.userSkills.filter(x => x.id === userSkillId);

      if (userSkill[0].skill_id == this.props.skill.id) {
        endorsements.push(<UserEndorsement key={index} endorsement={endorsement} />);
      }
    });

    return (
      <div className="endorsements tile-content">
        {endorsements}
      </div>
    )
  }
}


