import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import Transactions from "./pages/Transactions"
import Budget from "./pages/Budget"
import Settings from "./pages/Settings"

function App() {
  return (
  <BrowserRouter>

    <div className="flex min-h-screen bg-white dark:bg-slate-950 transition-all duration-300">

      <Sidebar />

      <div className="flex-1 p-4 md:p-8 transition-all duration-300 overflow-x-hidden">
<Header />
        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/transactions"
            element={<Transactions />}
          />

          <Route
            path="/budget"
            element={<Budget />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>

      </div>

    </div>

  </BrowserRouter>
)
}

export default App