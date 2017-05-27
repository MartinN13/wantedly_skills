class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
      userSkills: ''
    };
  }
  componentDidMount() {
    console.log(this.props.url);
    $.ajax({
      url: this.props.url,
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTU5NTc1NzR9.5a06nmdcFmbbvAqw6AVR7fWIiNR8u5_KcnFcWHZstEk'); 
      },
      dataType: 'json',
      success: result => {
        this.setState({userInfo: <UserInfo user={result} />});
        this.setState({userSkills: <UserSkills skills={result.skills} email={result.email}/>});
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
