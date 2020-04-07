import React from 'react'
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div>
        <nav>
        <ul>
        <li>
        <Link to="/Home.js">Home</Link>
        </li>
        <li>
        <Link to="/country-dashboard-app">CountryList</Link>
        </li>
        </ul>
        </nav>
        </div>
        )
}