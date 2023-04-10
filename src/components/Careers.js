import Container from 'react-bootstrap/Container';
import '../styles/Main.scss';
import { Row, Accordion } from 'react-bootstrap';

function CareersPage() {

    return (

        <Container fluid="md">
            <div className='main-content'>
                <Row>
                    <h1>The Invention Group &mdash; Career Opportunities</h1>
                </Row>
                <Row>
                    <div className='jobs-background'>
                        <Accordion>
                        <Accordion.Item eventKey="0" className='job-list'>
                            <Accordion.Header>Patent Protection</Accordion.Header>
                            <Accordion.Body>
                                No jobs available right now.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='job-list'>
                            <Accordion.Header>Development</Accordion.Header>
                            <Accordion.Body>
                            No jobs available right now.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='job-list'>
                            <Accordion.Header>Model Making</Accordion.Header>
                            <Accordion.Body>
                            No jobs available right now.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='job-list'>
                            <Accordion.Header>Licensing</Accordion.Header>
                            <Accordion.Body>
                            No jobs available right now.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='job-list'>
                            <Accordion.Header>Sourcing</Accordion.Header>
                            <Accordion.Body>
                            No jobs available right now.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='job-list'>
                            <Accordion.Header>Branding</Accordion.Header>
                            <Accordion.Body>
                                No jobs available right now.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                    
                </Row>
                <Row>

                </Row>
            </div>
        </Container>
    );
}

export default CareersPage;