import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
    FaBalanceScale,
    FaPlayCircle,
    FaBook,
    FaSearch,
    FaMapMarkerAlt,
    FaUserCircle,
    FaSignOutAlt
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const username = localStorage.getItem("username");

    const handleLogout = () => {

        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("username");

        navigate("/");

    };

    return (

        <div className="topbar">

            <div className="logo">

                <h2>
                    <FaBalanceScale /> NYAYA MITRA
                </h2>

                <p>AI Powered Legal Assistant</p>

            </div>

            <div className="nav-links">

                <button
                    className={location.pathname === "/dashboard" ? "active" : ""}
                    onClick={() => navigate("/dashboard")}
                >
                    Dashboard
                </button>

                <button
                    className={location.pathname === "/simulator" ? "active" : ""}
                    onClick={() => navigate("/simulator")}
                >
                    <FaPlayCircle /> Simulator
                </button>

                <button
                    className={location.pathname === "/ipc-bns" ? "active" : ""}
                    onClick={() => navigate("/ipc-bns")}
                >
                    <FaBook /> IPC / BNS
                </button>

                <button
                    className={location.pathname === "/navigator" ? "active" : ""}
                    onClick={() => navigate("/navigator")}
                >
                    <FaSearch /> Navigator
                </button>

                <button
                    className={location.pathname === "/geolocator" ? "active" : ""}
                    onClick={() => navigate("/geolocator")}
                >
                    <FaMapMarkerAlt /> Police
                </button>

            </div>

            <div className="user-section">

                <FaUserCircle className="icon" />

                <span>{username}</span>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Navbar;