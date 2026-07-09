import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PublicRoute from "./components/auth/PublicRoute";
import AppLayout from "./layout/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/auth/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route
  path="/login"
  element={
    <PublicRoute>
      <Login />
    </PublicRoute>
  }
/>

       <Route
  path="/register"
  element={
    <PublicRoute>
      <Register />
    </PublicRoute>
  }
/>

        {/* Protected Application */}
<Route
  path="/*"
  element={
    <ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
  }
/>

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;