import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "./Navbar";

import {
  FaBalanceScale,
  FaSearch,
  FaMapMarkerAlt,
  FaBook,
  FaBell,
  FaUserCircle,
  FaPlayCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");

    navigate("/");
  };

  return (
    
    <div className="dashboard">
      <>
        <Navbar/>
      </>

      {/* ================= Welcome ================= */}

      <div className="welcome">

        <h3>Welcome, {username || "User"} 👋</h3>

        <p>
          Manage legal services and access different modules from one place.
        </p>

      </div>

      {/* ================= Statistics ================= */}

      <div className="stats">

        <div className="card">
          <FaBalanceScale size={35} />
          <h3>150</h3>
          <p>Total Cases</p>
        </div>

        <div className="card">
          <FaPlayCircle size={35} />
          <h3>82</h3>
          <p>Simulations</p>
        </div>

        <div className="card">
          <FaBook size={35} />
          <h3>420</h3>
          <p>IPC / BNS Searches</p>
        </div>

        <div className="card">
          <FaMapMarkerAlt size={35} />
          <h3>15</h3>
          <p>Police Stations</p>
        </div>

      </div>

      {/* ================= Quick Actions ================= */}

      <h3 className="section-title">
        Quick Actions
      </h3>

      <div className="quick-actions">

        <div
          className="action-card"
          onClick={() => navigate("/simulator")}
        >
          <FaPlayCircle size={45} />

          <h4>Legal Simulator</h4>

          <p>
            Simulate legal cases and understand applicable laws.
          </p>

          <button className="btn btn-primary">
            Open
          </button>

        </div>

        <div
          className="action-card"
          onClick={() => navigate("/ipc-bns")}
        >
          <FaBook size={45} />

          <h4>IPC ⇄ BNS</h4>

          <p>
            Compare IPC sections with corresponding BNS sections.
          </p>

          <button className="btn btn-primary">
            Open
          </button>

        </div>

        <div
          className="action-card"
          onClick={() => navigate("/navigator")}
        >
          <FaSearch size={45} />

          <h4>Law Navigator</h4>

          <p>
            Search legal provisions and criminal law sections.
          </p>

          <button className="btn btn-primary">
            Open
          </button>

        </div>

        <div
          className="action-card"
          onClick={() => navigate("/geolocator")}
        >
          <FaMapMarkerAlt size={45} />

          <h4>Police Locator</h4>

          <p>
            Locate nearby police stations using maps.
          </p>

          <button className="btn btn-primary">
            Open
          </button>

        </div>

      </div>

      {/* ================= Recent Activity ================= */}

      <div className="recent">

        <h3 className="section-title">Recent Activity</h3>

        <ul>

          <li>✔ User authenticated successfully</li>

          <li>✔ Simulator module available</li>

          <li>✔ IPC / BNS comparison module ready</li>

          <li>✔ Law Navigator integrated</li>

          <li>✔ Police Locator integrated</li>

        </ul>

      </div>

    </div>
  );
}

export default Dashboard;