/**
 *  ProtocolPage.js
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
import { Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Database } from './Database.js';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import './ProtocolPage.css';

/**
 * Page to display a list of recommended protocals to select, and the date to start calendar
 */
class ProtocolPage extends React.Component
{
    /**
     * @function constructor - Constructor for the ProtocolPage class
     * @param {object} props - Includes the Name, Breed, SystemType and CowType 
     */
    constructor( props )
    {
        super( props );
        /**
         * State is used to store previous values to display to the user
         */
        this.state =
        {
           /** @type {Database} */ database: this.props.database,
            
            name:           this.props.name,
            breed:          this.props.breed,
            systemType:     this.props.systemType,
            cowType:        this.props.cowType,
            semen:          this.props.semen,
            id:             this.props.protocolId,
            protocolString: "",
            description:    this.props.description,
            startDate:      this.props.startDate,
        };
         
        this.updateProtocolId      = this.updateProtocolId.bind( this ); 
        this.updateStartDateTime   = this.updateStartDateTime.bind( this );
        this.lookupNameFromLabel   = this.lookupNameFromLabel.bind( this );
        this.updateParentStartDate = this.updateParentStartDate.bind( this );
        this.updateParentId        = this.updateParentId.bind( this );
    } /* end constructor() */


    /**
     * @function updateProtocolId - Update the selected protocol
     * @param {event} event
     */
    updateProtocolId( event )
    {   
        console.log( "type: " + typeof( event.target.value ) );
    
        let protocol    = this.state.database.getObjectById( event.target.value, Database.DATABASE_LIST_TYPE.PROTOCOLS );
        let description = "";
        let name;
        let id;        
        
        if( protocol != null )
        {
            console.log( protocol.name );

            description = protocol.description;
            name        = protocol.name;
            id          = protocol.id;
        }       
      
        this.setState( { protocolString: name } );        
        this.setState( { description: description } );
        this.props.setProtocol( id );
        this.props.setDescription( description );
    } /* updateProtocolId() */

    /**
     * @function updateStartDateTime - Updates the starting date and time
     * @param {Date} date - the start date 
     */
    updateStartDateTime( date )
    {
        console.log( "In updateStartDateTime" );
        console.log( "Prop:" + date );

        this.setState( { startDate: new Date( date ) } );

        console.log( "State:" + this.state.startDate );
        console.log( "Exiting updateStartDateTime" );
    } /* updateStartDateTime() */

    /**
     * @function updateParentStartDate - updates the parent app state
     */
    updateParentStartDate()
    {   
        console.log("In updateParentStartDate");

        this.props.setStartDateTime( this.state.startDate );

        console.log("Exiting updateParentStartDate");
    } /* updateParentStartDate() */

    /**
     * Updates the state of the parent component to the Starting Time selected
     * by the user in this class
     */
    updateParentStartDate()
    {   
        this.props.setStartDateTime( this.state.startDate );
    }


    /**
     * Updates the state of the parent component to the ID of the protocol
     * selected by the user in this class
     */
    updateParentId()
    {   
         this.props.setProtocol(this.state.id);
    }

    /**
     * Looks up a given name in the database given a label
     * @param {string} label - the label to look up
     * @param {DATABASE_LIST_TYPE} databaseListType - the database list to search
     * @return {string} - the name of the label, or Not Selected if not found
     */
    lookupNameFromLabel( label, databaseListType )
    {
        let name = this.state.database.getNameById( parseIdFromLabel( label ), databaseListType );
        if( name === "" )
        {
            name = <em>Not Selected</em>;
        }
        return name;
    } /* lookupNameFromLabel() */


