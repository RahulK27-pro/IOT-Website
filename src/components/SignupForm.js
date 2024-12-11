import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  return (
    <form>
      <h1>Create Account</h1>
      <div className="social-icons">
        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="button">Sign Up</button>
    </form>
  );
}

const SignupForm = () => {
    const navigate = useNavigate();
  
    const handleSignInClick = () => {
      navigate('/signin'); // This will navigate to the /signin route
    };
  
    return (
      <div className="container">
        <div className="form-container signup">
          <form>
            <h1>Create Account</h1>
            {/* Form inputs go here */}
            <button type="button" onClick={handleSignInClick}>Sign In</button>
          </form>
        </div>
      </div>
    );
  };


export default SignupForm;
