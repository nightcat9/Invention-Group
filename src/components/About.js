import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Camera from '../images/camera-rendered.jpg';
import '../styles/Main.scss';


function AboutPage() {
    return (
        <Container fluid="md">
            <div className='main-content'>
                <Row>
                    <h1>We Make Sure Your New Invention Is Successful</h1>
                </Row>
                <Row>
                    <Col md={12} lg={7}>
                        <p>
                            The Invention Group has helped hundreds of individuals bring their inventions
                            to market. Our role doesn't end once the product evaluation is done. We'll help you
                            with any and all of the following aspects of your project:
                        </p>
                        <ul>
                            <li>Negotiating a license</li>
                            <li>Market research</li>
                            <li>Presenting your invention</li>
                            <li>Obtaining a patent</li>
                            <li>Drawings and computer renderings</li>
                            <li>Completing development</li>
                            <li>Marketing your product</li>
                        </ul>
                        <p>
                            The Invention Group is the largest inventor support company in the United States.
                            We have been assisting individuals with their invention ideas for over 30 years.
                        </p>
                        <p>
                            Our staff of over 100 researchers, designers, writers, and customer service representatives
                            will treat you like a business partner, not a customer.
                        </p>
                        <p>
                            We maintain the largest network of sales offices in the country. We'll use those
                            connections to drive sales through the roof!
                        </p>
                        <p>
                            Lets get started! <a href={"/Invention-Group/contact"}>Click here to request your free invention evaluation.</a>
                        </p>
                    </Col>
                    <Col md={12} lg={5}>
                        <img src={Camera} alt="old fashioned camera with photos and leather bag" className='camera' />
                    </Col>
                </Row>
                <Row>

                </Row>
            </div>
        </Container>
    );
}

export default AboutPage;