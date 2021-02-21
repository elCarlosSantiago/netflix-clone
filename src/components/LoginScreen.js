import React, { useState } from 'react';
import SignUpScreen from './SignUpScreen'
import './../styles/LoginScreen.css';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  const handleClick = () => {
    setSignIn(true);
  };
  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        <img
          className="loginScreen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix background"
        />
        <button className="loginScreen-button" onClick={handleClick}>
          Sign In
        </button>
        <div className="loginScreen-gradient"></div>
      </div>
      <div className="loginScreen-body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited, movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen-getStarted"
                  onClick={handleClick}>
                  Get Started! 
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
