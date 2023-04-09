import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/forms.css';

import { auth } from '../firebase_setup/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useAuthValue } from './AuthContext';
import { Container, Row, Col } from 'react-bootstrap';

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setTimeActive } = useAuthValue();


  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true)
              navigate('/verify-email')
            }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <Container fluid="md">
      <div className='main-content'>
        <div className='center'>
          <div className='auth'>
            <Row>
              <Col md={4}>
                <h1>Register</h1>
              </Col>
            </Row>
            {error && <div className='auth__error'>{error}</div>}
            <Row>
              <Col md={12} lg={6}>
                <form onSubmit={register} name='registration_form'>
                  <input
                    type='email'
                    value={email}
                    placeholder="Enter your email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    className='registerform' />

                  <input
                    type='password'
                    value={password}
                    required
                    placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}
                    className='registerform' />

                  <input
                    type='password'
                    value={confirmPassword}
                    required
                    placeholder='Confirm password'
                    onChange={e => setConfirmPassword(e.target.value)}
                    className='registerform' />

                  <button type='submit' className='registerbtn'>Register</button>
                </form>
              </Col>
              <Col md={12} lg={6}>
                <h3>
                  Already have an account?
                </h3>
                <p>
                  <Link to='/login'>login</Link>
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>

  )
}

export default Register