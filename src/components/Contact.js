import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import '../styles/Main.scss';

function ContactPage() {
    return (
        <Container fluid="md">
            <div className='main-content'>
                <Row>
                    <h1>Connect With Us Today</h1>
                </Row>
            </div>
        </Container>
    );
}

export default ContactPage;