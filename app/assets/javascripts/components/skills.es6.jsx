class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
    }
    
    this.addSkill = this.addSkill.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }
  addSkill() {
    $.ajax({
      method: 'POST',
      url: this.props.url,
      beforeSend(xhr) { 
        xhr.setRequestHeader('Authorization', window.localStorage.getItem('auth_token'));
      },
      dataType: 'json',
      data: {
        name: this.state.name,
      },
      success: result => {
        this.setState({name: ''});
        this.setState({message: result.responseText});
      },
      error: result => {
        console.error(result.responseText);
        this.setState({message: result.responseText});
      }
    });
  }
  handleName(e) {
    this.setState({name: e.target.value});
  }
  handleMessage() {
    this.setState({message: ''});
  }
  render () {
    return (
      <div className="content">
        <div className="column col-12">
          <h1>Add skill</h1>
          {this.state.message && 
            <div className="toast">
              <button className="btn btn-clear float-right" onClick={this.handleMessage}></button>
              {this.state.message}
            </div>
          }
          <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" placeholder="Name" value={this.state.name} onChange={this.handleName}></input>
          </div>
          <div className="form-group">
            <button onClick={this.addSkill} className="btn btn-primary">Add skill</button>
          </div>
        </div>
      </div>
    );
  }
}


