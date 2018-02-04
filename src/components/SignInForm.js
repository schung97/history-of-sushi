import React from 'react';

const SignInForm = () => {

  return(
    <form>
      <input type="text" name="username" placeholder="Username"/>
      <input type="text" name="password" placeholder="Password"/>
      <input type="submit" name="submit" value="Log In"/>
    </form>
  )
}
export default SignInForm;
