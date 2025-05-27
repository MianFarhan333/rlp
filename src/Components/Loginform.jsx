import React, { useState } from 'react';
import '../app.css';
import { useDispatch } from 'react-redux';
import { login } from '../authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleLogin = (e) => {
  e.preventDefault();
  const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

  if (!storedUser) {
    alert('No user found. Please sign up.');
    return;
  }

  if (storedUser.email === email && storedUser.password === password) {
    dispatch(login(storedUser));
    localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
    navigate('/profile');
  } else {
    alert('Invalid email or password.');
  }
};


  return (
    <div className="main-container">
      <div className="cont-block1">
        <form className="cont-box" onSubmit={handleLogin}>
          <h1 className='cont-h1'>Welcome Back 👋</h1>
          <div className="btn-div">
            <button type="button" className='google'>
              <i className="fa-brands fa-google"></i> Google
            </button>
            <button type="button" className='facebook'>
              <i className="fa-brands fa-facebook"></i> Facebook
            </button>
          </div>
          <div className="inp-div">
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
          <div className="login-div">
            <div className="forget-div">
              <h1 className='forget-h1'>Forgot Password? </h1>
            </div>
            <button className='login-btn' type='submit'>Login</button>
            <button className='signup-btn'><a href="/signup">Sign up</a></button>
          </div>
        </form>
      </div>
      <div className="cont-block2">
        <img className='cont-img' src="/src/assets/th.jpeg" alt="banner" />
      </div>
    </div>
  );
};

export default LoginForm;
