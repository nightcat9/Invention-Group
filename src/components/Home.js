import Container from 'react-bootstrap/Container';
import '../styles/Main.scss';
import { Row, Col } from 'react-bootstrap';
import SteamPunkGuy from '../images/steampunk-guy.jpg'

function HomePage() {
    return (
        <Container fluid>
            <div className='main-content'>
                <Row>
                    <h1>We Help Get Your New Idea Off the Ground</h1> 
                </Row>
                <Row>
                    <Col md={12} lg={6}>
                        <p>
                            If you have a new invention idea, our team can help you make sure that you are
                            very successful when it comes time to sell your new product. We have been 
                            consulting with inventors for over 30 years and we can make sure you are successful, too.
                        </p>
                        <p>
                            We find interested parties to fund your project.
                        </p>
                        <p>
                            We find companies to develop and distribute your invention.
                        </p>
                        <p>
                            We give you a generous royalty fee for all of your sales.
                        </p>
                        <h2>Our Guarantee</h2>
                        <p>
                            We'll put your invention through a thorough evaluation to make sure there's enough
                            interest and the product is ready for market. If our evaluation determines that your
                            invention is a viable product, you only pay us when we license a deal for you.
                        </p>
                        <p>
                            Click here to request your free invention evaluation.
                        </p>
                    </Col>
                    <Col md={12} lg={6}>
                        <img src={SteamPunkGuy} alt="man dressed in steampunk attire" className='steamPunkGuy' />
                    </Col>
                </Row>  
            </div>
        </Container>
        
    );
}

export default HomePage;