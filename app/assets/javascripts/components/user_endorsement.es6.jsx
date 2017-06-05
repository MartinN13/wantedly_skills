class UserEndorsement extends React.Component {
  render () {
    let className = 'avatar avatar-lg';
    let dataBadge = '';

    if (this.props.currentUser.id == this.props.user.id ||
        this.props.currentUser.id == this.props.endorsement.user_id) {
      className = 'avatar avatar-lg badge';
      dataBadge = 'X';
    }
    return (
      <div className="endorsement tile-icon">
        <figure onClick={this.props.removeEndorsement} className={className} data-endorsement-id={this.props.endorsement.id} 
                data-endorsement-user-id={this.props.endorsement.user_id} data-badge={dataBadge} data-initial={this.props.endorsement.user_name}></figure>
      </div>
    )
  }
}


