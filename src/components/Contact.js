import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { TiLocation } from 'react-icons/ti';
import '../styles/Main.scss';
import handleSubmit from './handlesubmit';
import { findAllQuotes } from '../services/quotes';

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
    const [projectDescription, setProjectDescription] =  useState("");

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
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setProjectDescription("");
    }

    return (
        <div className='notAnotherDiv'>
            <Container fluid>
                <div className='main-content'>
                    <Row>
                        <h1>Connect With Us Today</h1>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Contact Information</h2>
                            <p><AiFillPhone fontSize={26} /> 262-123-4567</p>
                            <p><AiFillMail fontSize={26} /> inventiongroup@gmail.com</p>
                            <p><TiLocation fontSize={26} /> 123 Graduation Lane<br />Waukesha, WI 53188</p>
                        </Col>
                        <Col>
                            <Form onSubmit={onQuoteRequestSubmit}>
                                <div className="form-display">
                                    <Row>
                                        <Col md={12} lg={6}>
                                            <FormGroup>
                                                <Label for="firstName">* First Name</Label>
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
                                                <Label for="lastName">* Last Name</Label>
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
                                        <Col md={12} lg={6}>
                                            <FormGroup>
                                                <Label for="email">* Email</Label>
                                                <Input
                                                    className="email"
                                                    type="email"
                                                    placeholder="email@example.com"
                                                    value={email}
                                                    onChange={onChangeEmail}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={12} lg={6}>
                                            <FormGroup>
                                                <Label for="phoneNumber">* Phone Number</Label>
                                                <Input
                                                    className="phoneNumber"
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    value={phoneNumber}
                                                    onChange={onChangePhoneNumber}
                                                    required
                                                />
                                            </FormGroup>
                                            <hr />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="projectDescription">Give a quick overview of your project:</Label>
                                                <Input
                                                    className="projectDescription"
                                                    type="textarea"
                                                    placeholder=""
                                                    value={projectDescription}
                                                    onChange={onChangeProjectDescription}
                                                    required
                                                />
                                            </FormGroup>
                                            <hr />
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
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    );
}

export default ContactPage;