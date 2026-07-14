import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react"
import ReactDOM from "react-dom/client"
import AuthProvider from "./context/AuthContext";
import App from "./App"
import "./index.css"
import ThemeProvider from "./context/ThemeContext"
import TransactionProvider from "./context/TransactionContext"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <GoogleOAuthProvider
    clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
  >

    <ThemeProvider>

  <AuthProvider>

    <TransactionProvider>

      <App />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
      />

    </TransactionProvider>

  </AuthProvider>

</ThemeProvider>

</GoogleOAuthProvider>

  </React.StrictMode>

)