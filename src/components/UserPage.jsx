import React, { useEffect } from 'react'
import './css/UserPage.css'
import { useNavigate } from 'react-router-dom';

const UserPage = ({ isAuth }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login")
        }
    })

    return (
        <>UserPage</>
    )
}

export default UserPage
