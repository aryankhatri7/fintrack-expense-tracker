import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
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