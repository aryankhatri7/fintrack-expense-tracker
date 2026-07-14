import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import {
  loginUser,
  registerUser,
  googleLogin,
  getCurrentUser,
  updateProfile,
  changePassword,
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

  const loginWithGoogle = async (credential) => {
  const data = await googleLogin(credential);

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
  // Update Profile
const updateUserProfile = async (name) => {
  const data = await updateProfile(name, token);

  setUser(data.user);

  return data.user;
};

const updatePassword = async (
  currentPassword,
  newPassword
) => {
  const data = await changePassword(
    {
      currentPassword,
      newPassword,
    },
    token
  );

  return data;
};

// Restore user on page refresh
useEffect(() => {
  const restoreUser = async () => {
    if (!token) return;

    try {
      const currentUser = await getCurrentUser(token);
      setUser(currentUser);
    } catch (error) {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
    }
  };

  restoreUser();
}, [token]);
  // Logout
  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        login,
        loginWithGoogle,
        register,
        logout,
        updateUserProfile,
        updatePassword,
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