/**
 *  Footer.js
 *  Copyright (C) 2021  Andrew Stene
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *   
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * React component that represents the static footer at the 
 * bottom of the page
 */
function Footer()
{
    return (
        <div className= "Footer">
            <ul>
            <li><Link to = "/help" >Help</Link></li>
            <li><Link to = "/reference" >Reference</Link></li>
            <li><a href = "https://beefrepro.org" >Beef Reproduction Task Force Homepage</a></li>
            </ul>
        </div>
    );
} /* Footer() */
export default Footer;