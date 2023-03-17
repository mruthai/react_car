import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home'
import Profile from './views/Profile';
import InventoryCount from './views/InventoryCount';
import Inventory from './views/Inventory'
import CarId from './views/CarId'
import Protected from "./components/Protected";
import { AuthContext } from './contexts/AuthProvider'

function App() {
  const { login, user, logout } = useContext(AuthContext)
  console.log(user)

  return (
    <BrowserRouter>
      <div className="master-nav">
        <div className="imageNavOne">
        </div>
        <nav className="nav-bar-container">
          <ul className="nav-bar">
            <li className="nav-link"><Link className="linked" to="/">Home</Link> </li>
            <li className="nav-link"><Link className="linked" to="/inventorycount">Inventory Counter</Link> </li>

            <li className="nav-link"><Link className="linked" to="/inventory">Inventory</Link> </li>
            <li className="nav-link"><Link className="linked" to="/profile">Profile</Link> </li>
          </ul>
        </nav>
        <div className="imageNavTwo">
        </div>
        <div>
          {
            (user.loggedIn) ?
              <>
                <button className="btn-entry" onClick={logout}> Logout</button>
                <p> {user.displayName}</p>

              </> :
              <button className="btn-entry" onClick={login}> Login</button>
          }
          {/* user.displayName --> display name is found in metadata when you console.log(user) */}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/inventorycount" element={<InventoryCount />} />
          <Route path="/cars/:id" element={<CarId />} />
          <Route path="/profile/" element={ <Protected user={user}>
          <Profile />
        <Route path="/inventory" element={<Inventory/>} />
        </Protected>
      } 
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
