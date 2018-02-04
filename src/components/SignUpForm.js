import React from 'react';

const SignUpForm = () => {
  return(
    <form>
      <input type="text" name="firstname" placeholder="Firstname"/>
      <input type="text" name="lastname" placeholder="Lastname"/>
      <input type="text" name="username" placeholder="Username"/>
      <input type="text" name="password" placeholder="Password"/>
      <input type="text" name="password_confirmation" placeholder="Password Confirmation"/>
      <input type="text" name="email" placeholder="Email"/>
      <input type="submit" name="submit" value="Sign Up"/>
    </form>
  )
}

export default SignUpForm;
