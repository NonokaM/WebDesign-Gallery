import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/create">create</Link>
            <Link to="/search">search</Link>
        </nav>
    )
}

export default Navber
