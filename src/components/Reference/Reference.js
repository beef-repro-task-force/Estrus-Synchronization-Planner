/**
 *  Reference.js
 *  Copyright (C) 2021  Andrew Stene, Ben Amos
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
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import bp from './bp.png';
import hp from './hp.png';
import ssp from './ssp.png'
import "./Reference.css"

/**
 * @function Reference - React component that represents a refernce type page
 */
const  Reference = () =>
{
    const [BPSize, setBPSize] = useState(false)
    const [SSPSize, setSSPSize] = useState(false)
    const [HPSize, setHPSize] = useState(false)
    
    const EnlargeBP = () => {
        setBPSize(!BPSize)
    }

    const EnlargeHP = () => {
        setHPSize(!HPSize)
    }

    const EnlargeSSP = () => {
        setSSPSize(!SSPSize)
    }
    
    return(
        <div>
            <h1>Reference Information</h1>
            <h2>Click on the Image to Enlarge</h2>
            {BPSize ? 
                <img onClick={EnlargeBP} className="large" src = { bp } alt = "bp" />    
                : 
                <img onClick={EnlargeBP} className="normal" src = { bp } alt = "bp" />    
            }
            <br />

            {HPSize ? 
                <img onClick={EnlargeHP} className="large" src = { hp } alt = "hp" />    
                : 
                <img onClick={EnlargeHP} className="normal" src = { hp } alt = "hp" />    
            }
            <br />

            {SSPSize ? 
                <img onClick={EnlargeSSP} className="large" src = { ssp } alt = "ssp" />    
                : 
                <img onClick={EnlargeSSP} className="normal" src = { ssp } alt = "sp" />    
            }
            <br/>

            <Button 
                className = "sidebysidebutton" 
                component = { Link } 
                to        = "/" 
                color     = "defualt" 
                variant   = "contained" 
                size      = "small" 
            >
                Home
            </Button>            
        </div>
    );
}
export default Reference;