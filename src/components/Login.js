import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await API.post("login/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("username", response.data.username);

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      if (err.response) {
        setError(
          err.response.data.detail ||
          err.response.data.non_field_errors ||
          "Invalid username or password"
        );
      } else {
        setError("Cannot connect to Django Server.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 bg-primary justify-content-center align-items-center">

      <div className="row justify-content-center ">

        <div className="col-md-4 mt-5">

          <div className="card shadow-lg p-4">

            <h2 className="text-center mb-4">
              <b>⚖️ NYAYA MITRA</b>
            </h2>

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>

              <div className="mb-3">

                <label className="form-label">
                  Username
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>

              <button
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

            <hr />

            <div className="text-center">

              <p>
                Don't have an account?
              </p>

              <button
                className="btn btn-success"
                onClick={() => navigate("/register")}
              >
                Register
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;