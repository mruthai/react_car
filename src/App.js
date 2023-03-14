import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home'
import Profile from './views/Profile';
import Inventory from './views/Inventory';

function App() {
  return (
    <BrowserRouter>
    <div class="master-nav">
      <nav class="nav-bar-container">
        <ul class="nav-bar">
          <li class="nav-link"><Link id="link" to="/">Home</Link> </li>
          <li class="nav-link"><Link id="link" to="/inventory">Inventory</Link> </li>
          <li class="nav-link"><Link id="link" to="/profile">Profile</Link> </li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/inventory" element={<Inventory/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;
