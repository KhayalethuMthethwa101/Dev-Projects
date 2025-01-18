import React from 'react';
import icon from '../Assets/Premier-League-Logo.png'
import "./navbar.css"

export default function NavBar() {
    return(
        <nav className='nav-bar'>
            <img src={icon}></img>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Teams</a>
                </li>
                <li>
                    <a href="#">Players</a>
                </li>
                <li>
                    <a href="#">Standings</a>
                </li>
            </ul>
        </nav>
    )
}