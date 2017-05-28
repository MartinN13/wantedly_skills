class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({userInfo: <UserInfo user={result} />});
        this.setState({userSkills: <UserSkills skills={result.skills} />});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  render() {
    return (
      <div className="profile column col-12">
        <div className="panel">
          {this.state.userInfo}
          {this.state.userSkills}
        </div>
      </div>);
  }
}
