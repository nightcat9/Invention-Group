import Container from 'react-bootstrap/Container';
import '../styles/Main.scss';
import { Row, Col } from 'react-bootstrap';

function ProcessPage() {
    return (
        <Container fluid>
            <div className='main-content'>
                <Row>
                    <h1>Our Experts Will Tailor a Plan for Your Success</h1>
                </Row>
                <Row>
                    <Col>
                        <p>
                            While each invention is different, we recommend starting with the
                            following steps to begin the process of bringing your invention to market.
                        </p>
                        <h3>Step 1 - Contact The Invention Group</h3>
                        <p>
                            Review our website, give us a call, or request a free invention evaluation.
                            Ask any questions you have. We're happy to help get the process started.
                        </p>
                        <h3>Step 2 - Submit Your Idea</h3>
                        <p>
                            When you feel comfortable with the process, submit your idea to us through our
                            site, by fax or by mail.
                        </p>
                        <h3>Step 3 - Invention Evaluation</h3>
                        <p>
                            Once we receive your idea, our experts will evaluate it and provide you with a
                            complete marketability analysis. It will include our findings about the potential for
                            success with your product.
                        </p>
                        <h3>Step 4 - Contract</h3>
                        <p>
                            If our team accepts your invention, the next step is to come to terms on a contract
                            for bringing it to market. As the inventor, you will retain all ownership rights to your
                            invention.
                        </p>
                        <h3>Step 5 - Prepare and Present</h3>
                        <p>
                            Once we agree to a partnership, we need to spend some time becoming experts in
                            your product and industry. We’ll use this information to present your invention at
                            trade shows our networking partners and investors.
                        </p>
                        <h3>Step 6 - Buyout Agreement</h3>
                        <p>
                            After communicating with our partners, we’ll assist you with a buyout contract. The
                            company you decide to work with will work with you to manufacture and distribute
                            the product to your market.
                        </p>
                        <h3>Step 7 - Peace of Mind</h3>
                        <p>
                            The Invention Group will make sure that the partnership with the manufacturing
                            company runs smoothly and all royalties are paid on time.
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </Container>
    );
}

export default ProcessPage;