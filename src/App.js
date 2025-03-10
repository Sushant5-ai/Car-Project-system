import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from'./Pages/HomePage/HomePage';
import Navbar from './components/Navigation Bar/Navbar';
import RegisterPage from './Pages/RegisterPage/RegisterPage';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/Register" element={<RegisterPage/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      
      
        </Routes>
    </BrowserRouter>
  );
}

export default App;
