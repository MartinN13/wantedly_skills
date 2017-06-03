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
        this.setState({name: result[0][1].charAt(0)});
      },
      error: (result, xhr, status) => {
        console.error(result.responseJSON.error);
      }
    });
  }
  render () {
    /* show user full name on hover */
    /* if current user -> clicking on user icon deletes endorsement */
    return (
      <div className="tile-icon">
        <figure className="avatar avatar-sm" data-initial={this.state.name}></figure>
      </div>
    )
  }
}


