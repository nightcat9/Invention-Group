import '../styles/Profile.css';
import { useAuthValue } from './AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase_setup/firebase';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Profile() {
  const { currentUser } = useAuthValue()

  return (
    <Container fluid="md">
      <div className='main-content'>
        <div className='center'>
          <div className='profile'>
            <Row>
              <h1>Welcome!</h1>
            </Row>
            <Row>
              <h6>Thank You for Creating an Account With The Invention Group!</h6>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <div className='userInfo'>
                  <p><strong>Email: </strong>{currentUser?.email}</p>
                  <p>
                    <strong>Email verified: </strong>
                    {`${currentUser?.emailVerified}`}
                  </p>
                  <p>
                    <Link to='/login'>
                      <button onClick={() => signOut(auth)} className='signoutbtn'>Sign Out</button>
                    </Link>
                  </p>
                </div>

              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>

  )
}

export default Profile