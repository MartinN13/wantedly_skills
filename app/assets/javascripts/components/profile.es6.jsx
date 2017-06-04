class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      currentUser: '',
      skills: '',
      userSkills: '',
      endorsements: '',
      loaded: false
    };
  }
  componentDidMount() {
    if (!window.localStorage.getItem('auth_token')) {
       window.location.href = "/";
    }

    $.ajax({
      url: this.props.url,
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
      },
      dataType: 'json',
      success: result => {
        this.setState({user: result.user});
        this.setState({currentUser: result.currentUser});
        this.setState({skills: result.skills});
        this.setState({userSkills: result.userSkills})
        this.setState({endorsements: result.endorsements});
        this.setState({loaded: true});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="content">
          <Navbar user={this.state.user} currentUser={this.state.currentUser} />
          <section className="section-profile">
            <div className="profile column col-12">
              <div className="panel">
                <UserInfo user={this.state.user} />
                <UserSkills user={this.state.user} currentUser={this.state.currentUser} skills={this.state.skills} 
                            userSkills={this.state.userSkills} endorsements={this.state.endorsements} />
              </div>
            </div>
          </section>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
