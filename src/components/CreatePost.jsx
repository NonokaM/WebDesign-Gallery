import React, { useEffect } from 'react'
import './css/CreatePost.css'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({ isAuth }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login")
        }
    })

    return (
        <>CreatePost</>
    )
}

export default CreatePost
