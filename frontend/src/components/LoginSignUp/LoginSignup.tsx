import { useEffect, useState } from "react";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import axios from "axios";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

export function Login({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (auth: boolean) => void;
}) {
  const [action, setAction] = useState<"Login" | "Sign Up">("Login");
  const [userEmail, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [userPassword, setUserpassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      try {
        const { email, username, password } = JSON.parse(savedData);
        setEmail(email || "");
        setUsername(username || "");
        setUserpassword(password || "");
      } catch (err) {
        console.error("Failed to parse user data:", err);
      }
    }
  }, []);

  const handleSubmit = async () => {
    if (!userEmail || !userPassword || (action === "Sign Up" && !userName)) {
      setError("Fill the fields");
      setValidationErrors([]);
      return;
    }

    setError(null);
    setValidationErrors([]);

    try {
      const endPoint = action === "Sign Up" ? "/register" : "/login";
      const requestData =
        action === "Sign Up"
          ? { username: userName, email: userEmail, password: userPassword }
          : { email: userEmail, password: userPassword };

      const response = await axios.post(
        `http://localhost:5400/api/v1${endPoint}`,
        requestData
      );

      if (response.status === 200) {
        setError(null);
        setValidationErrors([]);

        if (action === "Sign Up") {
          alert("Registration successful! Please log in.");
          setAction("Login");
        } else {
          const {token} = response.data;
          localStorage.setItem("authToken", token);
          
          alert("Login successful! Redirecting to the dashboard.");
          setIsAuthenticated(true);
          navigate("/dashboard");
        }
      }
    } catch (err: any) {
      const errors = err.response?.data?.errors;
      if (Array.isArray(errors)) {
        setValidationErrors(errors.map((e: any) => e.msg));
      } else {
        setError(err.message || "An unexpected error occurred");
      }
      console.error("Error in submission", err);
    }
  };

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
      {validationErrors.length > 0 && (
        <div className="validation-errors">
          {validationErrors.map((error, index) => (
            <div key={index} className="error-message">
              {error}
            </div>
          ))}
        </div>
      )}

      {action === "Login" && (
        <div className="forgot-password">
          Forgot password? <span>click here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            setError(null);
            setValidationErrors([]);
            setAction(action === "Login" ? "Sign Up" : "Login");
          }}
        >
          {action === "Login" ? "Sign Up" : "Login"}
        </div>
        <div
          className="submit"
          onClick={() => {
            setError(null);
            setValidationErrors([]);
            handleSubmit();
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
}

export default Login;
