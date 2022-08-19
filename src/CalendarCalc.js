/**
 *  CalendarCalc.js
 *  Copyright (C) 2021  Ben Amos
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

/******************************
 *          IMPORTS
 ******************************/

 import { Database } from './Database.js';


/******************************
 *          EXPORT
 ******************************/

export {
    calculateProtocolCalendar,    
    ScheduledEvent
};

/*********************************
 *        PUBLIC FUNCTIONS       *
 *********************************/

 /**
  * @function calculateProtocolCalendar - Creates a new CowSchedulingCalendar based on a protocol
  * @param {Protocol} protocol - the protocol to create the calendar from
  * @param {Date} dateOffset - the date to start the calendar
  * @param {Database} database - A database object which contains all the protocols
  * @param {String} name name of the group
  * @returns {ScheduledEvent[]} - A calendar of all the different tasks to be displayed 
  */
 function calculateProtocolCalendar( protocol, dateOffset, database, name )
 {
    let events = [];

    if( protocol === null )
    {
        console.log("protocol is null");
        return null;
    }
    
    if(dateOffset == null)
    {
        dateOffset = new Date();
    }

    for( let i = 0; i < protocol.tasks.length; i++ )
    {
        let task = database.getUserTaskById( protocol.tasks[i].taskId );
        if( task == null )
        {
            return null;
        }

        let startTime  = offsetDate( dateOffset, protocol.tasks[i].secondsSinceStart );
        let endTime    = offsetDate( dateOffset, protocol.tasks[i].secondsSinceStart + task.taskLength );
        let groupTitle = `[GROUP: ${ name.toUpperCase() }] ${ task.name }`;

        console.log("Start Time:" + startTime + "\nEnd Time: " + endTime);


        events.push( new ScheduledEvent( i, groupTitle, startTime, endTime ) );        

    }
    return events;

} /* calculateprotocolCalendar() */

/**********************************
 *          PUBLIC CLASS          *
 **********************************/

/**
* An event that is scheduled
*/
class ScheduledEvent
{
    /**
    * @function constructor - constructs a new scheduled event
    * @param {number} id - the id of the event
    * @param {string} title - the title of the event       
    * @param {Date} start - the starting time of when the event is to start 
    * @param {Date} end - the ending time when the event is supposed to end 
    */
    constructor( id, title, start, end )
    {         
        this.id    = id;
        this.title = title;         
        this.start = start;
        this.end   = end;
    } /* constructor() */
} /* class ScheduledEvent */

/***************************
*     PRIVATE FUNCTIONS   *
***************************/

/**
* @function offsetDate - returns a new date object at a given date offset by an amount of seconds 
* @param {Date} date - the date to offset
* @param {number} seconds - the number of seconds to offset
* @returns {Date} - the new date
*/
function offsetDate( date, seconds )
{
    const SECONDS_TO_MILLISECONDS = 1000;   
    return new Date( date.getTime() + seconds * SECONDS_TO_MILLISECONDS );
} /* offsetDate() */