    /**
     * @function render - Render function for the class
     * @returns {jsx} - a jsx compenent of protocol page
     */
    render()
    {        
        const recommendedProtocols = this.state.database.getRecommendedProtocols(
                                     parseIdFromLabel( this.state.semen ),
                                     parseIdFromLabel( this.state.systemType ),
                                     parseIdFromLabel( this.state.breed ),
                                     null,
                                     null,
                                     parseIdFromLabel( this.state.cowType ) ).map(
                                     ( protocol ) => 
                                        < MenuItem value = { protocol.id } > { protocol.name } </ MenuItem > );
        
        let styles = { width:  400,
                       height: 55 };

        return(
            <div>
                
                <h1>Select a Protocol</h1>
                <br/>            
                <ul>
                    <li><b>Schedule Name: </b> { this.state.name } </li>
                    
                    <br/>
                    
                    <li> <b>{ `${ Database.DATABASE_LIST_NAME.BREED }: ` }</b> 
                        { this.lookupNameFromLabel( this.state.breed, Database.DATABASE_LIST_TYPE.BREED ) } </li>

                    <li> <b>{ `${ Database.DATABASE_LIST_NAME.SYSTEM_TYPE }: ` }</b> 
                        { this.lookupNameFromLabel( this.state.systemType, Database.DATABASE_LIST_TYPE.SYSTEM_TYPE ) }</li>

                    <li><b>{ "Cow or Hiefer: " }</b> 
                        { this.lookupNameFromLabel( this.state.cowType, Database.DATABASE_LIST_TYPE.CATTLE ) }</li>

                    <li> <b>{ `${ Database.DATABASE_LIST_NAME.SEMEN }: ` }</b> 
                        { this.lookupNameFromLabel( this.state.semen, Database.DATABASE_LIST_TYPE.SEMEN ) }</li>
                </ul>            
                <br/>
                <form>
                    <FormControl variant="outlined">
                        
                        <InputLabel id = "demo-simple-select-outlined-label" >
                            { Database.DATABASE_LIST_NAME.PROTOCOLS } 
                        </InputLabel>
                        
                        <Select 
                            style    = { styles }
                            id       = "protocol"                    
                            onChange = { ( child ) => this.updateProtocolId( child ) }
                           // onClose = {()=>this.updateParentId()}
                            label    = "Protocol"
                            value = { this.state.id }>

                            <MenuItem value = "" ><em>None</em></MenuItem>
                            { recommendedProtocols }                        
                        </Select>

                    </FormControl>
                    
                    <p><b>Protocol Description:</b> { this.state.description }</p>           
                    
                    <br/>
                    <br/>
              
                    <MuiPickersUtilsProvider utils = { DateFnsUtils } >
                    <KeyboardDateTimePicker
                        variant     = "inline"
                        label       = "Select Intended Start Date"
                        value       = { this.state.startDate }
                        onChange    = { ( value )=> this.updateStartDateTime( value ) }
                        onClose     = { () => this.updateParentStartDate() }/>
                        
                        
                    </MuiPickersUtilsProvider>
   
                    <br/>
                    <br/>

                    <Button 
                        className = "sidebysidebutton" 
                        component = { Link } 
                        to        = "/selectionpage" 
                        variant   = "contained" 
                        size      = "large" 
                    >
                        Back
                    </Button>                    
                    <Button 
                        className = "sidebysidebutton"
                        component = { Link } 
                        to        = "/calendar"
                        variant   = "contained" 
                        size      = "large" > Next </Button>
                
                </form>
            </div>
            );
    } /* render() */   
} /* end ProtocolPage */
export default ProtocolPage;

/**
* @function parseIdFromLabel - parses a label to convert to number id
* @param {string} label - the label to parse, should be in format "SomeLabel-1"
* @returns {number} - the id as a number, null if unsuccessful
*/
function parseIdFromLabel( label )
{
    let sId   = label.split( '-' );
    let intId = null;
    
    if( sId.length != null && sId.length > 1 );
    {
        intId = parseInt( sId[1] );
        if( isNaN( intId ) )
        {
            // parse failed
            intId = null;
        }
    }
    return intId;
} /* parseIdFromLabel() */
