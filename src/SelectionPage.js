/**
 *  SelectionPage.js
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
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button} from '@material-ui/core';
import { Link } from 'react-router-dom'
import { Database } from './Database.js';

/**
 * Class that represents the page where a user will select the parameters
 * of their desired system
 */
class SelectionPage extends React.Component
{
    /**
    * Constructor for the SelectionPage class
    * @param {object} props - Props include the Breed, Type of system and Type of cow, and semen 
    */
    constructor( props )
    {
        super( props );

        this.state =
        {
            /** @type {Database} */ database: this.props.database,

            breed:      props.breed,
            systemType: props.systemType,
            cowType:    props.cowType,
            semen:      props.semen,
            pg:         props.pg,
            gnrh:       props.gnrh
        };
   
        this.updateParentCowType    = this.updateParentCowType.bind( this );
        this.updateParentBreed      = this.updateParentBreed.bind( this );
        this.updateParentSystemType = this.updateParentSystemType.bind( this );
        this.updateParentSemen      = this.updateParentSemen.bind( this );
        this.updateParentPG         = this.updateParentPG.bind( this );
        this.updateParentGnRH       = this.updateParentGnRH.bind( this );
        this.verifyInput            = this.verifyInput.bind( this );
        this.mapListToMenuItems     = this.mapListToMenuItems.bind( this );
    } /* end constructor() */

    /**
    * @function getDerivedStateFromProps
    * @param {*} props 
    * @param {*} state 
    */
    static getDerivedStateFromProps( props, state )
    {
        return ( { breed:      props.breed, 
                   systemType: props.systemType, 
                   cowType:    props.cowType } );
    } /* getDerivedStateFromProps() */

    /**
    * @function updateParentCowType - Function to update both the state of the SelectionType
    * as well as the state contained in App.js
    * if the system being used is for cows or heifers
    * @param {string} cowType - Either a cow or heifer 
    */
    updateParentCowType( cowType )
    {
        this.setState( { cowType: cowType } );
        this.props.setCowType( cowType );
    } /* updateParentCowType() */

    /**
    * @function updateParentBreed - Function to update both the state of the SelectionType
    * as well as the state contained in App.js
    * of the breed of cattle being used
    * @param {string} breed - The breed of cattle the user has selected 
    */
    updateParentBreed( breed )
    {    
        this.setState( { breed: breed } );
        this.props.setBreed( breed );
    } /* updateParentBreed() */  

    /**
    * @function updateParentSystemType - Function to update both the state of the SelectionType
    * as well as the state contained in App.js
    * of the System to be used
    * @param {string} sys - The System to update the state to 
    */
    updateParentSystemType( sys )
    {
        this.setState( { systemType: sys } );
        this.props.setSystemType( sys );
    } /* updateParentSystemType() */

    /**
    * @function updateParentSemen - Function to update both the state of the SelectionType
    * as well as the state contained in App.js
    * of the Semen to be used
    * @param {string} semen - the semen to update to
    */
    updateParentSemen( semen )
    {
        this.setState( { semen: semen } );
        this.props.setSemen( semen );
    } /* updateParentSemen() */

    /**
     * @function updateParentPG updates both state of the selection type
     * as well as the state contained in App.js of the PG to use
     * @param {string} pg - the pg to use
     */
    updateParentPG( pg )
    {
        this.setState( { pg: pg } );
        this.props.setPG( pg );
    } /* updateParentPG() */

    /**
     * @function updateParentGnRH - updates both state of the selection type
     * as well as the state contained in App.js of the GnRH to use
     * @param {string} gnrh - the gnrh to use
     */
     updateParentGnRH( gnrh )
     {
         this.setState( { gnrh: gnrh } );
         this.props.setGnRH( gnrh );
     } /* updateParentGnRH() */

    /**
    * Ensures that all inputs on a page contain some value
    * @param {event} event - The event raised when a user clicks the next button 
    */
    verifyInput( event )
    {
        event.preventDefualt();
        console.log( "here" );
    } /* verifyInput() */

    /**
    * @function mapListToMenuItems - maps a given database list to array of menu items
    * @param {DATABASE_LIST_TYPE} databaseListType - which list to map
    * @return {MenuItem[]} - an array of menu items 
    */
    mapListToMenuItems( databaseListType )
    {
        return ( this.state.database.getDatabaseListElements( databaseListType ).map( 
                 ( item ) => 
                  < MenuItem
                    key   = { item.name }
                    value = { this.state.database.getDatabaseName( databaseListType ) + "-" + item.id }
                  > 
                    { item.name } 
                  </MenuItem > ));
    } /* mapListToMenuItems() */

