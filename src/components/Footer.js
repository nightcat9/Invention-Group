import '../styles/Main.css';
import FooterLogo from '../images/logo-option2.png';
import { Row, Col, Container } from 'react-bootstrap';

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
                                <li className='footer-nav'><a href="/Invention-Group/">Home</a></li>
                                <li className='footer-nav'><a href="/Invention-Group/about">About Us</a></li>
                                <li className='footer-nav'><a href="/Invention-Group/expertise">Expertise</a></li>
                                <li className='footer-nav'><a href="/Invention-Group/process">Process</a></li>
                                <li className='footer-nav'><a href="/Invention-Group/contact">Contact</a></li>
                            </ul>
                        </Col>
                        <Col md={12} lg={2}>
                            <ul>
                                <li className='footer-nav'><a href="/Invention-Group/faq">FAQ</a></li>
                                <li className='footer-nav'><a href="/Invention-Group/reviews">Reviews</a></li>
                                <li className='footer-nav'><a href="/Invention-Group/careers">Careers</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                
                

            </Container>
        </div>
    );
}

export default Footer;