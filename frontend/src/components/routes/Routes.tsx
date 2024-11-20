import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../LoginSignUp/LoginSignup';
import Layout from '../sideBar/Layout'
import DashboardPage from '../Dashboard/DashboardPage';
import MarketPage from '../sideBar/MarketPage';
import ExchangePage from '../sideBar/ExchangePage';
import SettingsPage from '../sideBar/ProfilePage';

interface RoutesProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppRoutes = ({ isAuthenticated, handleLogout, setIsAuthenticated }: RoutesProps) => {
  return (
    <Routes>
      {/* Redirect to login or dashboard based on authentication */}
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
      
      {/* Login and Register routes */}
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
  );
};

export default AppRoutes;
