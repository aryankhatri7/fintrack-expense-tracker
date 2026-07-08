import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import {
  loginUser,
  registerUser,
  getCurrentUser,
} from "../services/authService";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  // Login
  const login = async (email, password) => {
    const data = await loginUser({
      email,
      password,
    });

    localStorage.setItem("token", data.token);

    setToken(data.token);

    const currentUser = await getCurrentUser(data.token);

    setUser(currentUser);

    return currentUser;
  };

  // Register
  const register = async (name, email, password) => {
    const data = await registerUser({
      name,
      email,
      password,
    });

    localStorage.setItem("token", data.token);

    setToken(data.token);

    const currentUser = await getCurrentUser(data.token);

    setUser(currentUser);

    return currentUser;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;