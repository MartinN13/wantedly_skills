class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: ''
    };
  }
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token')); 
      },
      dataType: 'json',
      success: result => {
        skills = result.map((skill, index) => {
          return (
            <Skill key={index} skill={skill} />
          )
        });
        this.setState({skills: skills});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  render() {
    return (
      <div className="content">
        <Navbar />
        <div className="column col-12">
          <h1>Skills</h1>
          <table className="table table-striped table-hover user">
            <thead>
              <tr>
                <th>name</th>
              </tr>
            </thead>
            <tbody>{this.state.skills}</tbody>
          </table>
        </div>
      </div>
    )
  }
}