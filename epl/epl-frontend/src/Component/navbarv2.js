import React from 'react';
import icon from '../Assets/Premier-League-Logo.png'
import profile from '../Assets/profile.png'
import "./navbar.css"

export default function NavBar() {
    return(
        <div className='navbar'>
            <img src={icon} alt="" className='logo'/>
            <ul className='ul-v2'>
                <li>Home</li>
                <li>Teams</li>
                <li>Players</li>
                <li>Standings</li>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='search' />
            </div>
            <img  className='profile' src={profile} />
        </div>
    )
}