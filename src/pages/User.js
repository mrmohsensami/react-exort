import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function User({ user }) {
    return (
        <>
            <nav>
                <NavLink to="/user/profile">Profile</NavLink>
                <NavLink to="/user/account">Account</NavLink>
            </nav>
            <h1>User</h1>
            <p>hello, {user.name}</p>
            <hr />
            <Outlet />
        </>
    );
}

export default User;
