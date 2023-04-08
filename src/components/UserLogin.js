import { useState } from "react";
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
//import { Container, Row, Col } from "react-bootstrap";
import { auth } from "../firebase_setup/firebase";

function UserLoginPage() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail,
                registerPassword
                );
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail,
                loginPassword
                );
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div className="userForm">
            
                <div className="registration">
                    <h3>New User: Register</h3>
                    <input
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input
                        placeholder="Password"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />

                    <button onClick={register}>Create User</button>
                </div>

                <div className="login">
                    <h3>Returning User - Login</h3>
                    <input
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <input
                        placeholder="Password"
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                    <button onClick={login}>Login</button>
                </div>

                <h4>User Logged In:</h4>
                {user?.email}

                <button onClick={logout}>Sign Out</button>
            
        </div>
    )
};

export default UserLoginPage;