import React from 'react';
import SignIn from '../../components/sign-in/SignIn'
import Signup from '../../components/sign-up/Signup'

import './sign-in-and-signup.styles.scss';

const SignInAndSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
}

export default SignInAndSignup;
