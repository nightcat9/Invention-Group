import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { TiLocation } from 'react-icons/ti';
import '../styles/Main.scss';
import handleSubmit from './handlesubmit';
import { findAllQuotes } from '../services/quotes';

import emailjs from 'emailjs-com';

function ContactPage() {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const res = await findAllQuotes()
            setQuotes([...res])

        }
        fetchData().catch(console.error)

    }, [quotes])

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    const [successMsg, setSuccessMsg] = useState("");

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };
    const onChangeProjectDescription = (e) => {
        setProjectDescription(e.target.value);
    }
    const onQuoteRequestSubmit = (e) => {
        e.preventDefault()
        var result = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            projectDescription: projectDescription,
            db: "quotes",
        };
        handleSubmit(result)

        emailjs.sendForm('service_cli5o0x', 'template_uhj2tqg', e.target, 'jiYzHhHjT-E0QIOyN')
            .then((result) => {
                console.log("Success!")
                setSuccessMsg("Thanks for your submission! You will receive an email!")
            }, (error) => {
                console.log(error.text);
                setSuccessMsg("Oh Bummer! Something went wrong!")
            });

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setProjectDescription("");
    }

    return (
        <Container fluid="md">
            <div className='main-content'>
                <Row>
                    <h1>Connect With Us Today</h1>
                </Row>
                <Row>
                    <Col md={12} lg={4}>
                        <h2>Contact Information</h2>
                        <p><AiFillPhone fontSize={26} /> 262-123-4567</p>
                        <p><AiFillMail fontSize={26} /> inventiongroup@gmail.com</p>
                        <p><TiLocation fontSize={26} /> 123 Graduation Lane<br />Waukesha, WI 53188</p>
                    </Col>
                    <Col md={12} lg={8}>
                        <div className='quote-form'>
                            <h2>Contact us for a quote</h2>
                            <div className='successMsg' style={{color:"#00755E", backgroundColor:"#98FB98"}}>{successMsg}</div>
                            <Form onSubmit={onQuoteRequestSubmit}>
                                <div className="form-display">
                                    <Row>
                                        <Col xs={12} lg={6}>
                                            <FormGroup>
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
                                        <Col xs={12} lg={6}>
                                            <FormGroup>
                                                <Input
                                                    className="lastName"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    value={lastName}
                                                    onChange={onChangeLastName}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} lg={6}>
                                            <FormGroup>
                                                <Input
                                                    name="to_email"
                                                    className="email"
                                                    type="email"
                                                    placeholder="email@example.com"
                                                    value={email}
                                                    onChange={onChangeEmail}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={12} lg={6}>
                                            <FormGroup>
                                                <Input
                                                    className="phoneNumber"
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    value={phoneNumber}
                                                    onChange={onChangePhoneNumber}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Input
                                                    className="projectDescription"
                                                    type="textarea"
                                                    placeholder="Give a quick overview of your project:"
                                                    value={projectDescription}
                                                    onChange={onChangeProjectDescription}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button type="submit" id="quoteRequestSubmit" style={{ background: "#fbb040" }}>
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        </div>

                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default ContactPage;