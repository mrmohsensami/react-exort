import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users";

function Github() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1>Github</h1>
            <ul>
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <li className="item d-flex" key={id}>
                            <img src={avatar_url} alt={login} />
                            <div className="d-flex">
                                <h2>{login}</h2>
                                <a href={html_url}>profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Github;
