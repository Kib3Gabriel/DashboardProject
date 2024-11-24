import React, { useState, useEffect } from "react";
import axios from "axios";
import { response } from "express";

interface User {
  username: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        console.log("Auth Token:", token); //token
    
        const response = await axios.get("http://localhost:5500/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (err: any) {
        console.error("Error details:", err.response || err.message); // Log detailed error
        setError("Failed to fetch user information. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Profile Information</h1>
      {user ? (
        <>
          <div style={{ margin: "10px 0", fontSize: "18px" }}>
            <strong>Username:</strong> {user.username}
          </div>
          <div style={{ margin: "10px 0", fontSize: "18px" }}>
            <strong>Email:</strong> {user.email}
          </div>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default ProfilePage;





