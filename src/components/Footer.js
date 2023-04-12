import '../styles/Main.css';
import FooterLogo from '../images/logo-option2.png';
import { Row, Col, Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <Container fluid="md">
                <Row>
                    <div className='footer-logo'>
                        <a href={"/"}><img src={FooterLogo} alt='The Invention Group Logo' width="50%" /></a>
                    </div>

                </Row>

                <div className='footer-nav'>
                    <Row className="justify-content-md-center">
                        <Col md={12} lg={2}>
                            <ul>
                                <li className='footer-nav'><Nav.Link as={Link} to={"/"}>Home</Nav.Link></li>
                                <li className='footer-nav'><Nav.Link as={Link} to={"/about"}>About Us</Nav.Link></li>
                                <li className='footer-nav'><Nav.Link as={Link} to={"/expertise"}>Expertise</Nav.Link></li>
                                <li className='footer-nav'><Nav.Link as={Link} to={"/process"}>Process</Nav.Link></li>
                                <li className='footer-nav'><Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link></li>
                            </ul>
                        </Col>
                        <Col md={12} lg={2}>
                            <ul>
                                <li className='footer-nav'><Nav.Link as={Link} to={"/faq"}>FAQ</Nav.Link></li>
                                <li className='footer-nav'><Nav.Link as={Link} to={"/reviews"}>Reviews</Nav.Link></li>
                                <li className='footer-nav'><Nav.Link as={Link} to={"/careers"}>Careers</Nav.Link></li>
                            </ul>
                        </Col>
                    </Row>
                </div>



            </Container>
        </div>
    );
}

export default Footer;