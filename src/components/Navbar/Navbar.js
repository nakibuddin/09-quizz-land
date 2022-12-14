import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (        
        <div className='navbar'>            
            <div>
                <h2>QuizzLand</h2>
            </div>
            <div>
                <NavLink className={ ({isActive}) => isActive ? 'active' : undefined } to='/home'>Home</NavLink>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>                
            </div>
        </div>
    );
};

export default Navbar;