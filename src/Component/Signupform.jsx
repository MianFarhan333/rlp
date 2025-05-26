import React, { useState } from 'react';
import '../app.css';
// import img from '../assets/th.jpeg';
import { useDispatch } from 'react-redux';
import { login } from '../authSlice';
import { useNavigate } from 'react-router-dom';

const Signupform = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleSignup = (e) => {
  e.preventDefault();
  const user = { email, name, password, role: 'user' };
  
  localStorage.setItem('registeredUser', JSON.stringify(user));

  dispatch(login(user));
  localStorage.setItem('loggedInUser', JSON.stringify(user));
  navigate('/profile');
};


  return (
    <div className="main-container">
      <div className="cont-block1">
        <form className="cont-box" onSubmit={handleSignup}>
          <h1 className='cont-h1'>Create New Account</h1>
          <div className="btn-div">
            <button type="button" className='google'>
              <i className="fa-brands fa-google"></i> Google
            </button>
            <button type="button" className='facebook'>
              <i className="fa-brands fa-facebook"></i> Facebook
            </button>
          </div>
          <div className="inp-div1">
            <div className="email-div">
              <h1 className='inp-h1'>Name</h1>
              <input className='email-inp' type="text" placeholder='Name' value={name}
                onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="email-div">
              <h1 className='inp-h1'>Email</h1>
              <input className='email-inp' type="email" placeholder='Email' value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="pass-div">
              <h1 className='inp-h1'>Password</h1>
              <input className='pass-inp' type="password" placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
          <div className="login-div1">
            <h1 className='login-h2'>Already have an account? <a href="/login">Login</a></h1>
            <button className='signup-btn1' type='submit'>Sign up</button>
          </div>
        </form>
      </div>
      <div className="cont-block2">
        <img className='cont-img' src="/src/assets/th.jpeg" alt="banner" />

      </div>
    </div>
  );
};

export default Signupform;
