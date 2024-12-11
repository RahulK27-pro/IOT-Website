import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleCreateProfile = () => {
    navigate("/create-profile");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Profile Page</h1>
      <button 
        onClick={handleCreateProfile} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Create Profile
      </button>
    </div>
  );
}

export default Profile;
