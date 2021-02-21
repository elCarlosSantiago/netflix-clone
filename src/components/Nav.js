import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './../styles/Nav.css';

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClickProfile = () => {
    history.push('/profile');
  };

  const handleClickHome = () => {
    history.push('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav-dark'}`}>
      <div className="nav-contents">
        <img
          onClick={handleClickHome}
          className="nav-logo"
          src="https://plasticoceans.org/wp-content/uploads/2018/09/netflix-logo-1.png"
          alt="Netlfix Logo"
        />
        <img
          onClick={handleClickProfile}
          className="nav-avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
