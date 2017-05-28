class UserSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.skills,
      addSkills: false,
      value: '',
      errors: {}
    };

  this.addSkills = this.addSkills.bind(this);
  this.removeSkills = this.removeSkills.bind(this);
  this.cancelSkills = this.cancelSkills.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  }
  addSkills() {
    if (this.state.addSkills) {
      $.ajax({
        method: 'POST',
        data: {
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
        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
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
        skill_name: e.target.parentElement.textContent
      },
      url: '/api/v1/user_skills',
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
      },
      dataType: 'json',
      success: result => {
        console.log(result);
        this.setState({skills: result});
      },
      error: (xhr, status, err) => {
        console.error(status, err.toString());
      }
    });
  }
  cancelSkills() {
    this.setState({addSkills: false});
  }
  handleInputChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    let skills = this.state.skills.map((skill, index) => {
      return (
        <div key={index} className="tile tile-centered">
          <label className="chip">{skill.name}
            <button className="btn btn-clear" onClick={this.removeSkills}></button>
          </label>
        </div>
      )
    });

    let skillInput = null;
      if (this.state.addSkills) {
        skillInput = 
          <div className="tile tile-centered">
            <input className="form-input" type="text" placeholder="JavaScript" value={this.state.value} onChange={this.handleInputChange}></input>
          </div>;
      } else {
        skillInput = null;
      }
    let cancelButton = null;
      if (this.state.addSkills) {
        cancelButton = 
          <button onClick={this.cancelSkills} className="btn btn-link">Cancel</button>
      } else {
        cancelButton = null;
      }
  
    return (
      <div className="panel-body">
        <div className="panel-title mt-10">Skills</div>
        {skills}
        {skillInput}
        <button onClick={this.addSkills} className="btn btn-primary">Add</button>
        {cancelButton}
      </div>
    )
  }
}


