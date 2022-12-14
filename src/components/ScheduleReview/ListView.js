import React, { useState } from 'react';
import { Button, List } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import "./ListView.css"
import { dateTimePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

const ListView = props => {
    const { UserFlow, setUserFlow, ListOfInstrucitons, DateToStartBreeding, SynchronizationProtocol, GNRH, PG,
        SystemType, SemenType} = props;

    var selectedGNRH;
    var selectedPG;
    var breedFemaleAi = "Breed females AI 10-14 hours after standing heat";

    switch(true){
        case GNRH == 1:
            selectedGNRH = "2cc Cystorelin (GnRH)";
            break;
        case GNRH == 2:
            selectedGNRH = "2cc Factrel (GnRH)";
            break;
        case GNRH == 3:
            selectedGNRH = "2cc Fertagyl (GnRH)";
            break;
        case GNRH == 4:
            selectedGNRH = "2cc OvaCyst (GnRH)";
            break;
        case GNRH == 5:
            selectedGNRH = "1cc GONAbreed (GnRH)";
            break;
        case GNRH == 6:
            selectedGNRH = "(GnRH)";
        default:
            break;
    }

    console.log("the selected GNRH: " + selectedGNRH);

    switch(true){
        case PG == 1:
            selectedPG = "2cc Estrumate (PG)";
            break;
        case PG == 2:
            selectedPG = "2cc EstroPLAN (PG)";
            break;
        case PG == 3:
            selectedPG = "5cc InSynch (PG)";
            break;
        case PG == 4:
            selectedPG = "5cc Lutalyse (PG)";
            break;
        case PG == 5:
            selectedPG = "5cc ProstaMate (PG)";
            break;
        case PG == 6:
            selectedPG = "2cc HiConc.Lut. (PG)";
            break;
        case PG == 7:
            selectedPG = "2cc Synchsure (PG)";
            break;
        case PG == 8:
            selectedPG = "(PG)";
            break;
        default:
            break;
    }

    console.log("the selected PG: " + selectedPG);



    // fixing some timing issues
    const length = Object.keys(ListOfInstrucitons).length;

    for(var i = 0; i < length; i ++){
        var marginOfErr = -1;
        var stepX = "step";

        // subtract time
        for(var j = 1; j < 6; j ++){
            stepX = "step"+j;
            // subtract time
            if( JSON.stringify(ListOfInstrucitons[i][stepX]) !== undefined ){
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.416666667")){
                    marginOfErr = 0;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.333333333")){
                    marginOfErr = 2;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.291666667")){
                    marginOfErr = 3;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.25")){
                    marginOfErr = 4;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.166666667")){
                    marginOfErr = 6;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("-12hrs")){
                    marginOfErr = 12;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("-15hrs")){
                    marginOfErr = 15;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("-18hrs")){
                    marginOfErr = 18;
                }
                if(marginOfErr >= 0){
                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                    ListOfInstrucitons[i][stepX] = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() + marginOfErr);
                    marginOfErr = -1;
                }
            }

            // add time
            if( JSON.stringify(ListOfInstrucitons[i][stepX]) !== undefined ){
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.5")){
                    marginOfErr = 2;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.541666667")){
                    marginOfErr = 3;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.583333333")){
                    marginOfErr = 4;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("0.666666667")){
                    marginOfErr = 6;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("+9hrs")){
                    marginOfErr = 9;
                }
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("+18hrs")){
                    marginOfErr = 18;
                }
                if(marginOfErr >= 0){
                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() + marginOfErr);
                    ListOfInstrucitons[i][stepX] = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                    marginOfErr = -1;
                }

                // edit the instructions to include the correctly selected Gnrh
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("2cc Cystorelin")){
                    
                    ListOfInstrucitons[i][stepX] = JSON.parse(JSON.stringify(ListOfInstrucitons[i][stepX]).replace("2cc Cystorelin (GnRH)", selectedGNRH));
                }
    
                // edit the instructions to include the correctly selected PG
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("5cc Lutalyse")){
                    
                    ListOfInstrucitons[i][stepX] = JSON.parse(JSON.stringify(ListOfInstrucitons[i][stepX]).replace("5cc Lutalyse (PG)", selectedPG));
                }

                // edit the "Female AI hours" in the instructions
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("Breed females AI 16-22 hours after standing heat.")){
                    if((SystemType === 1 && SemenType === 1) || (SystemType === 2 && SemenType === 1)){
                        ListOfInstrucitons[i][stepX] = JSON.parse(JSON.stringify(ListOfInstrucitons[i][stepX]).replace("Breed females AI 16-22 hours after standing heat", breedFemaleAi));
                    }
                }
            }
            

        } // end of inner for loop
    } // end of main for loop

    const leadingZeroesHours = (DateObject) =>{
        return (DateObject.getHours() < 10 ? '0' : '') + DateObject.getHours();
    }

    const leadingZeroesMinutes = (DateObject) =>{
        return (DateObject.getMinutes() -3 < 10 ? '0' : '') + (DateObject.getMinutes() -3);
    }

    return (
        <> 

            <h2>Protocol #{SynchronizationProtocol}</h2>

            <div className="centerTable">
                <table >
                    <tr>
                        <th>Date</th>
                        <th>Instructions</th>
                    </tr>
                    {ListOfInstrucitons.map(instruction => {

                        let tempDate = new Date(DateToStartBreeding)
                        tempDate.setDate(DateToStartBreeding.getDate() + parseInt(instruction.OnDay))

                        return(
                            <tr >
                                <td>
                                    { tempDate.getMonth() + 1} / { tempDate.getDate() } / { tempDate.getFullYear()} 
                                    <br />
                                    <br />
                                    { tempDate.toLocaleString('default', {weekday: 'long'}) }
                                </td>
                                <td className='instruction-section'>
                                    <br />
                                    {instruction.step1}<br/>
                                    {instruction.step2}<br/>
                                    {instruction.step3}<br/>
                                    {instruction.step4}<br/>
                                    {instruction.step5}<br/>
                                    <br />
                                </td>
                            </tr>
                        )
                    })} 
                </table>
            </div>
            <br/>
            <Container maxWidth="sm" className='btn-box'>
                <Button 
                    variant   = "outlined" 
                    size      = "large"
                    onClick={() => {
                        setUserFlow(UserFlow -1)
                    }}
                >Back
                </Button>
                <Button 
                    variant   = "outlined" 
                    size      = "large"
                    onClick={() => {
                        window.print()
                    }    
                }>Print
                </Button>
            </Container>
            
        </>
    )
}

export default ListView;