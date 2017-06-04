class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    
    this.addSkill = this.addSkill.bind(this);
    this.handleName = this.handleName.bind(this);
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
        console.log(result.responseText);
        location.reload();
      },
      error: result => {
        console.error(result.responseText);
      }
    });
  }
  handleName(e) {
    this.setState({name: e.target.value});
    console.log(e.target.value);
  }
  render () {
    return (
      <div className="content">
        <Navbar />
        <div className="column col-12">
          <h1>Add skill</h1>
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


