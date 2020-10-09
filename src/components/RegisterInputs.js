import React, {useState} from 'react';

function RegisterInputs({setRegister, setEmail, setPassword, email, password, logincheck, setError, setIsLoading, clearInputs, clearErrors, handleSignup}) {

  // Checks for empty inputs, renders loading component, registers.
  function submitRegister() {
    if (logincheck(email, password)) {
      setError('');
      // Only render loading component if desktop view.
      if(window.innerWidth > 1150) {
        setIsLoading(true);
        setTimeout(()=>{
          setIsLoading(false);
          handleSignup();
        }, 2500);
      } else {
        handleSignup();
      }      
    }
  }

  return (
    <div className="login-div">
    <h2 id="reg">REGISTER</h2>
    <div className="input-div">
      <p>EMAIL</p>
      <input placeholder="example@example.com" onChange={e => setEmail(e.target.value)}></input>
      <p>PASSWORD</p>
      <input type="password" placeholder="*******" onChange={e => setPassword(e.target.value)}></input>
      <div className="button-div">
        <a href="#" onClick={()=>{setRegister(false); clearInputs(); clearErrors()}}>BACK</a>
        <a href="#" onClick={()=>submitRegister()} className="register">SUBMIT</a>
      </div>
    </div>
    </div>
  );
}

export default RegisterInputs;