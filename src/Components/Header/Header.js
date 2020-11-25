import React from 'react';
import './Header.css';
import logo from '../../Image/logo.png';

const Header = () => {
    return (
        <div className="header d-flex justify-content-center">
            <img src={logo} alt="" srcset=""/>
        </div>
    );
};

export default Header;