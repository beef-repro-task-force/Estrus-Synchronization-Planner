import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ListView from './ListView';
import CalendarView from './CalendarView';
import ProtocolInstructions from "./ProtocolInstructions.json"
import swal from 'sweetalert';
import "./ListView.css"
const ics = require('ics')
var FileSaver = require('file-saver');

const ParentView = props => {
    const {
        UserFlow, setUserFlow, DateToStartBreeding,
        SynchronizationProtocol, 
        GNRH, PG, BullTurnIn, GestationPeriod 
    } = props;

    //Variable to determine what page we are on
    const [CalendarOrListView, setCalendarOrListView ] = useState(0)

    //List of instructions for this protocol 
    //example protocol 38 has 5 set of instructions for 5 different days 
    //these sets are broken down into steps 1 ... 4 
        //Add expected birth date to list of instructions
    let ListOfInstrucitons = [...ProtocolInstructions[SynchronizationProtocol] ,  {"OnDay" : GestationPeriod.toString(), "step1" : "Expected Birth Date" }];     

    //Add bull turn in day
    /*let BullTurnInDict = {"OnDay" : BullTurnIn.toString() , "step1" : "Bull Turn In Begins " }

        //Find where to place Bull Turn In Date in the list of events within protocol
        let TempIndex = 0;
        for(let i = 0; i < ListOfInstrucitons.length; i++){
            if(BullTurnIn < parseInt(ListOfInstrucitons[i].OnDay)){
                TempIndex = i ;
                break;
            }
        }
        ListOfInstrucitons.splice(TempIndex, 0, BullTurnInDict)*/

    //Create then download the iCalendar file
    const downloadICS = () =>{
        let listOfEvents = []

        ListOfInstrucitons.map(instruction =>{
            let description = (instruction.step1 === undefined ? "" : instruction.step1 ) + 
                (instruction.step2 === undefined ? "" : instruction.step2 ) +
                (instruction.step3 === undefined ? "" : instruction.step3 ) +
                (instruction.step4 === undefined ? "" : instruction.step4 );

            let eventDictionary = {}
            let ProtocolEventDate = new Date(DateToStartBreeding);
            ProtocolEventDate.setDate(DateToStartBreeding.getDate() + parseInt(instruction.OnDay));

            //ics.createEvents api arguements found https://www.npmjs.com/package/ics
            eventDictionary["title"] = "Estrus Event"
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

    return (
        <>
        <div className='instruction-container'>
            <Button 
                variant   = "contained" 
                size      = "large"
                onClick={() => {
                    setUserFlow(UserFlow -1)
                }}
            >Back
            </Button>

            <Button 
                variant   = "contained" 
                size      = "large"
                onClick={() => {
                    if(CalendarOrListView){setCalendarOrListView(0)}
                    else{setCalendarOrListView(1)}
                    
                }}
            >View {CalendarOrListView ? "List" : "Calendar"}
            </Button>

            <Button 
                variant   = "contained" 
                size      = "large"
                onClick={() => {
                    downloadICS();
                }}
            >iCalendar file (.ics)
            </Button>
        </div>

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
        <br /> 

        {/* Show the Calendar view or the List View ternary */}
        {CalendarOrListView === 0 ?
            <ListView 
                ListOfInstrucitons = {ListOfInstrucitons}
                DateToStartBreeding={DateToStartBreeding}
                SynchronizationProtocol = {SynchronizationProtocol}
                GNRH={GNRH} 
                PG={PG} 
                BullTurnIn={BullTurnIn} 
                GestationPeriod={GestationPeriod}
            />
            : 
            <CalendarView
                ListOfInstrucitons = {ListOfInstrucitons}
                DateToStartBreeding={DateToStartBreeding}
                SynchronizationProtocol = {SynchronizationProtocol}
                GNRH={GNRH} 
                PG={PG} 
                BullTurnIn={BullTurnIn} 
                GestationPeriod={GestationPeriod}
            />
        }
        </>
    )

}

export default ParentView;