import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import handleSubmit from './handlesubmit';

export default function FormComponent() {
  const [reviewTitle, setReviewTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState("");

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
  const onChangeStars = (e: any) => {
    setStars(e.target.value);
  }

  const onSubmit = (e: any) => {
    console.log("Form Submitted");
  };
  const submithandler = (e) => {
        e.preventDefault()
        var result = {
          reviewTitle : reviewTitle,
          stars : stars,
          firstName : firstName,
          lastName : lastName,
          comment : comment,
        }
        handleSubmit(result)
        setReviewTitle("");
        setStars("");
        setFirstName("");
        setLastName("");
        setComment("");
      }
    
  return (
    <div className="form-container">
      <Form onSubmit={submithandler}>
        <div className="form-display">
          <FormGroup>
          <Label for="reviewTitle" hidden>Review Title</Label>
          <Input
          className="form-review-title"
          type="text"
          name="text"
          id="reviewTitle"
          placeholder="Review Heading"
          value={reviewTitle}
          onChange={onChangeReviewTitle}
        />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Input
          className="reviews-form"
          type="number"
          placeholder="Star Rating"
          value={stars}
          onChange={onChangeStars}
        />
        <Input
          className="reviews-form"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={onChangeFirstName}
        />
        <Input
          className="reviews-form"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={onChangeLastName}
        />
        <Input
          className="reviews-form"
          type="text"
          placeholder="enter your review"
          value={comment}
          onChange={onChange}
        />
        
        <Button type="submit" style={{ background: "Green" }}>
          Submit
        </Button>
        </div>
      
      </Form>
    </div>
  );
}