import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/Newsletter.css';
import { Row, Col } from 'react-bootstrap';
import Review from './Review.tsx';
import FormComponent from './ReviewForm.tsx';
import { findAll } from '../services/reviews';

function NewsletterPage() {

    const [reviews, setReviews] = useState([]);
    const fetchData = async () => {

        const res = await findAll()

        setReviews([...res])
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                    { reviews.map((review, index) => (
                        <Review key={index}
                                firstName={review.firstName}
                                lastName={review.lastName}
                                reviewTitle={review.reviewTitle}
                                comment={review.comment}
                                stars={+review.stars} />
                    )) }
                </Row>
                <Row>
                    <FormComponent />
                </Row>
            </div>
        </Container>
        
    );
}

export default NewsletterPage;