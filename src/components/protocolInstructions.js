import React, { useState } from 'react';
import {Button, Breadcrumbs, Link, Typography, Grid} from "@mui/material";
import ListView from './listView';
import CalendarView from './calendarView';
import PInstructions from "./Protocols.json";
import swal from 'sweetalert';

const ics = require('ics');
var FileSaver = require('file-saver');


const ProtocolInstructions = props => {
    const {
        UserFlow, setUserFlow, DateToStartBreeding,
        SynchronizationProtocol, 
        GNRH, PG, BullTurnIn, GestationPeriod, SemenType
    } = props;

    //Variable to determine what page we are on
    const [CalendarOrListView, setCalendarOrListView ] = useState(0)
    
    let ListOfInstrucitons = PInstructions.Protocols[0][SynchronizationProtocol].instructions;
    let ListOfCalendarInstruction = PInstructions.Protocols[0][SynchronizationProtocol].calendar;

    //Create then download the iCalendar file
    const downloadICS = () =>{
        let listOfEvents = []

        ListOfInstrucitons.map(instruction =>{
            let description = (instruction.step1 === undefined ? "" : instruction.step1 ) + "\n" + 
                (instruction.step2 === undefined ? "" : instruction.step2 ) + "\n" +
                (instruction.step3 === undefined ? "" : instruction.step3 ) + "\n" +
                (instruction.step4 === undefined ? "" : instruction.step4 );

            let eventDictionary = {}
            let ProtocolEventDate = new Date(DateToStartBreeding);
            ProtocolEventDate.setDate(DateToStartBreeding.getDate() + parseInt(instruction.OnDay));

            //ics.createEvents api arguements found https://www.npmjs.com/package/ics
            eventDictionary["title"] = instruction.step1;
            eventDictionary["description"] = description;
            eventDictionary["start"] = [ProtocolEventDate.getFullYear(), ProtocolEventDate.getMonth() + 1 ,ProtocolEventDate.getDate() ,ProtocolEventDate.getHours() ,ProtocolEventDate.getMinutes()]
            eventDictionary["duration"] = {hours: 1}
            listOfEvents.push(eventDictionary)

        })

        const { error, value } = ics.createEvents(listOfEvents)
          
        if (error) {
        swal(error)
        console.log(error)
        return
        }
        //create file then download
        var file = new File([value], "EstrusScheduleDownload.ics", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
    }
    
    console.log(DateToStartBreeding)

    return (
        <>
        <br/>
        <Breadcrumbs className='bread-crumb-class'>
            <Link onClick={() => {setUserFlow(UserFlow -2)}}>
            Home
            </Link>
            <Link onClick={() => {setUserFlow(UserFlow -1)}}>
            Protocol
            </Link>
            <Typography aria-label="breadcrumb">
            Instructions
            </Typography>
        </Breadcrumbs>
        <br/>
        <div className='instruction-container'>
            <Grid container justifyContent="flex-end" className="calendar-btns">
                <Button  
                    size      = "large"
                    onClick={() => {
                        if(CalendarOrListView){setCalendarOrListView(0)}
                        else{setCalendarOrListView(1)}
                        
                    }}
                >View {CalendarOrListView ? "List" : "Calendar"}
                </Button>
                <Button 
                    size      = "large"
                    onClick={() => {
                        downloadICS();
                    }}
                >iCalendar file (.ics)
                </Button>
                
            </Grid>
        </div>

        {/* Show the Calendar view or the List View ternary */}
        {CalendarOrListView === 0 ?
            <ListView 
                UserFlow={UserFlow}
                setUserFlow = {setUserFlow}
                ListOfInstrucitons = {ListOfInstrucitons}
                DateToStartBreeding={DateToStartBreeding}
                SynchronizationProtocol = {SynchronizationProtocol}
                GNRH={GNRH} 
                PG={PG} 
                BullTurnIn={BullTurnIn} 
                GestationPeriod={GestationPeriod}
                SemenType={SemenType}
            />
            : 
            <CalendarView
                ListOfCalendarInstruction = {ListOfCalendarInstruction}
                DateToStartBreeding={DateToStartBreeding}
                SynchronizationProtocol = {SynchronizationProtocol}
                GNRH={GNRH} 
                PG={PG} 
                BullTurnIn={BullTurnIn} 
                GestationPeriod={GestationPeriod}
                SemenType={SemenType}
            />
        }
        </>
    )

}

export default ProtocolInstructions;