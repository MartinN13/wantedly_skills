class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render () {
    const avatarAttribute = {'data-initial': this.state.user.name.charAt(0)};

    return (
      <div className="panel-header text-center">
        <figure className="avatar avatar-xl" {...avatarAttribute}></figure>
        <div className="panel-title mt-10">{this.state.user.name}</div>
        <div className="panel-subtitle">{this.state.user.email}</div>
      </div>
    )
  }
}


