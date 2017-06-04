class UserSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.skills,
      userSkills: this.props.userSkills,
      endorsements: this.props.endorsements,
      addSkill: false,
      value: '',
      error: ''
    };

  this.addSkill = this.addSkill.bind(this);
  this.removeSkill = this.removeSkill.bind(this);
  this.cancelSkills = this.cancelSkills.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleError = this.handleError.bind(this);
  }
  addSkill(e) {
    if (this.state.addSkill) {
      $.ajax({
        method: 'POST',
        data: {
          user_profile_id: this.props.user.id,
          skill_name: this.state.value
        },
        url: '/api/v1/user_skills',
        beforeSend(xhr) { 
          xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
        },
        dataType: 'json',
        success: result => {
          this.setState({userSkills: result.userSkills});
          this.setState({skills: result.skills});
          this.setState({value: ''});
        },
        error: result => {
          this.setState({error: result.responseText});
          this.setState({value: ''});
        }
      });
    } else {
      this.setState({addSkill: true});
    }
  }
  removeSkill(e) {
    if (this.props.currentUser.id == this.props.user.id) {
      $.ajax({
        method: 'DELETE',
        data: {
          id: e.target.parentElement.getAttribute('data-user-skill-id'),
          user_profile_id: this.props.user.id
        },
        url: '/api/v1/user_skills',
        beforeSend(xhr) { 
          xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
        },
        dataType: 'json',
        success: result => {
          this.setState({skills: result.skills});
          this.setState({userSkills: result.userSkills});
        },
        error: result => {
          this.setState({error: result.responseText});
          this.setState({value: ''});
        }
      });
    }
  }
  cancelSkills() {
    this.setState({addSkill: false});
  }
  handleInputChange(e) {
    this.setState({value: e.target.value});
  }
  handleError() {
    this.setState({error: ''});
  }
  render() {
    let skills = [];
    this.state.skills.forEach((skill, index) => {
      skills.push(<UserSkill key={index} removeSkill={this.removeSkill} skill={skill} userSkills={this.state.userSkills} user={this.props.user}
                             currentUser={this.props.currentUser} endorsements={this.props.endorsements} />);
    });

    return (
      <div className="panel-body">
        <div className="panel-title mt-10">Skills</div>
        {this.state.error && 
          <div className="toast toast-error">
            <button className="btn btn-clear float-right" onClick={this.handleError}></button>
            {this.state.error}
          </div>
        }
        {skills}
        {this.state.addSkill &&
          <div className="tile tile-centered">
            <input className="form-input" type="text" placeholder="JavaScript" value={this.state.value} onChange={this.handleInputChange}></input>
          </div>
        }
        <button onClick={this.addSkill} className="btn btn-primary">Add</button>
        {this.state.addSkill && 
          <button onClick={this.cancelSkills} className="btn btn-link">Cancel</button>
        }
      </div>
    )
  }
}


