class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      'skills':'',
    };
  }
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTU5NTc1NzR9.5a06nmdcFmbbvAqw6AVR7fWIiNR8u5_KcnFcWHZstEk'); 
      },
      dataType: 'json',
      success: result => {
        this.setState({name: result.name});
        this.setState({email: result.email});
        this.setState({skills: result.skills[0].name});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  render() {
    const avatarAttribute = {'data-initial': 'MN'};

    return (
      <div className="profile column col-12">
        <div className="panel">
          <div className="panel-header text-center">
            <figure className="avatar avatar-xl" {...avatarAttribute}></figure>
            <div className="panel-title mt-10">{this.state.name}</div>
            <div className="panel-subtitle">{this.state.email}</div>
          </div>
          <div className="panel-body">
            <div className="panel-title mt-10">Skills</div>
            <div className="tile tile-centered">
              <label className="chip">{this.state.skills}
                <button className="btn btn-clear"></button>
              </label>
            </div>
          </div>
        </div>
      </div>);
  }
}
