import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'
import './css/Login.css'

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const loginInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            console.log('OK');
            setIsAuth(true);
            console.log('OK2');
            navigate("/");
        });
    };

    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginInWithGoogle}>Googleでログイン</button>
        </div>
    )
}

export default Login
