import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FactControl from "./factControl";
import RulesControlList from "./rulesControlList";
import ViewRules from "./viewRules";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { TableContainer, TableRow, TableHead,
        TableCell, Grid, MenuItem, Select, InputLabel,
        FormControl } from "@mui/material";

const editRules = props =>{
    const {engineRules, setEngineRules, parameters,
        cowOrHeifer, breedType, semenType,
        systemType, gnrh, pg, setSelectedRuleSet, selectedRuleSet,
        ruleSetRow, setRuleSetRow, ruleSetRowArr, setRuleSetRowArr } = props;

    const operatorTypes = ["equal", "notEqual", "lessThan", "lessThanInclusive", "greaterThan", "greaterThanInclusive", "in", "notIn", "contains", "doesNotContain"];
    


    let arrOfRules = [];

    console.log(engineRules);
    
    Object.keys(engineRules[selectedRuleSet][0]).forEach(key => {
        arrOfRules.push(key);
        console.log({key})
        //console.log({v})
      });

    console.log({ruleSetRowArr})

    return (
        <div>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={8}>
                <RulesControlList 
                    parameters={parameters}
                    cowOrHeifer = {cowOrHeifer}
                    breedType = {breedType}
                    semenType = {semenType}
                    systemType = {systemType}
                    gnrh = {gnrh}
                    pg = {pg}
                />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>Select a Set of Rules</InputLabel>
                    <FormControl variant = "filled" className="Input-formcontrol-style">
                        <Select 
                            className="InputStyle"
                            value    = { selectedRuleSet } 
                            onChange ={ (event) => {setSelectedRuleSet(event.target.value)} } 
                        >
                            <MenuItem value={"Cow Preferred Systems"}>Cow Preferred Systems</MenuItem>
                            <MenuItem value={"Cow Less Preferred Systems"}>Cow Less Preferred Systems</MenuItem>
                            <MenuItem value={"Heifer Preferred Systems"}>Heifer Preferred Systems</MenuItem>
                            <MenuItem value={"Heifer Less Preferred Systems"}>Heifer Less Preferred Systems</MenuItem>
                            
                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <center><ArrowDownwardIcon /></center>
                    <br />
                    
                    

                </Grid>
            </Grid>

        </div>
    );
}

export default editRules;

/**
 * {Object.keys(engineRules[selectedRuleSet][0]).forEach((name, index) => {
                                
                                console.log({index});
                                console.log({name});
                                <MenuItem key={index} value={name}>Row : {name}</MenuItem>
                            })}
 * 
 * {Object.keys(engineRules).forEach(key => {
                            return <MenuItem key={key} value={key}>{key}</MenuItem>
                        })}
 * 
 * 
 * <FormControl variant = "filled" className="Input-formcontrol-style">
                    <InputLabel>Set of Rules</InputLabel>
                    <Select 
                        className="InputStyle"
                        value    = { } 
                        onChange ={ } 
                    >
                    
                        {Object.keys(engineRules).forEach(key => {
                            return <MenuItem key={key} value={key} >{key}</MenuItem>
                            console.log(key)
                        })}
                    </Select>
                </FormControl>
 * <form>
                <h3>Breed Type</h3>
                <table>
                <thead>
                    <tr>
                    <th>name</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {engineRules[].map(item =>{
                    return(
                        <tr>{item}</tr>
                    ) 
                    })}
                </tbody>
                </table>
            </form>



            {engineRules[name][0].map((name, index) =>(
                        <Accordion key={index}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            //aria-controls="panel1a-content"
                            //id="panel1a-header"
                            >
                            <Typography>{name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                             hello world
                            </AccordionDetails>
                        </Accordion>
                    ))}

                    {console.log(engineRules[name][0])}


                    {arrOfRules.map((name, index) =>(
                <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  //aria-controls="panel1a-content"
                  //id="panel1a-header"
                >
                  <Typography>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>hellow world</TableCell>
                            </TableRow>
                        </TableHead>
                    </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}


            <ViewRules 
                engineRules = {engineRules}
            />
 */