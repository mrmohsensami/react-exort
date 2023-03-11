import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email) return;
        setUser({ name: name, email: email });
        navigate("/user");
    };
    return (
        <>
            <h1>Login</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} className="input" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="input" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn">
                        Login
                    </button>
                </div>
            </form>
        </>
    );
};

export default Login;
