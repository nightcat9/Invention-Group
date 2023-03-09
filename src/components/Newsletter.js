import Container from 'react-bootstrap/Container';
import '../styles/Newsletter.css';
import { Row, Col } from 'react-bootstrap';
import Body from './Reviews.tsx';
import FormComponent from './ReviewForm.tsx';

function NewsletterPage() {
    return (
        <Container fluid>
            <div className='newsletterPage'>
                <Row>
                    <Col>
                        <h1>Signup</h1>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
                <Row>
                    <Body />
                    <FormComponent />
                </Row>
            </div>
        </Container>
        
    );
}

export default NewsletterPage;