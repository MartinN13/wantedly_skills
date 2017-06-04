class UserInfo extends React.Component {
  render () {
    return (
      <div className="panel-header text-center">
        <figure className="avatar avatar-xl" data-initial={this.props.user.name}></figure>
        <div className="panel-title mt-10">{this.props.user.name}</div>
        <div className="panel-subtitle">{this.props.user.email}</div>
      </div>
    )
  }
}


