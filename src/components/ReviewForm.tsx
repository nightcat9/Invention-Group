import { useState } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  Input
} from "reactstrap";
import handleSubmit from './handlesubmit';
import '../styles/StarRating.css';

export default function FormComponent() {
  const [reviewTitle, setReviewTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const onChangeReviewTitle = (e: any) => {
    setReviewTitle(e.target.value);
  };
  const onChangeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e: any) => {
    setLastName(e.target.value);
  };
  const onChange = (e: any) => {
    setComment(e.target.value);
  };

  const onSubmit = (e: any) => {
    console.log("Form Submitted");
  };
  const submithandler = (e) => {
    e.preventDefault()
    var reviewDate = new Date();
    var result = {
      reviewTitle: reviewTitle,
      firstName: firstName,
      lastName: lastName,
      comment: comment,
      reviewDate: reviewDate,
      stars: rating,
    }
    handleSubmit(result)
    setReviewTitle("");
    setFirstName("");
    setLastName("");
    setComment("");
    setRating(0);
  }

  return (
    <div className="form-container">
      <Form onSubmit={submithandler}>
        <div className="form-display">
        <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
          <Input
            className="form-review-title"
            type="text"
            name="text"
            id="reviewTitle"
            placeholder="Review Title"
            value={reviewTitle}
            onChange={onChangeReviewTitle}
            required
          />
          <Row>
            <Col>
              <Input
                className="firstName"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={onChangeFirstName}
                required
              />
            </Col>
            <Col>
              <Input
                className="lastName"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={onChangeLastName}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
            <Input
              className="comment"
              type="textarea"
              placeholder="Enter your review comment"
              value={comment}
              onChange={onChange}
              required
            />
            </Col>
            
          </Row>
          <Row>
            <Col>
              <Button type="submit" style={{ background: "Green" }}>
                Submit
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
}