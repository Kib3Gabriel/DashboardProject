
import { useEffect, useState } from "react";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

import "./LoginSignup.css";

export function Login ()  {
  const [action, setAction] = useState<"Login" | "Sign Up">("Login");
  const [userEmail, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [userPassword, setUserpassword] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate();


  // Load saved data from local storage on component mount
  useEffect(() =>{
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      try {
        const { email, username, password } = JSON.parse(savedData);
        setEmail(email || '');
        setUsername(username || '');
        setUserpassword(password || '');
      } catch (err) {
        console.error("Failed to parse user data:", err);
      }
    }

  }, []); //Add dependeny array to avoid infinite loop

    const handleSubmit =async() =>{
      try{
        if(action === "Sign Up"){
          const response = await axios.post("http://localhost:5500/api/v1/register",{
            username:userName,
            email:userEmail,
            password:userPassword,
          });
          console.log("Response:", response);
          alert("Signup successful");
        }else{
          const response = await axios.post("http://localhost:5500/api/v1/login",{
            email:userEmail,
            password:userPassword,
          });
          console.log("Response:", response);
          alert("login successful");
        }
        setError('') 
      }catch(err){
        setError("An error occured during submission");
        console.error('Error in submission', err);
      }
    }


return (
  <div className="container">
    <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
    </div>

    <div className="inputs">
      {action === "Sign Up" && (
        <div className="input">
          <img src={user_icon} alt="User icon" />
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}

      <div className="input">
        <img src={email_icon} alt="Email icon" />
        <input
          type="email"
          placeholder="Email Id"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input">
        <img src={password_icon} alt="Password icon" />
        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserpassword(e.target.value)}
        />
      </div>
    </div>

    {error && <div className="error-message">{error}</div>}

    {action === "Login" && (
      <div className="forgot-password">
        Forgot password? <span>click here</span>
      </div>
    )}

    <div className="submit-container">
      <div
        className="submit"
        onClick={() => {
          setAction(action === "Login" ? "Sign Up" : "Login");
        }}
      >
        {action === "Login" ? "Sign Up" : "Login"}
      </div>
      <div className="submit" onClick={handleSubmit}>
        Submit
      </div>
    </div>
  </div>
);
}

export default Login;