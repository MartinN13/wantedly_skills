class UserSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      skills: this.props.skills,
      endorsements: this.props.endorsements,
      addSkills: false,
      value: '',
      error: ''
    };

  this.addSkills = this.addSkills.bind(this);
  this.removeSkills = this.removeSkills.bind(this);
  this.cancelSkills = this.cancelSkills.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleError = this.handleError.bind(this);
  }
  addSkills() {
    if (this.state.addSkills) {
      $.ajax({
        method: 'POST',
        data: {
          user_id: this.state.user.id,
          skill_name: this.state.value
        },
        url: '/api/v1/user_skills',
        beforeSend(xhr) { 
          xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
        },
        dataType: 'json',
        success: result => {
          this.setState({skills: result});
          this.setState({value: ''});
        },
        error: (result, xhr, status) => {
          console.error(result.responseJSON.error);
          this.setState({error: result.responseJSON.error});
        }
      });
    } else {
      this.setState({addSkills: true});
    }
  }
  removeSkills(e) {
    $.ajax({
      method: 'DELETE',
      data: {
        user_id: this.state.user.id,
        skill_name: e.target.parentElement.textContent
      },
      url: '/api/v1/user_skills',
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
      },
      dataType: 'json',
      success: result => {
        this.setState({skills: result});
      },
      error: (result, xhr, status) => {
        console.error(result.responseJSON.error);
        this.setState({error: result.responseJSON.error});
      }
    });
  }
  cancelSkills() {
    this.setState({addSkills: false});
  }
  handleInputChange(e) {
    this.setState({value: e.target.value});
  }
  handleError() {
    this.setState({error: ''});
  }
  render() {
    let skills = this.state.skills.map((skill, index) => {
      return (
        <div key={index} className="tile tile-centered">
          <UserEndorsementCount skill={skill} endorsements={this.state.endorsements} />
          <label className="chip">{skill.name}
            <button className="btn btn-clear" onClick={this.removeSkills}></button>
          </label>
        </div>
      )
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
        {this.state.addSkills &&
          <div className="tile tile-centered">
            <input className="form-input" type="text" placeholder="JavaScript" value={this.state.value} onChange={this.handleInputChange}></input>
          </div>
        }
        <button onClick={this.addSkills} className="btn btn-primary">Add</button>
        {this.state.addSkills && 
          <button onClick={this.cancelSkills} className="btn btn-link">Cancel</button>
        }
      </div>
    )
  }
}


