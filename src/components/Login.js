import { useState } from 'react';
import { Button } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import handleSubmit from './handlesubmit';

function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onRegistrationSubmit = (e) => {
        e.preventDefault()
        var result = {
            username: username,
            password: password,
            db: "users",
        };
        handleSubmit(result);
        setUsername("");
        setPassword("");
        setShowRegister(false);
    };
    return (
        <div className="loginPage">
            {isLoggedIn ? (
                <div>This is logged in!</div>
            ) : (
                <div>

                    {showRegister ? (
                        <Form onSubmit={onRegistrationSubmit}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    className="password"
                                    type="text"
                                    placeholder="Password"
                                    value={password}
                                    onChange={onChangePassword}
                                    required
                                />
                            </FormGroup>
                            <Button type="submit" id="registrationSubmit" style={{ background: "#fbb040" }}>
                                Submit
                            </Button>
                        </Form>
                    ) : (
                        <div><Button as="button" type="submit" value="Login">Login</Button>
                            <Button as="button" type="reset" value="Register"
                                onClick={() => setShowRegister(true)}>Register</Button></div>

                    )}

                </div>

            )}
        </div>

    );
}

export default LoginPage;