class UserEndorsementCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endorsements: this.props.endorsements,
    };

    this.addEndorsement = this.addEndorsement.bind(this);
  }
  addEndorsement(e) {
    if (this.props.user.id !== this.props.currentUser.id) {
      const skillId = e.target.parentElement.nextSibling.firstChild.getAttribute('data-skill-id');
      const userSkillId = this.props.userSkills.filter(userSkill => userSkill.skill_id == skillId);

      $.ajax({
        method: 'POST',
        data: {
          user_profile_id: this.props.user.id,
          user_id: this.props.currentUser.id,
          user_skill_id: userSkillId[0].id
        },
        url: '/api/v1/endorsements',
        beforeSend(xhr) { 
          xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
        },
        dataType: 'json',
        success: result => {
          this.setState({endorsements: result});
        },
        error: (result, xhr, status) => {
          console.error(result.responseJSON.error);
        }
      });
    }
  }
  render () {
    let endorsementCount = 0;

    this.state.endorsements.forEach((endorsement, index) => {
      const userSkillId = endorsement.user_skill_id;
      const userSkill = this.props.userSkills.filter(x => x.id === userSkillId);

      if (userSkill[0].skill_id == this.props.skill.id) {
        endorsementCount++;
      }
    });

    return (
      <div className="tile-icon">
        <figure onClick={this.addEndorsement} className="avatar avatar-sm" data-initial={endorsementCount}></figure>
      </div>
    )
  }
}


