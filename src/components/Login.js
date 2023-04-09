import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthValue } from "./AuthContext";
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/forms.css';
import { Col, Container, Row } from 'react-bootstrap';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { currentUser } = useAuthValue()
  console.log(currentUser)
  const { setTimeActive } = useAuthValue()
  const navigate = useNavigate()
  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true)
              navigate('/verify-email')
            })
            .catch(err => alert(err.message))
        } else {
          navigate('/profile')
        }
      })
      .catch(err => setError(err.message))
  }

  return (

    <Container fluid="md">
      <div className='main-content'>
        <div className='center'>
          <div className='auth'>
            <Row>
              <Col md={4}>
                <h1>Log in</h1>
              </Col>
            </Row>
            {error && <div className='auth__error'>{error}</div>}
            <Row>
              <Col md={12} lg={6}>
                <form onSubmit={login} name='login_form'>
                  <input
                    type='email'
                    value={email}
                    required
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}
                    className='loginform' />

                  <input
                    type='password'
                    value={password}
                    required
                    placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}
                    className='loginform' />

                  <button type='submit' className='loginbtn'>Login</button>
                </form>
              </Col>
              <Col md={12} lg={6}>
                <h3>
                  Don't have an account?
                </h3>
                <p>
                  <Link to='/register'>Create one here</Link>
                </p>
              </Col>

            </Row>

          </div>
        </div>
      </div>
    </Container>

  )
}

export default Login