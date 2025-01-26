import React from 'react';
import './NavBar.css'
function NavBar() {
    return (
        <div className="header">
            <a href="#" className='logo'>LOGO</a>
            <nav className='navbar'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Categories</a>
                <a href="">Careers</a>
            </nav>
        </div>
    );
}



export default NavBar;