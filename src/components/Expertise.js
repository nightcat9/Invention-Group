import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SteamBike from '../images/steam-bike-rendered.jpg';
import SpaceTravel from '../images/space-travel-rendered.jpg';
import '../styles/Main.scss';

function ExpertisePage() {
    return (
        <Container fluid="md">
            <div className='main-content'>
                <Row>
                    <h1>Use Our 30 Years of Experience to Drive Your Success</h1>
                </Row>
                <Row>
                    <Col md={12} lg={7}>

                        <p>
                            The Invention Group has backed hundreds of new inventions. We have stacked our
                            reputation on those new ideas and we'll do the same for you.
                        </p>
                        <p>
                            Our staff includes researchers, designers, writers, attorneys, engineers, marketing and
                            promotion folks, video producers, drafters, industrial designers, and manufacturers. We have
                            only one gole - to make you successful. We only get paid when you get paid.
                        </p>
                        <h2>Tailored Plans</h2>
                        <p>
                            The reason we employ such a variety of talent is to make sure we can create a tailored plan for your
                            invention to go to market. Every invention we support serves a different marketand incorporates its own unique
                            aspects. We can't and we won't put you through the same process as the last inventor.
                        </p>
                    </Col>
                    <Col md={12} lg={5}>
                        <img src={SpaceTravel} alt="Spaceship" className='spaceship' />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12} lg={5}>
                        <img src={SteamBike} alt="Steam powered bike" className='steamBike' />
                    </Col>
                    <Col md={12} lg={7}>
                        <h2>Our Promise</h2>
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
                            If you are ready to begin, <a href={"/contact"}>click here to request your free invention evaluation.</a>
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default ExpertisePage;