import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Button,
        TextField } from "@mui/material";
import {DateTimePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import swal from 'sweetalert';

import ProtocolData from "../components/Protocols.json";

import '../style/userInput.css';

const UserInput = props => {
    const {
        UserFlow, setUserFlow, BreedType,
        setBreedType, SemenType, setSemenType,
        CowOrHeifer, setCowOrHeifer,
        SystemType , setSystemType, DateToStartBreeding,
        setDateToStartBreeding, GNRH , setGNRH, PG,
        setPG, BullTurnIn , setBullTurnIn,
        GestationPeriod , setGestationPeriod,
        parameters
    } = props;

    // set the data for each select options
    var CowOrHeiferData = ProtocolData.Parameters[0]["Cow or Heifer"];
    var BreedTypeData = ProtocolData.Parameters[0]["Breed Type"];
    var SystemTypeData = ProtocolData.Parameters[0]["System Type"];
    var SemenTypeData = ProtocolData.Parameters[0]["Semen Type"];
    var GNRHData = ProtocolData.Parameters[0].GnRH;
    var PGData = ProtocolData.Parameters[0].PG;

    /*var CowOrHeiferData = parameters[0]["Cow or Heifer"];
    var BreedTypeData = parameters[0]["Breed Type"];
    var SystemTypeData = parameters[0]["System Type"];
    var SemenTypeData = parameters[0]["Semen Type"];
    var GNRHData = parameters[0].GnRH;
    var PGData = parameters[0].PG;*/

    const CheckDataAndSubmit = () =>
    {
        if(
            BreedType   === "Select an Option" ||
            CowOrHeifer === "Select an Option" ||
            SemenType   === "Select an Option" ||
            SystemType  === "Select an Option" ||
            BullTurnIn  === 0 ||
            GestationPeriod  === 0
        ){
            swal( "Enter more info",{
                icon: "error",
              });
        }
        else{
            setUserFlow(UserFlow + 1)
        }
    }

    return(
        <div className='pageContainer'>
            <h1>Welcome to the Estrus Synchronization Planner</h1>
            <h2>Enter Details Below to Get Started</h2>
            <br />

            {/* Select Cow or Heifer */}
            <FormControl variant = "filled" className="Input-formcontrol-style" margin='normal'>
                <InputLabel >Cow or Heifer</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { CowOrHeifer || undefined  } 
                    onChange ={ ( event ) => {setCowOrHeifer(event.target.value)}} 
                >
                    {CowOrHeiferData.map( (name, index) => {
                        return <MenuItem key={index} value={name} >{name}</MenuItem>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Select Species */}
            <FormControl variant = "filled" className="Input-formcontrol-style">
                <InputLabel>Breed Type</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { BreedType || undefined  } 
                    onChange ={ ( event ) => {setBreedType(event.target.value)}} 
                >
                    {BreedTypeData.map( (name, index) => {
                        return <MenuItem key={index} value={name} >{name}</MenuItem>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Semen Type */}
            <FormControl variant = "filled" className="Input-formcontrol-style">
                <InputLabel>Semen Type</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { SemenType || undefined  } 
                    onChange ={ ( event ) => {setSemenType(event.target.value)}} 
                >
                    {SemenTypeData.map( (name, index) => {
                        return <MenuItem key={index} value={name} >{name}</MenuItem>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Select System Type */}
            <FormControl variant = "filled" className="Input-formcontrol-style">
                <InputLabel>System Type</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { SystemType || undefined  } 
                    onChange ={ ( event ) => {setSystemType(event.target.value)}} 
                >
                    {SystemTypeData.map( (name, index) => {
                        return <MenuItem key={index} value={name} >{name}</MenuItem>      
                    })}
                    
                </Select>
            </FormControl>
            <br />
            <br />
            <br />

            {/* Set Date and Time to start Breeding */}
            <InputLabel><strong>Date and Time to Start Breeding</strong></InputLabel>
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                
                value={DateToStartBreeding}
                onChange    = { ( value )=> setDateToStartBreeding( new Date(value) ) }
                renderInput={(params) => <TextField {...params} />}
                format      = "MM/dd/yyyy hh:mm aa"
                />
            </LocalizationProvider>
            <br />
            <br />
            <br />

            {/* Select GNRH Type */}
            <FormControl variant = "filled" className="Input-formcontrol-style">
                <InputLabel>GNRH</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { GNRH || undefined  } 
                    onChange ={ ( event ) => {setGNRH(event.target.value)}} 
                >
                    {GNRHData.map( (name, index) => {
                        return <MenuItem key={index} value={name} >{name}</MenuItem>      
                    })}
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Select PG Type */}
            <FormControl variant = "filled" className="Input-formcontrol-style">
                <InputLabel>PG</InputLabel>
                <Select 
                    className="InputStyle"
                    value    = { PG || undefined  } 
                    onChange ={ ( event ) => {setPG(event.target.value)}} 
                >
                    {PGData.map( (name, index) => {
                        return <MenuItem key={index} value={name} >{name}</MenuItem>      
                    })}
                </Select>
            </FormControl>
            <br />
            <br />

            {/* Set Bull Turn In */}
            <FormControl variant = "filled" className="Input-formcontrol-style">
                <InputLabel>Bull Turn In</InputLabel>
                <input 
                type="number"
                style={{textAlign:'center'}}
                    className="InputStyle"
                    value    = { BullTurnIn || undefined  } 
                    onChange ={ ( event ) => {setBullTurnIn(event.target.value)}} 
                />
                </FormControl>
            <br />
            <br />

            {/* Set Gestation Period */}
            <FormControl variant = "filled" className="Input-formcontrol-style">
                <InputLabel>Gestation Period</InputLabel>
                <input 
                type="number"
                style={{textAlign:'center'}}
                    className="InputStyle"
                    value    = { GestationPeriod || undefined  } 
                    onChange ={ ( event ) => {setGestationPeriod(event.target.value)}} 
                />
                </FormControl>
            <br />
            <br />
            <br />
         
            <Button 
                onClick = {() => {CheckDataAndSubmit()}}
                variant   = "outlined" 
                size      = "large"
                className='custom-btn-styling-stuff'
            >
            Submit
            </Button>

        </div>
    );
}

export default UserInput;