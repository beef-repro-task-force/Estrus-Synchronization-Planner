import React from 'react';
import { Button } from '@mui/material';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../style/calendarView.css';

const CalendarView = props => {
    const { ListOfCalendarInstruction, DateToStartBreeding, SynchronizationProtocol, SemenType } = props;

    let timeTmp = DateToStartBreeding;
    let implementEda = "";
    let useSexedSemen = "";
    let useSexedSemen2 = "";
    let useSexedSemen3  = "";
    let aiFemales = "";
    let plusSixTime = DateToStartBreeding;
    plusSixTime = plusSixTime.setHours(plusSixTime.getHours() + 6);

    if(SemenType === "Conventional & Sexed"){
        implementEda = "& Implement EDA"
        useSexedSemen = "*Use sexed semen only on females showing estrus"
        useSexedSemen2 = "*Use sexed semen on estrous females"
        useSexedSemen3 = "*Use sexed semen on estrous females"
        aiFemales = "  *Inject 2cc Cystorelin (GnRH) & AI nonestrous females with conventional semen";
    }else{
        implementEda = "";
        useSexedSemen = "";
        useSexedSemen2 = "AI estrous females";
        useSexedSemen3 = ""
        aiFemales = "*AI remaining females. Inject 2cc Cystorelin (GnRH) to nonestrous females";
    }

    //search instruction for <<ai_after_standing_heat>>
    ListOfCalendarInstruction.forEach(item => {
        for (let param in item){
            if(item[param] === "<<implementEda>>") item[param] = implementEda;
            if(item[param] === "<<useSexedSemen>>") item[param] = useSexedSemen;
            if(item[param] === "<<useSexedSemen2>>") item[param] = useSexedSemen2;
            if(item[param] === "<<useSexedSemen3>>") item[param] = useSexedSemen3;
            if(item[param] === "<<aiFemales>>") item[param] = aiFemales;
            if(item[param] === "<<selectedTime>>") item[param] = DateToStartBreeding;
            if(item[param] === "<<plusSixTime>>") item[param] = plusSixTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            
            /*if(SynchronizationProtocol === "8"){
                if(item[param] === "<<protocol_8_time_change>>") item[param] = "Continue feeding until " + (changingTime.getMonth() + 1) + "/" + changingTime.getDay() + "/" + changingTime.getFullYear() + ".";
            }*/
        }
    });

    let calEventArr = [];

    ListOfCalendarInstruction.forEach((instruction)=>{
        let tempDate = new Date(timeTmp)
        tempDate.setDate(timeTmp.getDate() + parseInt(instruction.OnDay))
        for (let item in instruction) {
            if(item !== "OnDay"){
                let newItemObj = {
                    "title": instruction[item],
                    "display": "auto",
                    "start": `${tempDate.getFullYear()}-${(tempDate.getMonth() + 1).toString().padStart(2, '0')}-${tempDate.getDate().toString().padStart(2, '0')}`
                }
                calEventArr.push(newItemObj)
            }
        }
    })

    console.log(DateToStartBreeding)
    calEventArr.reverse();

    return (
        <div className='calendar-container'>
            <h2>Protocol #{SynchronizationProtocol}</h2>

            <div>
                    <FullCalendar   
                        plugins             = { [ dayGridPlugin ] }
                        initialView         = "dayGridMonth"
                        headerToolbar       = { {
                                                    left:   'prev',
                                                    center: 'title',
                                                    right:  'next'
                                                } }
                        //editable      = { true }
                        // initialEvents = { ListOfInstructionsCalendarFormat }
                        //eventContent  = { calEventArr }
                        events        = { calEventArr }
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