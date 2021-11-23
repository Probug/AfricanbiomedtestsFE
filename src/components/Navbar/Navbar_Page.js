import React, { Component } from "react";
import { Container } from "reactstrap";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ScrollspyNav from "./scrollSpy";

//Import Images
import logolight from "../../assets/images/Africanlogo.png";
import logodark from "../../assets/images/Africanlogo.png";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "HOME" },
        { id: 2, idnm: "features", navheading: "ABOUT US" },
        { id: 3, idnm: "service", navheading: "TEST MENU" },
        { id: 4, idnm: "contact", navheading: "CONTACT US" }
      ],
      isOpen: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  // { id: 4, idnm: "client", navheading: "Client" },
  // { id: 5, idnm: "team", navheading: "DISCOVER" },

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.state.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <header
          id="topnav"
          className={
            this.props.isNotSticky === true
              ? "defaultscroll sticky " + this.props.navclass
              : "defaultscroll fixed-top sticky " + this.props.navclass
          }
        >
          <Container style={{display: "contents"}}>
                <div>
                  <Link to="/" className="logo text-uppercase">
                    {this.props.imglight === true ? (
                      <img
                        src={logolight}
                        alt=""
                        className="logo-light"
                        height="40"
                      />
                    ) : (
                      <img
                        src={logodark}
                        alt=""
                        className="logo-dark"
                        height="40"
                      />
                    )}
                  </Link>
                </div>
              <div className="menu-extras">
                <div className="menu-item">
                  <Link
                    to="#"
                    onClick={this.toggleLine}
                    className={
                      this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                    }
                  >
                    <div className="lines">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </Link>
                </div>
              </div>
                <ScrollspyNav
                  scrollTargetIds={targetId}
                  scrollDuration="300"
                  headerBackground="false"
                  activeNavClass="active"
                >
                  <div
                    id="navigation"
                    style={{ display: this.state.isOpen ? "block" : "none" }}
                  >
                    <ul className="navigation-menu">
                      {this.state.navItems.map((item, key) => (
                        <li
                          key={key}
                          className={item.navheading === "Home" ? "active" : ""}
                        >
                          <a href={"#" + item.idnm}> {item.navheading}</a>
                        </li>
                      ))}
                      <li><Link to="/login" >Login</Link></li>
                      <li><Button href="/register" size="small" variant="contained" color="error" >Sign Up</Button></li>
                    </ul>
                  </div>
                </ScrollspyNav>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
