import React from 'react';
import './login.css'

function LoginForm() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here
  };

  return (
    <div className="main1">
      <h2 className="Modal">Create your account</h2>
      <p>welcome back</p>

      <button onClick={() => document.getElementById('id01').style.display = 'block'} className="login">Login</button>

      <div id="id01" className="modal">
        <form className="modal-content animate" onSubmit={handleLogin}>
          <div className="imgcontainer">
            <span onClick={() => document.getElementById('id01').style.display = 'none'} className="close" title="Close Modal">&times;</span>
            <img src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png" alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" className="ee"><a href='/'>Login</a></button>
          </div>

          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            <button type="button" onClick={() => document.getElementById('id01').style.display = 'none'} className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>

      <button onClick={() => document.getElementById('id02').style.display = 'block'} className="sign">Sign Up</button>

      <div id="id02" className="modal">
        <span onClick={() => document.getElementById('id02').style.display = 'none'} className="close2" title="Close Modal">&times;</span>
        <form className="modal-content" onSubmit={handleSignup}>
          <div className="container">
            <h1 style={{ color: 'black' }}>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

            <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

            <div className="clearfix">
              <button type="button" onClick={() => document.getElementById('id02').style.display = 'none'} className="cancelbtn2">Cancel</button>
              <button type="submit" className="signupbtn"><a href='/'>Sign Up</a></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
