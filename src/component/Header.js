import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('LoginPage');

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
        <Link to="/update/:id">
          <p
            className={`${activeTab === '/about/:id' ? 'active' : ''}`}
            onClick={() => setActiveTab('/about/:id')}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
