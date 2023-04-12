import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import Logo from './components/Logo.js';
import Footer from './components/Footer.js';

import { useState, useEffect } from 'react';
import { auth } from './firebase_setup/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import Home from "./components/Home";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Careers from "./components/Careers";
import Disclosure from "./components/Disclosure";
import Contact from "./components/Contact";
import Login from './components/Login';
import Register from './components/Register';
import VerifyEmail from './components/VerifyEmail';
import Profile from './components/Profile';

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className="App">
      <Logo />
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Navigation />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/process" element={<Process />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/verify-email' element={<VerifyEmail />} />

          </Routes>
          <Footer />
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
