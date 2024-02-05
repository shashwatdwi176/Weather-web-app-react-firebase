import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('LoginPage');
const location = useLocation();

useEffect(()=>{
  if(location.pathname === "/"){
    setActiveTab('/')
  }else if(location.pathname === "/home"){
    setActiveTab('/home')
  }
  else if(location.pathname === "/update/:id"){
    setActiveTab('/update/:id')
  }
  else if(location.pathname === "/view/:id"){
    setActiveTab('/view/:id')
  }
  else if(location.pathname === "/adduser/:id"){
    setActiveTab('/adduser/:id')
  }
  
})
  return (
    <div className="header">
      <p className="logo">Weather App</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === '/' ? 'active' : ''}`}
            onClick={() => setActiveTab('/')}
          >
            Login Page
          </p>
        </Link>

        <Link to="/home">
          <p
            className={`${activeTab === '/home' ? 'active' : ''}`}
            onClick={() => setActiveTab('/home')}
          >
            Home
          </p>
        </Link>
        <Link to="/adduser/:id">
          <p
            className={`${activeTab === '/adduser/:id' ? 'active' : ''}`}
            onClick={() => setActiveTab('/adduser/:id')}
          >
            Add User
          </p>
        </Link>
        <Link to="/update/:id">
          <p
            className={`${activeTab === '/update/:id' ? 'active' : ''}`}
            onClick={() => setActiveTab('/update/:id')}
          >
            Update
          </p>
        </Link>
        <Link to="/view/:id">
          <p
            className={`${activeTab === '/view/:id' ? 'active' : ''}`}
            onClick={() => setActiveTab('/view/:id')}
          >
            View
          </p>
        </Link>
     
      </div>
    </div>
  );
};

export default Header;
