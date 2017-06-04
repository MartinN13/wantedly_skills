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
    return (
      <div className="endorsement tile-icon">
        <figure onClick={this.props.removeEndorsement} className="avatar avatar-sm" data-endorsement-id={this.props.endorsement.id} 
                data-endorsement-user-id={this.props.endorsement.user_id} data-initial={this.state.name}></figure>
      </div>
    )
  }
}


