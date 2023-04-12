import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { BsPersonFill } from "react-icons/bs";


import { Link } from "react-router-dom";

function Navigation() {

  return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                <Nav.Link as={Link} to={"/expertise"}>Expertise</Nav.Link>
                <Nav.Link as={Link} to={"/process"}>Process</Nav.Link>
                <NavDropdown title="Resources" id="nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/faq"}>FAQ</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/reviews"}>Reviews</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/careers"}>Careers</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/disclosure"}>Disclosure</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
                <Nav.Link as={Link} to={"/login"}><BsPersonFill fontSize={26} /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default Navigation;