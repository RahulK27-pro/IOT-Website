import React from 'react';

function Toggle({ onToggle, isActive }) {
  return (
    <div className="toggle">
      <div className="toggle-panel toggle-left">
        <h1>Welcome Back!</h1>
        <p>  To keep connected, please login with your personal details.  </p>
        <button className="hidden" onClick={onToggle}>
          {isActive ? 'Sign Up' : 'Sign In'}
        </button>
      </div>
      <div className="toggle-panel toggle-right">
        <h1>Hello, Friend!</h1>
        <p>Signup if you are new to the website</p>
        <button className="hidden" onClick={onToggle}>
          {isActive ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default Toggle;
