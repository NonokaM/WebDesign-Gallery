import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

import Navber from './components/Navber';
import Home from './components/Home';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';
import UserPage from './components/UserPage';
import EditUserPage from './components/EditUserPage';
import Search from './components/Search';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") === 'true');

  return (
    <Router>
      <Navber isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path='/create' element={<CreatePost isAuth={isAuth}/>}></Route>
        <Route path='/posts/:id' element={<ViewPost />}></Route>
        <Route path='/user' element={<UserPage isAuth={isAuth}/>}></Route>
        <Route path='/user/edit' element={<EditUserPage />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </Router>
  )
}

export default App
