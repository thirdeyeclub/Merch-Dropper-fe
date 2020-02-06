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

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(auth0Client.getProfile());
  }, []);

    async function profileSignIn() {
      auth0Client.signIn();
      await auth0Client.getProfile();
    }
  

  const signOut = () => {
    auth0Client.signOut();
    this.props.history.replace("/");
  };

  if (!localStorage.getItem("Id_token")) {
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
            <Button className="ml-5 mr-5" onClick={profileSignIn}>
              Sign In
            </Button>
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
            <Button className="ml-5" onClick={signOut}>
              Sign Out
            </Button>
          </Collapse>
        </Navbar>
      </div>
    );
  }
    }
    
    export default NavBar;