import React from 'react';
// import { Link } from 'react-router-dom';

function LoginInputs({setRegister, setEmail, setPassword, email, password, logincheck, setError, setIsLoading, clearInputs, clearErrors, handleLogin}) {

  // Checks for empty inputs, renders loading component, logs in.
  function submitLogin() {
    if (logincheck(email, password)) {
      setError('');
      // Only render loading component if desktop view.
      if(window.innerWidth > 1150) {
        setIsLoading(true);
        setTimeout(()=>{
          setIsLoading(false);
          handleLogin();
        }, 2500);
      } else {
        handleLogin();
      }
    }
  }

  return (
    <div className="login-div">
    <h2>SIGN IN</h2>
    <div className="input-div">
      <p>EMAIL</p>
      <input placeholder="example@example.com" onChange={e => setEmail(e.target.value)}></input>
      <p>PASSWORD</p>
      <input type="password" placeholder="********" onChange={e => setPassword(e.target.value)}></input>
      <div className="button-div">
        <a href="#" onClick={
                e => {
                    e.preventDefault();
                    submitLogin();
                                  }}>LOGIN</a>
        <a href="#" onClick={()=>{setRegister(true); clearInputs(); clearErrors()}} className="register">REGISTER</a>
        </div>
    </div>
    <p>Forgot your details? <span><a href="#">Reset your password</a>.</span></p>
    </div>
  );
}

export default LoginInputs;