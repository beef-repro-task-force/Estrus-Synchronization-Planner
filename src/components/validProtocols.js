import {React, useCallback, useEffect, useState} from "react";
import { FormControl, InputLabel, MenuItem, Select, Button,
        List, ListItem, ListItemButton, ListItemText,
        Box, ButtonGroup } from "@mui/material";
import swal from 'sweetalert';
import ProtocolData from "../components/Protocols.json";

import '../style/validProtocols.css';

const ValidProtocols = props => {
    const {
        UserFlow, setUserFlow, 
        BreedType, CowOrHeifer, SemenType,
        SystemType, SynchronizationProtocol, setSynchronizationProtocol,
        preferList, setPreferList, lessPreferList, setLessPreferList
    } = props;

    // create a rules engine and grab the rules
    const { Engine } = require('json-rules-engine');
    const engineRules = require('../components/test-rules.json');

    var SynchProtocolTitleData = ProtocolData.Protocols[0];
    let selectedProtocolHeader = "";  
    
    // object variable to hold the user's inputs and compare it to the rules
    const factInput = {
        "BreedType" : BreedType,
        "SemenType" : SemenType,
        "SystemType": SystemType
    }  

    switch(SystemType){
        case "Estrus AI":
            selectedProtocolHeader = "Heat Detect & Breed";
            break;
        case "Estrus AI + Clean-up AI":
            selectedProtocolHeader = "Heat Detect & Clean-up AI";
            break;
        case "Fixed-Time AI":
            selectedProtocolHeader = "Fixed-Time AI";
            break;
        case "Split Time AI":
            selectedProtocolHeader = "Split Time AI";
            break;
        default: 
            break;
    }

    // this is for the prefer systems
    useEffect(() => {

        const fetchData1 = async () => {

            let protocolsArr = [];

                for(let i = 1; i <= Object.keys(engineRules[`${CowOrHeifer} Preferred Systems`]).length; i ++){
                    let engine = new Engine();
                    engineRules[`${CowOrHeifer} Preferred Systems`][i].forEach(item => {
                        engine.addRule(item);
                    });

                    const data = await engine.run(factInput);

                    
                    data.events.forEach((item) => {
                        console.log(item);
                        //setPreferList([...preferList, item.type]);
                        protocolsArr.push(item.type);
                    });
                    
                } 
                console.log("protocolsArr " , protocolsArr);
                setPreferList(protocolsArr);
            }  

            fetchData1().catch(console.error);
    }, [])

    // this is for the less preferr systems
    useEffect(() => {
        
        const fetchData1 = async () => {

            let protocolsArr = [];

            for(let i = 1; i <= Object.keys(engineRules[`${CowOrHeifer} Less Preferred Systems`]).length; i ++){
                let engine = new Engine();
                engineRules[`${CowOrHeifer} Less Preferred Systems`][i].forEach(item => {
                    engine.addRule(item);
                });

                const data = await engine.run(factInput);

                
                data.events.forEach((item) => {
                    console.log(item);
                    //setPreferList([...preferList, item.type]);
                    protocolsArr.push(item.type);
                });
                
            } 
            console.log("protocolsArr " , protocolsArr);
            setLessPreferList(protocolsArr);
        }  

            fetchData1().catch(console.error);
    }, [])

    
    return(
        <div className='protocol-div-container'>
            <br />
            <br />
            <div>
            <h2> {selectedProtocolHeader} - {CowOrHeifer} Protocols </h2>
            <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
            >
            {preferList.map((item, index) => {
                        return(
                            <Button 
                            key={index} 
                            onClick={() => {setSynchronizationProtocol(item); setUserFlow(UserFlow +1)}}
                            > 
                                ({item}) {SynchProtocolTitleData[item].SynchronizationSystemTitle} 
                            </Button>
                        )
                    })}
            </ButtonGroup>

           
            <h2> Less Preferred Systems </h2>
            <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
            >
                {lessPreferList.map((item, index) => {
                    return(
                        <Button 
                        key={index} 
                        onClick={() => {setSynchronizationProtocol(item);setUserFlow(UserFlow +1)}}
                        > 
                            ({item}) {SynchProtocolTitleData[item].SynchronizationSystemTitle} 
                        </Button>
                    )
                })}
                
            </ButtonGroup>
            </div>
                <br />
            <Button 
                onClick = {() => {setUserFlow(UserFlow -1)}}
                variant   = "outlined" 
                size      = "large"
                className='custom-btn-styling-stuff'
            >
            Return
            </Button>

        </div>
        
    );

}

export default ValidProtocols;
