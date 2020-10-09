import React, {useState, useEffect} from 'react';
import '../styles/Login.css';
import fire from '../fire';
import RegisterInputs from './RegisterInputs';
import LoginInputs from './LoginInputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faUniregistry} from '@fortawesome/free-brands-svg-icons'
import preload from '../components/preload.png';

export default function SignIn() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [credErr, setCredErr] = useState('');
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Clears input fields
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  // Clears UI error messages
  const clearErrors = () => {
    setError('');
  }

  // Returns true if login fields are false, else false.
  const logincheck = (email, password) => {
      if (email === "" || password === "") {
        setError('Please fill out all required fields.');
        return false;
      } else if (!email.includes('@')) {
        setError('Please enter a valid email.');
        return false;
      } else {return true;}
  }

  // Sign in
  const handleLogin = () => {
    clearErrors();
   fire.auth().signInWithEmailAndPassword(email, password).catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
          setError(err.message);
          break;
        case "auth/user-disabled":
          setError(err.message);
          break;
        case "auth/user-not-found":
          setError(err.message);
          break;
        case "auth/wrong-password":
          setError(err.message);
          break;
      }
    });
  }

  // Sign up
  const handleSignup = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
          setError(err.message);
          break;
        case "auth/invalid-email":
          setError(err.message);
          break;
        case "auth/weak-password":
          setError(err.message);
          break;
      }
    });
  }

  // Log Out
  const handleLogout = () => {
    fire.auth().signOut();
    setUser("");
  }

  // Listener for user signup/signin
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
    if(user) {
      clearInputs();
      setUser(user);
    } else {
      setUser("");
    }
  });
}

  useEffect(() => {
    authListener();
  },[]);

  return (
    <div className="login">
      <div className="login-left">
        <div className="mob-logo-div">
          <div className="mob-circle">
            <div className="mob-icon">
              <FontAwesomeIcon icon={faReact} className="react" />
            </div>
          </div>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <div className="circle">
          <img src="https://shellsoftware.net/wp-content/uploads/2020/06/shell_hwid_spoofer_pro.png"/>
        </div>
      {
      register ?
        (
          user ?
          <div className="is-user">
            <h3>SIGNED IN!</h3>
            <hr></hr>
            <p>Thank you for trying out react-auth.<br></br>More to come here soon!</p>
            <div className="button-div">
            <a href="#" onClick={
                e => {
                    e.preventDefault();
                    handleLogout();
                }}>SIGN OUT</a>
          </div>
          </div>
          :
          <RegisterInputs setRegister={setRegister} setEmail={setEmail} setPassword={setPassword} email={email} password={password} logincheck={logincheck} setError={setError} setIsLoading={setIsLoading} clearInputs={clearInputs} clearErrors={clearErrors} handleSignup={handleSignup}/>
        )
        :
        (
          user ?
          <div className="is-user">
            <h3>SIGNED IN!</h3>
            <hr></hr>
            <p>Thank you for trying out react-auth.<br></br>More to come here soon!</p>
            <div className="button-div">
            <a href="#" onClick={
                e => {
                    e.preventDefault();
                    handleLogout();
                }}>SIGN OUT</a>
          </div>
          </div>
          :
          <LoginInputs setRegister={setRegister} setEmail={setEmail} setPassword={setPassword} email={email} password={password} logincheck={logincheck} setError={setError} setIsLoading={setIsLoading} clearInputs={clearInputs} clearErrors={clearErrors} handleLogin={handleLogin}/>
        )
        }
      </div>
      <div className="login-right">
          <div className="login-intro">
            {
              isLoading ? 
              <div className="loader">
                <img src={preload} alt="preload"/>
                <p>VERIFYING YOUR CREDENTIALS...</p>
              </div>
              :
              <div>
                <p className="welcome">WELCOME TO</p>
                <h2>react-authentication</h2>
                <hr></hr>
                <p className="cta">Developed & Designed by Dan Milisits</p>
              </div>
            }
          </div>
        <div className="circle">
          <FontAwesomeIcon icon={faReact} className="react" />
        </div>
      </div>
    </div>
  );
}