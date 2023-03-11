import Container from 'react-bootstrap/Container';
import '../styles/Newsletter.css';
import { Row, Col } from 'react-bootstrap';
import Review from './Review.tsx';
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
                    <Review />
                    <FormComponent />
                </Row>
            </div>
        </Container>
        
    );
}

export default NewsletterPage;