import { useState } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  Input
} from "reactstrap";
import handleSubmit from './handlesubmit';
import StarRating from "./StarRating";

export default function FormComponent() {
  const [reviewTitle, setReviewTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  //const [stars, setStars] = useState("");

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

  /* const onChangeStars = (e: any) => {
    var starNum = e.target.value;
    if (starNum > 5) {
      starNum = 5;
    }
    if (starNum < 1) {
      starNum = 1;
    }
    setStars(starNum);
  }*/

  const onSubmit = (e: any) => {
    console.log("Form Submitted");
  };
  const submithandler = (e) => {
    e.preventDefault()
    var reviewDate = new Date();
    var result = {
      reviewTitle: reviewTitle,
      //stars: stars,
      firstName: firstName,
      lastName: lastName,
      comment: comment,
      reviewDate: reviewDate,
    }
    handleSubmit(result)
    setReviewTitle("");
    //setStars("");
    setFirstName("");
    setLastName("");
    setComment("");
  }

  return (
    <div className="form-container">
      <Form onSubmit={submithandler}>
        <div className="form-display">
          <StarRating />
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
              <Input
                /*className="rating"
                type="number"
                placeholder="Star Rating"
                value={stars}
                onChange={onChangeStars}
                required*/
              />
            </Col>
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