import React, { useState } from "react";

function Form() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    console.log(users);
    const handleSubmit = (e) => {
        if (fullName && email) {
            e.preventDefault();
            const user = {
                fullName,
                email,
            };
            setUsers((users) => {
                return [...users, user];
            });
            setFullName("");
            setEmail("");
        } else {
            console.log("empty");
        }
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={(e) => setFullName(e.target.value)} value={fullName} className="input" name="fullname" placeholder="fullname" type="text" />
                </div>
                <div className="form-group">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="input" name="email" placeholder="email" type="text" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">
                        Login
                    </button>
                </div>
            </form>
            <ul>
                {users.map((user, index) => {
                    const { fullName, email } = user;
                    return (
                        <li key={index}>
                            <h1>{fullName}</h1>
                            <p>{email}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Form;
