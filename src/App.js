import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home'
import Profile from './views/Profile';
import InventoryCount from './views/InventoryCount';
import Inventory from './views/Inventory'
import CarId from './views/CarId'

function App() {
  return (
    <BrowserRouter>
    <div className="master-nav">
      <nav className="nav-bar-container">
        <ul className="nav-bar">
          <li className="nav-link"><Link className="linked" to="/">Home</Link> </li>
          <li className="nav-link"><Link className="linked" to="/inventorycount">Inventory Counter</Link> </li>
          <li className="nav-link"><Link className="linked" to="/inventory">Inventory</Link> </li>
          <li className="nav-link"><Link className="linked" to="/profile">Profile</Link> </li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/inventory" element={<Inventory/>} />
      <Route path="/inventorycount" element={<InventoryCount/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/cars/:id" element={<CarId/>} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;
