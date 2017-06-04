class UserEndorsements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endorsements: this.props.endorsements,
    };

    this.addEndorsement = this.addEndorsement.bind(this);
    this.removeEndorsement = this.removeEndorsement.bind(this);
  }
  addEndorsement(e) {
    if (this.props.user.id !== this.props.currentUser.id) {
      const skillId = e.target.parentElement.parentElement.previousSibling.getAttribute('data-skill-id');
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
  removeEndorsement(e) {
    if (this.props.user.id == this.props.currentUser.id ||
        this.props.currentUser.id == e.target.getAttribute('data-endorsement-user-id')) {
      const endorsementId = e.target.getAttribute('data-endorsement-id');

      $.ajax({
        method: 'DELETE',
        data: {
          id: endorsementId,
          user_profile_id: this.props.user.id
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
    let endorsements = [];
    this.state.endorsements.forEach((endorsement, index) => {
      const userSkillId = endorsement.user_skill_id;
      const userSkill = this.props.userSkills.filter(userSkill => userSkill.id === userSkillId);

      if (userSkill[0].skill_id == this.props.skill.id) {
        endorsements.push(<UserEndorsement key={index} removeEndorsement={this.removeEndorsement} user={this.props.user} currentUser={this.props.currentUser} endorsement={endorsement} />);
      }
    });

    if (endorsements.length > 0) {
        endorsements.unshift(<div key="999" className="separator"></div>);
      }

    let currentUserEndorsement = false;
    let endorsementCount = 0;
    this.state.endorsements.forEach((endorsement, index) => {
      const userSkillId = endorsement.user_skill_id;
      const userSkill = this.props.userSkills.filter(x => x.id === userSkillId);

      if (this.props.currentUser.id == endorsement.user_id) {
        currentUserEndorsement = true;
      }

      if (userSkill[0].skill_id == this.props.skill.id) {
        endorsementCount++;
      }
    });

    let className = 'avatar avatar-lg';
    let dataBadge = '';

    if (this.props.currentUser.id !== this.props.user.id && !currentUserEndorsement) {
      className = 'avatar avatar-lg badge';
      dataBadge = '+';
    }

    return (
      <div className="endorsements tile-content">
        <div className="endorsement-count tile-icon">
          <figure onClick={this.addEndorsement} className={className} data-badge={dataBadge} data-initial={endorsementCount}></figure>
        </div>
        {endorsements}
      </div>
    )
  }
}