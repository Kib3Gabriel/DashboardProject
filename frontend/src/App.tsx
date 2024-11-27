// import { BrowserRouter as Router } from "react-router-dom";
// import { useState } from "react";
// import AppRoutes from "./components/routes/Routes";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("userData");
//     alert("You have been logged out.");
//   };

//   return (
//     <Router>
//       <AppRoutes
//         isAuthenticated={isAuthenticated}
//         setIsAuthenticated={setIsAuthenticated}
//         handleLogout={handleLogout}
//       />
//     </Router>
//   );
// }

// export default App;



// // 2nd
// import { BrowserRouter as Router } from "react-router-dom";
// import { useState } from "react";
// import AppRoutes from "./components/routes/Routes";
// import { WebSocketProvider } from "./components/webScoket/websocketContext"; // Adjust path as needed

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("userData");
//     alert("You have been logged out.");
//   };

//   return (
//     <WebSocketProvider>
//       <Router>
//         <AppRoutes
//           isAuthenticated={isAuthenticated}
//           setIsAuthenticated={setIsAuthenticated}
//           handleLogout={handleLogout}
//         />
//       </Router>
//     </WebSocketProvider>
//   );
// }

// export default App;







// new
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/routes/Routes";
import { WebSocketProvider } from "./components/webScoket/websocketContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    alert("You have been logged out.");
  };

  return (
    <WebSocketProvider>
      <Router>
        <AppRoutes
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          handleLogout={handleLogout}
        />
      </Router>
    </WebSocketProvider>
  );
}

export default App;