    /**
    * @function render - The render function for the SelectionPage class
    * @returns {jsx} - a jsx component of the selection page
    */
    render()
    {
        let styles = { width:  400,
                       height: 55 };
    
        return (
            <div>
                <h1>Select { Database.DATABASE_LIST_NAME.BREED } Type</h1>
                <form onSubmit = { ( event ) => this.verifyInput( event ) } >
                
                <FormControl variant = "outlined" >
                    <InputLabel> { Database.DATABASE_LIST_NAME.BREED } </InputLabel>
                    <Select 
                        style    = { styles }
                        value    = { this.state.breed }
                        onChange = { ( event ) => this.updateParentBreed( event.target.value ) } 
                    >
                        <MenuItem value = "" ><em>None</em></MenuItem>
                        { this.mapListToMenuItems( Database.DATABASE_LIST_TYPE.BREED ) }
                    </Select>
                </FormControl>

                <br/>
                <br/>

                <FormControl variant = "outlined" >
                    <InputLabel>Cow or Heifer</InputLabel>
                    <Select 
                        style    = { styles } 
                        name     = "cow" 
                        value    = { this.state.cowType } 
                        onChange ={ ( event ) => this.updateParentCowType( event.target.value ) } 
                    >
                        <MenuItem value = "" ><em>None</em></MenuItem>
                        { this.mapListToMenuItems( Database.DATABASE_LIST_TYPE.CATTLE ) }
                    </Select>
                </FormControl>
                
                <br/>
                <br/>
                
                <FormControl variant = "outlined" >
                    <InputLabel> { Database.DATABASE_LIST_NAME.SYSTEM_TYPE } </InputLabel>
                    <Select 
                        style    = { styles } 
                        name     = { Database.DATABASE_LIST_NAME.SYSTEM_TYPE } 
                        value    = { this.state.systemType } 
                        onChange = { ( event ) => this.updateParentSystemType( event.target.value ) } 
                    >
                        <MenuItem value = "" ><em>None</em></MenuItem>
                        { this.mapListToMenuItems( Database.DATABASE_LIST_TYPE.SYSTEM_TYPE ) }                
                    </Select>
                </FormControl>
                
                <br/>
                <br/>
                
                <FormControl variant = "outlined" >
                    <InputLabel> { Database.DATABASE_LIST_NAME.SEMEN } </InputLabel>
                    <Select 
                        style    = { styles } 
                        name     = { Database.DATABASE_LIST_NAME.SEMEN } 
                        value    = { this.state.semen } 
                        onChange = { ( event ) => this.updateParentSemen( event.target.value ) } 
                    >
                        <MenuItem value = "" ><em>None</em></MenuItem>
                        { this.mapListToMenuItems( Database.DATABASE_LIST_TYPE.SEMEN ) }                
                    </Select>
                </FormControl>
                
                <br/>
                <br/>

                <h2>Select Products (optional)</h2>
                <FormControl variant = "outlined" >
                    <InputLabel> { Database.DATABASE_LIST_NAME.P_G } </InputLabel>
                    <Select 
                        style    = { styles }
                        name     = { Database.DATABASE_LIST_NAME.P_G } 
                        value    = { this.state.pg } 
                        onChange = { ( event ) => this.updateParentPG( event.target.value ) } 
                    >
                        <MenuItem value = "" ><em>None</em></MenuItem>
                        { this.mapListToMenuItems( Database.DATABASE_LIST_TYPE.P_G ) }                
                    </Select>
                </FormControl>
                
                <br/>
                <br/>

                <FormControl variant = "outlined" >
                    <InputLabel> { Database.DATABASE_LIST_NAME.GN_RH } </InputLabel>
                    <Select 
                        style    = { styles } 
                        name     = { Database.DATABASE_LIST_NAME.GN_RH } 
                        value    = { this.state.gnrh } 
                        onChange = { ( event ) => this.updateParentGnRH( event.target.value ) } 
                    >
                        <MenuItem value = "" ><em>None</em></MenuItem>
                        { this.mapListToMenuItems( Database.DATABASE_LIST_TYPE.GN_RH ) }                
                    </Select>
                </FormControl>
                
                <br/>
                <br/>

                <Button 
                    className = "sidebysidebutton" 
                    component = { Link } 
                    to        = "/namepage" 
                    variant   = "contained" 
                    size      = "large" 
                >
                    Back
                </Button>
                <Button 
                    className = "sidebysidebutton"  
                    component = { Link } 
                    to        = "/protocol" 
                    variant   = "contained" 
                    size      = "large"
                >
                    Next
                </Button>
                
                </form>
            </div>
          );
      } /* render() */
} /* end SelectionPage */
export default SelectionPage;