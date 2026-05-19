import React from "react"
import ReactDOM from "react-dom/client"

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

    <ThemeProvider>

      <TransactionProvider>

        <App />

        <ToastContainer
          position="top-right"
          autoClose={2500}
          theme="dark"
        />

      </TransactionProvider>

    </ThemeProvider>

  </React.StrictMode>

)