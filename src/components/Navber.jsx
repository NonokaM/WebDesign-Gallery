import React from 'react'
import { Link } from 'react-router-dom'

const Navber = ({ isAuth }) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/search">search</Link>
            {!isAuth ? (
            <Link to="/login">Login</Link>
            ) : (
            <>
                <Link to="/create">create</Link>
                <Link to="/user">user</Link>
            </>
        )}
        </nav>
    )
}

export default Navber
