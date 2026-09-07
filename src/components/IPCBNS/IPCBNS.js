import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IPCBNS.css";
import ipcData from "../../data/ipcData";
import Navbar from "../Navbar";

function IPCBNS() {

    const navigate = useNavigate();

    const username = localStorage.getItem("username");

    const [selected, setSelected] = useState("");

    const [result, setResult] = useState(null);

    const handleCompare = () => {

        const law = ipcData.find(
            item => item.offence === selected
        );

        setResult(law);

    };

    const handleLogout = () => {

        localStorage.clear();

        navigate("/");

    };

    return (

        <div className="ipc-page">

           <>
            <Navbar/>
           </>
            <div className="container">

                <div className="cards shadow-lg">

                    <div className="card-header">

                        <h2>IPC ↔ BNS Comparison</h2>

                        <p>Compare Indian Penal Code with Bharatiya Nyaya Sanhita</p>

                    </div>

                    <div className="card-body">

                        <select
                            className="form-select mb-3"
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >

                            <option value="">
                                Select Offence
                            </option>

                            {ipcData.map((item, index) => (

                                <option
                                    key={index}
                                    value={item.offence}
                                >

                                    {item.offence}

                                </option>

                            ))}

                        </select>

                        <button
                            className="btn btn-primary"
                            onClick={handleCompare}
                        >

                            Compare

                        </button>

                        {result && (

                            <div className="result-card mt-4">

                                <h3>{result.offence}</h3>

                                <hr />

                                <p>

                                    <strong>IPC :</strong>

                                    {result.ipc}

                                </p>

                                <p>

                                    <strong>BNS :</strong>

                                    {result.bns}

                                </p>

                                <p>

                                    <strong>Punishment :</strong>

                                    {result.punishment}

                                </p>

                                <p>

                                    <strong>Description :</strong>

                                    {result.description}

                                </p>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default IPCBNS;