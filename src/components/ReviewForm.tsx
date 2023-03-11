import { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import handleSubmit from './handlesubmit';

export default function FormComponent() {
  const [reviews, setReviews] = useState("");
  const [firstName, setFirstName] = useState("");
  const onChange = (e: any) => {
    setReviews(e.target.value);
  };
  const onChangeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  const onSubmit = (e: any) => {
    console.log("Form Submitted");
  };
  const submithandler = (e) => {
        e.preventDefault()
        var result = {
          firstName : firstName,
          reviews : reviews,
          
        }
        handleSubmit(result)
        setFirstName("")
      }
    

  return (
    <div className="form-container">
      <Form onSubmit={submithandler}>
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
          placeholder="enter you reviews"
          value={reviews}
          onChange={onChange}
        />
        
        <Button type="submit" style={{ background: "Green" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}