import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";

function Router() {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="user" element={<ProtectedRoute user={user}></ProtectedRoute>}>
                    <Route path="profile" element={<Profile />} />
                    <Route index path="account" element={<Account />} />
                </Route>

                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
