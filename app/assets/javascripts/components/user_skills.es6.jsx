class UserSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.skills
    };
  }
  render () {
    skills = this.state.skills.map((skill, index) => {
          return (
            <div key={index} className="tile tile-centered">
              <label className="chip">{skill.name}
                <button className="btn btn-clear"></button>
              </label>
            </div>
          )
        });

    return (
      <div className="panel-body">
        <div className="panel-title mt-10">Skills</div>
        {skills}
        <button className="btn btn-primary">Add skill</button>
      </div>
    )
  }
}


