import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import handleSubmit from './handlesubmit';
import { findAllUsers } from '../services/users';

function LoginPage() {
    // This is for handling local storage
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const res = await findAllUsers()
            setUsers([...res])
            var memberName = localStorage.getItem("username");
            var memberPass = localStorage.getItem("password");
            // console.log(memberName)
            // console.log(memberPass)
            // console.log(users)
            setIsLoggedIn(users.some(user => user.username === memberName &&
                user.password === memberPass))

        }
        fetchData().catch(console.error)

    }, [users])

    // Useful variables 
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Useful functions
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
    const onLoginSubmit = (e) => {
        e.preventDefault()
        if (users.some(user => user.username === username && user.password === password)) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            setIsLoggedIn(true)
        } else {
            setShowLogin(false);
        }
    };
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        setIsLoggedIn(false);
    };
    return (
        <div className="loginPage">
            {isLoggedIn ? (
                <div>Hello {localStorage.getItem("username")}!
                    <Button as="button" type="submit" value="Logout"
                        onClick={handleLogout}>Logout</Button>
                </div>
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
                                    type="password"
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
                        <div>
                            {showLogin ? (
                                <Form onSubmit={onLoginSubmit}>
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
                                    <Button type="submit" id="loginSubmit" style={{ background: "#fbb040" }}>
                                        Login
                                    </Button>
                                </Form>
                            ) : (
                                <div>
                                    <Button as="button" type="submit" value="Login"
                                        onClick={() => setShowLogin(true)}>Login</Button>
                                    <Button as="button" type="reset" value="Register"
                                        onClick={() => setShowRegister(true)}>Register</Button>
                                </div>
                            )}
                        </div>
                    )}

                </div>

            )}
        </div>

    );
}

export default LoginPage;