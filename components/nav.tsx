import React from "react";

export default class Nav extends React.Component {

    public state = {
        navBarIsOpen: false
    }

    toggleNavbar() {
        this.setState({
            navBarIsOpen: !this.state.navBarIsOpen
        })
    }

    render() {
        return (
            <nav className="navbar has-shadow is-dark" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://teamfighttactics.leagueoflegends.com/en-gb/">
                            <img src="logo.png" alt="What up?" />
                        </a>

                        <a role="button" className={`navbar-burger ${ this.state.navBarIsOpen ? 'is-active' : ''}`} onClick={ () => this.toggleNavbar() } aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className={`navbar-menu ${ this.state.navBarIsOpen ? 'is-active' : ''}`}>
                        <div className="navbar-start">
                            <a className="navbar-item">
                                Home
                            </a>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link is-arrowless">
                                    Language
                                </a>
                                <hr className="nav-divider" />
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        English
                                    </a>
                                    <a className="navbar-item">
                                        Danish
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

/*export default function Nav() {
    return (
        <nav className="navbar has-shadow is-dark" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://teamfighttactics.leagueoflegends.com/en-gb/">
              <img src="logo.png" alt="What up?" />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">
                  Language
              </a>
                <hr className="nav-divider" />
                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    English
                </a>
                  <a className="navbar-item">
                    Danish
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}*/