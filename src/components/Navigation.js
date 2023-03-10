import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Expertise from "./Expertise";
import Process from "./Process";
import Services from "./Services";
import FAQ from "./FAQ";
import Blog from "./Blog";
import Reviews from "./Reviews";
import Careers from "./Careers";
import Contact from "./Contact";


function Navigation() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
              <Nav.Link as={Link} to={"/expertise"}>Expertise</Nav.Link>
              <Nav.Link as={Link} to={"/process"}>Process</Nav.Link>
              <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
              <Nav.Link as={Link} to={"/faq"}>FAQ</Nav.Link>
              <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
              <Nav.Link as={Link} to={"/reviews"}>Reviews</Nav.Link>
              <Nav.Link as={Link} to={"/careers"}>Careers</Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/expertise" element={<Expertise/>} />
          <Route path="/process" element={<Process/>} />          
          <Route path="/services" element={<Services/>} />         
          <Route path="/faq" element={<FAQ/>} />         
          <Route path="/blog" element={<Blog/>} />       
          <Route path="/reviews" element={<Reviews/>} />         
          <Route path="/careers" element={<Careers/>} />          
          <Route path="/contact" element={<Contact/>} />       
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;