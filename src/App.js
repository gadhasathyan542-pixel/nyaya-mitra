import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Simulator from "./components/Simulator/Simulator";
import ProtectedRoute from "./components/ProtectedRoute";
import IPCBNS from "./components/IPCBNS/IPCBNS";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/simulator"
          element={
            <ProtectedRoute>
              <Simulator />
            </ProtectedRoute>
          }
        />


          <Route
            path="/ipc-bns"
            element={
              <ProtectedRoute>
                <IPCBNS/>
              </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;