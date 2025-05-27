import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../authSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!user) return <p>Please login to see your profile.</p>;

  return (
    <div className="profile">
      <h1>Welcome, {user.name || user.email}</h1>
      <p>Email: {user.email}</p>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
