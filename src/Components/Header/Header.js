import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/cart">Cart</a>
                <a href="/invantory">Invantory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;