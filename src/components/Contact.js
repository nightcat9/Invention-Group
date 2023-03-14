import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import '../styles/Main.scss';

function ContactPage() {
    return (
        <div className='main-content'>
            <Container fluid>
                <Row>
                    <h1>Connect With Us Today</h1>
                </Row>
            </Container>
        </div>
    );
}

export default ContactPage;