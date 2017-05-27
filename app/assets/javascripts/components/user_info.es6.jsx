class UserInfo extends React.Component {
  render () {
    const avatarAttribute = {'data-initial': this.props.user.name.charAt(0)};

    return (
      <div className="panel-header text-center">
        <figure className="avatar avatar-xl" {...avatarAttribute}></figure>
        <div className="panel-title mt-10">{this.props.user.name}</div>
        <div className="panel-subtitle">{this.props.user.email}</div>
      </div>
    )
  }
}


