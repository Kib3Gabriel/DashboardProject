// import LoginSignup, { Login } from './components/LoginSignUp/LoginSignup'
// import DashboardPage from './components/Dashboard/DashboardPage'
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import { useState } from 'react'

// function App() {

//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <>
//       {/* <LoginSignup/> */}
//       {/* <DashboardPage/>       */}

//       <Router>
//         <Routes>
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated = {setIsAuthenticated} />
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             isAuthenticated ? <DashboardPage/> : <Navigate to="/"/>
//           }
//         />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App




import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from './components/LoginSignUp/LoginSignup';
import DashboardPage from './components/Dashboard/DashboardPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
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
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <DashboardPage /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
