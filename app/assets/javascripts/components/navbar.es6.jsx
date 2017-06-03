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
            <a href="#" className="btn btn-link">Profile</a>
          </section>
          <section className="navbar-section">
            <a onClick={this.logOut} href="#" className="btn btn-link">Log out</a>
          </section>
        </nav>
      </section>
    );
  }
}


