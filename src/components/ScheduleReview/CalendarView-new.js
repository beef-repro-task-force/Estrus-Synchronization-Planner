import React from 'react';
import { Button } from '@mui/material';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../style/calendarView.css';

const CalendarView = props => {
    const { ListOfInstrucitons, DateToStartBreeding, SynchronizationProtocol, GNRH, PG} = props;
    
    let ListOfInstructionsCalendarFormat = [...ListOfInstrucitons.map(instruction => {
        let tempDate = new Date(DateToStartBreeding)
        tempDate.setDate(DateToStartBreeding.getDate() + parseInt(instruction.OnDay))

        return({
            "date": `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`,
            "title": `${instruction.step1} ${instruction.step2} ${instruction.step3} ${instruction.step4} `
            
        })
    })]

    console.log({ListOfInstructionsCalendarFormat})
    
    return (
        <div className='calendar-container'>
            <h2>Protocol #{SynchronizationProtocol}</h2>

            <div className = "toPrint">
                    <FullCalendar   
                        plugins             = { [ dayGridPlugin ] }
                        //schedulerLicenseKey = { 'GPL-My-Project-Is-Open-Source' } 
                        initialView         = "dayGridMonth"
                        headerToolbar       = { {
                                                    left:   'prev',
                                                    center: 'title',
                                                    right:  'next'
                                                } }
                        //editable      = { false }
                        //initialEvents = { ListOfInstructionsCalendarFormat }
                        //eventContent  = { ListOfInstructionsCalendarFormat }
                        events        = { ListOfInstructionsCalendarFormat }
                        height        = { "auto" }
                        aspectRatio   = { 1 }
                        //style         = { {} }
                    />
                </div>
            <br/>
            <center>
            <Button 
                variant   = "contained" 
                size      = "large"
                onClick={() => {
                    window.print()
                }    
            }>
                Print
            </Button>
            </center>
        </div>
    )
}

export default CalendarView;