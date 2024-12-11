import React from "react";

function CreateProfile() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Create Your Profile</h1>
      <form style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ margin: "10px 0" }}>
          <label>Full Name: </label>
          <input type="text" name="name" placeholder="Enter your full name" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Email: </label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Username: </label>
          <input type="text" name="username" placeholder="Choose a username" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Primary IoT Device: </label>
          <input type="text" name="iotDevice" placeholder="e.g., Smart Pen" />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Device ID: </label>
          <input type="text" name="deviceId" placeholder="Enter device ID" />
        </div>
        <button type="submit" style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;
