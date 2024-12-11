import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function Profile() {
  return (
    <div style={{ textAlign: "center", padding: "20px", }}>
      <h1>Welcome to the Profile Page</h1>
      <p>This is your profile</p>
      <Link to="/create-profile">
        <button style={{ marginTop: "20px" }}>Create Profile</button>
      </Link>
      <Link to="/">
        <button style={{ marginTop: "20px", marginLeft: "10px" }}>Back to Home</button>
      </Link>
    </div>
  );
}

function CreateProfile() {
  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop:"200px" }}>
      <h1>Create Your Profile</h1>
      <form style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ margin: "10px 0" }}>
          <label>Full Name: </label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Email: </label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Username: </label>
          <input type="text" placeholder="Choose a username" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Primary IoT Device: </label>
          <input type="text" placeholder="e.g., Smart Pen" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Device ID: </label>
          <input type="text" placeholder="Enter device ID" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Address: </label>
          <input type="text" placeholder="Enter your address" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Contact Number: </label>
          <input type="tel" placeholder="Enter your contact number" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Date of Birth: </label>
          <input type="date" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Occupation: </label>
          <input type="text" placeholder="Enter your occupation" />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "20px",
            marginLeft: "100px",
            marginBottom: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Save Profile
        </button>
      </form>
      <div>
        <Link to="/profile">
          <button
            style={{
              marginTop: "20px",
              marginleft: "100px",
              padding: "10px 10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Back to Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

function Home({ onSignIn }) {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  return (
    <div className={`container ${isSignUpActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button" onClick={onSignIn}>
            Sign In
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please log in with your personal info</p>
            <button className="ghost" onClick={() => setIsSignUpActive(false)}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome</h1>
            <p>Signup if you are new to the website</p>
            <button className="ghost" onClick={() => setIsSignUpActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Dashboard!</h1>
      <Link to="/profile">
        <button style={{ marginTop: "20px" }}>Profile</button>
      </Link>
    </div>
  );
}

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isSignedIn ? <Dashboard /> : <Home onSignIn={() => setIsSignedIn(true)} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </Router>
  );
}
