/**
 *  Help.js
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
import React , { useState }from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import AbbreviationsTable from './AbbreviationTable';
import DetectionIneminationTypes from './DetectionInseminationTypes';
import BreedingTime from './BreedingTime';

/**
 * React component that implements the help page
 */
const Help = () => {
    
    const [ AbbreviationCollapse, setAbbreviationCollapse] = useState(true)

    const AbvToggle = () => {
        setAbbreviationCollapse(!AbbreviationCollapse)
    }

    return(
        <>
            <h1>Helpful Tips </h1>

            <h3>Tips for Abbreviations</h3>
            <Button
               color     = "defualt" 
               variant   = "contained" 
               size      = "Large" 
                onClick={() => {AbvToggle()}}> {AbbreviationCollapse ? "Close" : "View"} List of Abbreviations</Button>
            <br />
            <br />
            {AbbreviationCollapse ? <AbbreviationsTable /> : null}

            <h3>Tips for Time</h3>
            <BreedingTime />

            <h3>Tips for Insemination Types</h3>
            <DetectionIneminationTypes />
            <br />
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
        </>
    );
} 
export default Help;