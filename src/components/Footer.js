import '../styles/Main.css';
import FooterLogo from '../images/logo-option2.png';
import { Row, Col, Container } from 'react-bootstrap';



function Footer() {
    return (
        <div className='footer'>
            <Container fluid="md">
                <Row>
                    <div className='footer-logo'>
                        <a href={"/home"}><img src={FooterLogo} alt='The Invention Group Logo' width="50%" /></a>
                    </div>

                </Row>
                <div className='footer-nav'>
                    <Row className="justify-content-md-center">
                        <Col md={12} lg={2}>
                            <ul>
                                <li className='footer-nav'><a href={"/home"}>Home</a></li>
                                <li className='footer-nav'><a href={"/about"}>About Us</a></li>
                                <li className='footer-nav'><a href={"/expertise"}>Expertise</a></li>
                                <li className='footer-nav'><a href={"/process"}>Process</a></li>
                                <li className='footer-nav'><a href={"/contact"}>Contact</a></li>
                            </ul>
                        </Col>
                        <Col md={12} lg={2}>
                            <ul>
                                <li className='footer-nav'><a href={"/faq"}>FAQ</a></li>
                                <li className='footer-nav'><a href={"/reviews"}>Reviews</a></li>
                                <li className='footer-nav'><a href={"/careers"}>Careers</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
}

export default Footer;