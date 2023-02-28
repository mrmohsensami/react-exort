import React, { useState } from "react";

function Form() {
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    const [user, setUser] = useState({ fullname: "", email: "", age: "" });
    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.fullname && user.email) {
            const newUser = { ...user, id: new Date().getTime().toString() };
            setUsers((users) => {
                return [...users, newUser];
            });
            setUser({ fullname: "", email: "", age: "" });
        } else {
            console.log("empty");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={handleChange} value={user.fullname} className="input" name="fullname" placeholder="fullname" type="text" />
                </div>
                <div className="form-group">
                    <input onChange={handleChange} value={user.email} className="input" name="email" placeholder="email" type="text" />
                </div>
                <div className="form-group">
                    <input onChange={handleChange} value={user.age} className="input" name="age" placeholder="age" type="text" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">
                        Login
                    </button>
                </div>
            </form>
            <ul>
                {users.map((user, index) => {
                    const { id, fullname, email, age } = user;
                    return (
                        <li key={index}>
                            <h1>{fullname}</h1>
                            <p>{email}</p>
                            <p>{age}</p>
                            <p>{id}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Form;
