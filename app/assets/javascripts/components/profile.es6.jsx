class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: '',
      userInfo: '',
      userSkills: ''
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
        this.setState({navbar: <Navbar user={result.user} />});
        this.setState({userInfo: <UserInfo user={result.user} />});
        this.setState({userSkills: <UserSkills user={result.user} skills={result.skills} 
                                               endorsements={result.endorsements}/>});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  render() {
    return (
      <div className="content">
        {this.state.navbar}
        <section className="section-profile">
          <div className="profile column col-12">
            <div className="panel">
              {this.state.userInfo}
              {this.state.userSkills}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
