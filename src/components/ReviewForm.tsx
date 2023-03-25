import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
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
      db: "review",
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
          <FormGroup>
            <Label for="rating">Rating</Label>
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
          </FormGroup>
          <hr />
          <FormGroup>
            <Label for="reviewTitle">Add a Headline</Label>
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
          </FormGroup>
          <hr />
          <Row>
            <Col md={12} lg={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  className="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={onChangeFirstName}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={12} lg={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  className="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={onChangeLastName}
                  required
                />
              </FormGroup>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="comment">Add a Written Review</Label>
                <Input
                  className="comment"
                  type="textarea"
                  placeholder="What did you like or dislike about our services?"
                  value={comment}
                  onChange={onChange}
                  required
                />
              </FormGroup>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit" id="reviewSubmit" style={{ background: "#fbb040" }}>
                Submit
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
}