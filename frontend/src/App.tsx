
// // sideBar remains

// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useState } from 'react';
// import { Login } from './components/LoginSignUp/LoginSignup';
// import Layout from './components/sideBar/Layout';
// import DashboardPage from './components/Dashboard/DashboardPage';
// import MarketPage from './components/sideBar/MarketPage';
// import ExchangePage from './components/sideBar/ExchangePage';
// import SettingsPage from './components/sideBar/SettingsPage';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? (
//               <Navigate to="/dashboard" replace />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />
//         <Route
//           path="/login"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />
//         <Route
//           path="/register"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />

//         {/* Protected Layout with Sidebar */}
//         {isAuthenticated && (
//           <Route element={<Layout />}>
//             <Route path="/dashboard" element={<DashboardPage />} />
//             <Route path="/market" element={<MarketPage />} />
//             <Route path="/exchange" element={<ExchangePage />} />
//             <Route path="/settings" element={<SettingsPage />} />
//           </Route>
//         )}
        
//         {/* Redirect to login if user tries to access protected routes without authentication */}
//         {!isAuthenticated && (
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;










//with logout
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from './components/LoginSignUp/LoginSignup';
import Layout from './components/sideBar/Layout';
import DashboardPage from './components/Dashboard/DashboardPage';
import MarketPage from './components/sideBar/MarketPage';
import ExchangePage from './components/sideBar/ExchangePage';
import SettingsPage from './components/sideBar/SettingsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false); // Set isAuthenticated to false to log out the user
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/register"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Layout with Sidebar */}
        {isAuthenticated && (
          <Route element={<Layout handleLogout={handleLogout} />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        )}
        
        {/* Redirect to login if user tries to access protected routes without authentication */}
        {!isAuthenticated && (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
