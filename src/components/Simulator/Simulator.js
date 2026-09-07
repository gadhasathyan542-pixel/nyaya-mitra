import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

import {
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import scenarios from "../../data/Scenarios";

import "../Dashboard.css";
import "./Simulator.css";

function Simulator() {

  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const [caseType, setCaseType] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [result, setResult] = useState(null);
  const [step, setStep] = useState(1);

  const handleLogout = () => {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");

    navigate("/");

  };

  const startSimulation = () => {

    if (!caseType) {
      alert("Please select a simulator.");
      return;
    }

    setCurrentQuestion(scenarios[caseType]);
    setResult(null);
    setStep(1);

  };
    const handleAnswer = (answer) => {

    const next = currentQuestion[answer];

    if (next.result) {

      setResult(next);
      setCurrentQuestion(null);

    }

    else {

      setCurrentQuestion(next);
      setStep((prev) => prev + 1);

    }

  };

  const resetSimulation = () => {

    setCaseType("");
    setCurrentQuestion(null);
    setResult(null);
    setStep(1);

  };

return (

  <div className="simulator-page">

    <>
      <Navbar/>
    </>

    {/* ================= SIMULATOR ================= */}

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="text-center mb-2">
          ⚖️ Nyaya Mitra
        </h2>

        <p id="p1" className="text-center">
          Interactive Legal Decision Simulator
        </p>

        <select
          className="form-select"
          value={caseType}
          disabled={currentQuestion !== null}
          onChange={(e) => setCaseType(e.target.value)}
        >

          <option value="">Select Simulator</option>
          <option value="roadCrossing">Road Crossing</option>
          <option value="theft">Theft</option>
          <option value="cyberFraud">Cyber Fraud</option>
          <option value="assault">Assault</option>
          <option value="kidnapping">Kidnapping</option>
          <option value="robbery">Robbery</option>
          <option value="domesticViolence">Domestic Violence</option>
          <option value="cheating">Cheating</option>
          <option value="drugOffence">Drug Offence</option>
          <option value="hitAndRun">Hit & Run</option>

        </select>

        <button
          className="btn btn-primary mt-3"
          onClick={startSimulation}
        >
          Start Simulation
        </button>

      </div>

      {currentQuestion && (

        <div className="card mt-4 shadow">

          <div className="card-body text-center">

            <h6 className="text-muted">
              Step {step}
            </h6>

            <h4>{currentQuestion.question}</h4>

            <button
              className="btn btn-success m-3"
              onClick={() => handleAnswer("yes")}
            >
              YES
            </button>

            <button
              className="btn btn-danger m-3"
              onClick={() => handleAnswer("no")}
            >
              NO
            </button>

          </div>

        </div>

      )}

      {result && (

        <div className="card mt-4 shadow">

          <div className="card-header bg-success text-white">

            <h4>Simulation Result</h4>

          </div>

          <div className="card-body">

            <h3>{result.result}</h3>

            <h5>

              Risk Level :

              <span
                className={
                  result.risk === "High"
                    ? "text-danger"
                    : result.risk === "Medium"
                    ? "text-warning"
                    : "text-success"
                }
              >
                {" "}
                {result.risk}
              </span>

            </h5>

            <p>

              <strong>Message :</strong>{" "}

              {result.message}

            </p>

            {result.actions && (

              <>

                <h5>Recommended Actions</h5>

                <ul className="text-start">

                  {result.actions.map((action, index) => (

                    <li key={index}>

                      {action}

                    </li>

                  ))}

                </ul>

              </>

            )}

            <button
              className="btn btn-secondary mt-3"
              onClick={resetSimulation}
            >
              Start Again
            </button>

          </div>

        </div>

      )}

    </div>

  </div>

);

}

export default Simulator; 