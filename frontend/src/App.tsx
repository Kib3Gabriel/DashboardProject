import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./components/routes/Routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("userData");
    alert("You have been logged out.");
  };

  return (
    <Router>
      <AppRoutes
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        handleLogout={handleLogout}
      />
    </Router>
  );
}

export default App;
