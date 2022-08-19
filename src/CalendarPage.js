/**
 *  CalendarPage.js
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
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { calculateProtocolCalendar } from './CalendarCalc';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Database } from './Database'
import ReactToPrint from 'react-to-print';
import adaptivePlugin from '@fullcalendar/adaptive';
import { ICalendar } from 'datebook';
import './CalendarPage.css';


/**
 * A react component to display the steps of the desired protocol 
 * in a calendar type format
 */
class CalendarPage extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state =
        {   
            protocolName: this.props.protocolName,
            protocolId:   this.props.protocolId,
            startingDate: this.props.startDate,
            database:     this.props.db
        }

        this.exportCalendar = this.exportCalendar.bind( this );
    } /* end constructor() */
    
    /**
     * Converts and downloads the calenders array into an ics file
     * fires when the 'Download Calendar' button is clicked
     * @param {array} events 
     */
    exportCalendar( events )
    {
        let first;
        if( events[0] !== null )
        {
            first = events[0];
        }
       
        const config = { 
                          title: first.title, 
                          start: first.start, 
                          end:   first.end 
                       };
        const icalendar = new ICalendar( config );
        if( events.length > 1 )
        {
            for( let i = 1; i < events.length; i++ )
            {
                let cal = new ICalendar( { 
                                            title: events[i].title, 
                                            start: events[i].start, 
                                            end:   events[i].end 
                                         } );
                
                icalendar.addEvent( cal );
            }
        }
        icalendar.download();
    } /* exportCalendar() */

    /**
     * Render function for the class
     */
    render()
    {
        let protocol = this.state.database.getObjectById( this.state.protocolId, Database.DATABASE_LIST_TYPE.PROTOCOLS );
        let results  = calculateProtocolCalendar( protocol, this.state.startingDate, this.state.database, this.state.protocolName );
        
        // if CalculateProtocolCalendar returns null for some reason 
        // Fills the array with placeholder data
        if( results === null || results.length === 0 )
        {
            results = { 
                         id:        0, 
                         startDate: Date.now(), 
                         title:     'empty' 
                      };
        }
        const INITIAL_EVENTS = results;
        console.log( INITIAL_EVENTS );

        return (
            <div>

                <br/>

                <ReactToPrint
                    trigger = { () => 
                                    <Button 
                                        className = "sidebysidebutton" 
                                        variant   = "contained" 
                                        size      = "large" 
                                    >
                                            Print this out
                                    </Button>
                              }
                    content = { () => this.componentRef }    
                />
                <Button 
                    className = "sidebysidebutton"   
                    variant   = "contained"  
                    size      = "large" 
                    onClick   = { () => this.exportCalendar(INITIAL_EVENTS) } 

                > 
                    Download Calendar
                </Button>
                <Button 
                    className = "sidebysidebutton" 
                    component = { Link } 
                    to        = "/listview" 
                    color     = "default" 
                    variant   = "contained" 
                    size      = "large"
                >
                    List View
                </Button>

                <div className = "toPrint">
                    <FullCalendar   
                        plugins             = { [ dayGridPlugin, adaptivePlugin ] }
                        schedulerLicenseKey = { 'GPL-My-Project-Is-Open-Source' } 
                        initialView         = "dayGridMonth"
                        headerToolbar       = { {
                                                    left:   'prev,next today',
                                                    center: 'title',
                                                    right:  'dayGridMonth'
                                                } }
                        editable      = { false }
                        initialEvents = { INITIAL_EVENTS }
                        height        = { "auto" }
                        aspectRatio   = { 1 }
                        ref           = { ( el ) => ( this.componentRef = el ) }
                        style         = { {} }
                    />
                </div>

                <br/>
                <br/>

                <Button 
                    className = "sidebysidebutton" 
                    component = { Link } 
                    to        = "/protocol" 
                    color     = "defualt" 
                    variant   = "contained" 
                    size      = "large" 
                >
                    Back
                </Button>
                <Button 
                    className = "sidebysidebutton" 
                    component = { Link } 
                    to        = "/"
                    color     = "defualt"
                    variant   = "contained" 
                    size      = "large"
                >
                    Next
                </Button>
            </div>
        );
    } /* redner() */
} export default CalendarPage