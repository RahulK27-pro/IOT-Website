import React from 'react';

function LoginForm() {
  return (
    <form>
      <h1>Sign In</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="button">Login</button>
    </form>
  );
}

export default LoginForm;
