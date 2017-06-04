class UserEndorsement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  componentWillMount() {
    $.ajax({
      method: 'POST',
      data: {
        id: this.props.endorsement.user_id,
      },
      url: '/api/v1/user_info',
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
      },
      dataType: 'json',
      success: result => {
        this.setState({name: result[0][1]});
      },
      error: (result, xhr, status) => {
        console.error(result.responseJSON.error);
      }
    });
  }
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
                data-endorsement-user-id={this.props.endorsement.user_id} data-badge={dataBadge} data-initial={this.state.name}></figure>
      </div>
    )
  }
}


