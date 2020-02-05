import React, {useState, useEffect} from 'react';
import auth0Client from "./Auth";
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

// useEffect(() => {
//   if (localStorage.getItem("Id_token")) {
//     auth0Client.signIn();
//   }
// }, [])

  const toggle = () => setIsOpen(!isOpen);


  const signOut = () => {
    auth0Client.signOut();
    this.props.history.replace("/");
  };

  if (auth0Client.isAuthenticated()) {
    return (
      <div className="divNav">
        <Navbar color="white" light expand="md" className="navStyle">
          <img
            className="mr-5"
            src="https://uxmasters.org/images/merch_logo_50.svg"
          />
          <NavbarBrand id="navTitle" href="/">
            Merch Dropper
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <FormGroup className="searchStyle pt-3">
                  <Input
                    className="rounded-pill"
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="Search... "
                  />
                </FormGroup>
              </NavItem>
            </Nav>
            <Button color="primary" href="/" className="designBtn">
              Design Merch
            </Button>{" "}
            <Button className="ml-5" outline color="primary" href="/">
              Buy Merch
            </Button>{" "}
          </Collapse>
        </Navbar>
      </div>
    );
  }
  else {
    return (
      <div class="divNav">
        <h1>Nothing here...</h1>
        <Navbar color="white" light expand="md" className="navStyle">
          <img
            className="mr-5"
            src="https://uxmasters.org/images/merch_logo_50.svg"
          />
          <NavbarBrand id="navTitle" href="/">
            Merch Dropper
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <FormGroup className="searchStyle pt-3">
                  <Input
                    className="rounded-pill"
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="Search... "
                  />
                </FormGroup>
              </NavItem>
            </Nav>
            <Button color="primary" href="/" className="designBtn">
              Design Merch
            </Button>{" "}
            <Button className="ml-5" outline color="primary" href="/">
              Buy Merch
            </Button>{" "}
            <Button className="ml-5" onClick={auth0Client.signIn}>
              Sign In
            </Button>
            <Button className="ml-5" onClick={auth0Client.signOut}>
              Sign Out
            </Button>
          </Collapse>
        </Navbar>
      </div>
    );
  }
    }
    
    export default NavBar;