class UserSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.skills,
      skill: '',
      buttonText: 'Add skill',
      addSkills: false,
      value: '',
      errors: {}
    };

  this.addSkills = this.addSkills.bind(this);
  this.cancelSkills = this.cancelSkills.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  }
  addSkills() {
    if (this.state.addSkills) {
      $.ajax({
        method: 'POST',
        data: {
          user_name: this.props.email,
          skill_name: this.state.value
        },
        url: '/api/v1/user_skills',
        beforeSend(xhr) { 
          xhr.setRequestHeader('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTU5NTc1NzR9.5a06nmdcFmbbvAqw6AVR7fWIiNR8u5_KcnFcWHZstEk'); 
        },
        dataType: 'json',
        success: result => {
          console.log(result);
        },
        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
        }
      });
    } else {
      this.setState({addSkills: true});
    }
  }
  cancelSkills() {
    this.setState({addSkills: false});
    this.setState({buttonText: `Add skill`});
  }
  handleInputChange(e) {
    if (e.target.value == '') {
      this.setState({buttonText: `Add JavaScript`});
    } else {
      this.setState({buttonText: `Add ${e.target.value}`});
    }
    this.setState({value: e.target.value});
  }
  render() {
    let skills = this.state.skills.map((skill, index) => {
      return (
        <div key={index} className="tile tile-centered">
          <label className="chip">{skill.name}
            <button className="btn btn-clear"></button>
          </label>
        </div>
      )
    });

    let skillInput = null;
      if (this.state.addSkills) {
        skillInput = 
          <div className="tile tile-centered">
            <input className="form-input" type="text" placeholder="JavaScript" onChange={this.handleInputChange}></input>
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
        <button onClick={this.addSkills} className="btn btn-primary">{this.state.buttonText}</button>
        {cancelButton}
      </div>
    )
  }
}


