import React from 'react';
import { selectUser } from '../features/userSlice';
import './../styles/ProfileScreen.css';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
  const user = useSelector(selectUser);

  const handleClickSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="avatar"
          />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans</h3>
              <PlansScreen />
              <p></p>
              <button
                onClick={handleClickSignOut}
                className="profileScreen-signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
