import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const register = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("register/", form);

            console.log(response.data);

            alert("Registration Successful");

            navigate("/");

        } catch (err) {

            console.log(err);

            console.log(err.response);

            alert(JSON.stringify(err.response?.data));

        }

    };

    return (

        <div className="container-fluid min-vh-100 bg-primary justify-content-center align-items-center p-5">

            <div className="card p-4 shadow m-5">

                <h2><b>Register</b></h2>

                <form onSubmit={register}>

                    <input
                        className="form-control mb-3 "
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={handleChange}
                    />

                    <button className="btn btn-success">

                        Register

                    </button>

                </form>

            </div>

        </div>
    );

}

export default Register;