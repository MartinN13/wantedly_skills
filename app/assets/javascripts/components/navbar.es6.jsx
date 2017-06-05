class Navbar extends React.Component {
  logOut() {
    window.localStorage.removeItem('auth_token');
    window.location.href = "/";
  }
  render () {
    return (
      <section className="section-header bg-gray">
        <nav className="navbar grid-header container grid-96">
          <section className="navbar-section">
            <a href="/" className="navbar-brand mr-10">Skills app</a>
            {this.props.currentUser &&
              <a href={'/users/' + this.props.currentUser.id} className="btn btn-link">Profile</a>
            }
            <a href="/users/" className="btn btn-link">Users</a>
            <a href="/skills/" className="btn btn-link">Skills</a>
            <a href="/addSkills/" className="btn btn-link">Add skills</a>
          </section>
          <section className="navbar-section">
            {this.props.currentUser && 
              <a onClick={this.logOut} href="#" className="btn btn-link">Log out</a>
            }
          </section>
        </nav>
      </section>
    );
  }
}


