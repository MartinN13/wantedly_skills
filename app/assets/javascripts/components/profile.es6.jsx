class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      skills: '',
      endorsements: '',
      loaded: false
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
        this.setState({user: result.user});
        this.setState({skills: result.skills});
        this.setState({endorsements: result.endorsements});
        this.setState({loaded: true});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  render() {
    /* return when ajax call and setState is finished */
    if (this.state.loaded) {
      return (
        <div className="content">
          <Navbar user={this.state.user} />
          <section className="section-profile">
            <div className="profile column col-12">
              <div className="panel">
                <UserInfo user={this.state.user} />
                <UserSkills user={this.state.user} skills={this.state.skills} endorsements={this.state.endorsements} />
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
