import React from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import '../css/SignIn-UpForm.css';

const Home = () => {
  return (
    <div className="home">
      <SignUpForm />
      <SignInForm />
    </div>
  )
}

export default Home;
