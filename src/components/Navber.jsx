import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import './css/Navber.css'

const Navbar = ({ isAuth, setIsAuth }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate("/");
        });
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/search">search</Link>
            {!isAuth ? (
            <Link to="/login">Login</Link>
            ) : (
            <>
                <Link to="/create">create</Link>
                <div className="dropdown">
                    <Link className="dropbtn" to="/user">user</Link>
                    <div className="dropdown-content">
                        <Link to="/user">user</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </>
        )}
        </nav>
    )}

export default Navbar
