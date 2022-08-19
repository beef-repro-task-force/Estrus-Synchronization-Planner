import React from 'react';
import { Button } from '@material-ui/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const CalendarView = props => {
    const { ListOfInstrucitons, DateToStartBreeding, SynchronizationProtocol, GNRH, PG} = props;
    
    let ListOfInstructionsCalendarFormat = [...ListOfInstrucitons.map(instruction => {
        let tempDate = new Date(DateToStartBreeding)
        tempDate.setDate(DateToStartBreeding.getDate() + parseInt(instruction.OnDay))

        return({
            "title": `${instruction.step1} ${instruction.step2} ${instruction.step3} ${instruction.step4} `,
            "date": `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`,
        })
    })]
    
    return (
        <>
            <h2>Protocol #{SynchronizationProtocol}</h2>

            <div className = "toPrint">
                    <FullCalendar   
                        plugins             = { [ dayGridPlugin ] }
                        schedulerLicenseKey = { 'GPL-My-Project-Is-Open-Source' } 
                        initialView         = "dayGridMonth"
                        headerToolbar       = { {
                                                    left:   'prev,next today',
                                                    center: 'title',
                                                    right:  'dayGridMonth'
                                                } }
                        editable      = { false }
                        initialEvents = { ListOfInstructionsCalendarFormat }
                        height        = { "auto" }
                        editable
                        aspectRatio   = { 1 }
                        style         = { {} }
                    />
                </div>
            <br/>
            <Button 
                variant   = "contained" 
                size      = "large"
                onClick={() => {
                    window.print()
                }    
            }>
                Print
            </Button>
        </>
    )
}

export default CalendarView;