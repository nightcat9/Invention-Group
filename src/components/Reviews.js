import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/Reviews.css';
import '../styles/Main.scss';
import { Row, Col } from 'react-bootstrap';
import Review from './Review.tsx';
import FormComponent from './ReviewForm.tsx';
import { findAll } from '../services/reviews';

function ReviewsPage() {
    const [reviews, setReviews] = useState([]);
    const fetchData = async () => {

        const res = await findAll()

        setReviews([...res])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='notAnotherDiv'>
            <Container fluid="md">
            <div className='main-content'>
                <Row>
                    <h1>Have You Worked With Us? Rate Your Experience!</h1>
                </Row>
                <Row>
                    <FormComponent />
                </Row>
                <Row>
                    {reviews.map((review, index) => (
                        <Review key={index}
                            firstName={review.firstName}
                            lastName={review.lastName}
                            reviewTitle={review.reviewTitle}
                            comment={review.comment}
                            stars={+review.stars}
                            reviewDate={review.reviewDate}
                        />
                    ))}
                </Row>
            </div>
        </Container>
        </div>
        

    );
}

export default ReviewsPage;