import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import PocketWatch from '../images/pocketWatch.jpg';
import '../styles/Expertise.css';

function ExpertisePage() {
    return (
        <Container fluid>
            <div className='expertisePage'>
                <Row>
                    <Col>
                        <h1>Use Our 30 Years of Experience to Drive Your Success</h1>
                        <p>
                            The Invention Group has backed hundreds of new inventions. We have stacked our
                            reputation on those new ideas and we'll do the same for you.
                        </p>
                        <p>
                            Our staff includes researchers, designers, writers, attorneys, engineers, marketing and
                            promotion folks, video producers, drafters, industrial designers, and manufacturers. We have
                            only one gole - to make you successful. We only get paid when you get paid.
                        </p>
                        <h3>Tailored Plans</h3>
                        <p>
                            The reason we employ such a variety of talent is to make sure we can create a tailored plan for your
                            invention to go to market. Every invention we support serves a different marketand incorporates its own unique
                            aspects. We can't and we won't put you through the same process as the last inventor.
                        </p>
                        <h3>Our Promise</h3>
                        <p>
                            We are not another invention marketing company. We do not accept every invention idea. Our rigorous evaluation
                            process weeds out the ideas that have little potential for success. We focus on those inventions that have the
                            most potential.
                        </p>
                        <p>
                            Our experts will provide you with a complete marketability analysis that outlines potential pitfalls, costs to develop,
                            market interest, and next steps. You will have all of the tools you need to bring your product to market and we'll help
                            you get it done.
                        </p>
                        <p>
                            If you are ready to begin, click here to request your free invention evaluation.
                        </p>
                    </Col>
                    <Col>
                        <img src={PocketWatch} alt="Pocket Watch" className='pocketWatch' />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default ExpertisePage;