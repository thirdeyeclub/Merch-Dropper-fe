import React, {useState} from 'react';
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

  return (
    <div class="divNav">
      <Navbar color="white" light expand="md" className="navStyle">
        <img className="mr-5" src="https://uxmasters.org/images/merch_logo_50.svg" />
        <NavbarBrand id="navTitle" href="/">Merch Dropper</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <FormGroup className="searchStyle pt-3">
              <Input className="rounded-pill"
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="Search... "
              />
            </FormGroup>
            </NavItem>

          </Nav>
            <Button color="primary" href="/" className="designBtn">Design Merch</Button>{' '}
            <Button className="ml-5" outline color="primary" href="/">Buy Merch</Button>{' '}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;