import React from 'react';
import { Button, List } from '@material-ui/core';
import "./ListView.css"
import { dateTimePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

const ListView = props => {
    const { ListOfInstrucitons, DateToStartBreeding, SynchronizationProtocol, GNRH, PG} = props;

    // fixing some timing issues
    const length = Object.keys(ListOfInstrucitons).length;

    for(var i = 0; i < length; i ++){
        var marginOfErr = -1;
        var stepX = "step";

        // subtract time
        for(var j = 1; j < 6; j ++){
            stepX = "step"+j;
            console.log(stepX);
            console.log(JSON.stringify(ListOfInstrucitons[i][stepX]));
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
            }

            if(marginOfErr >= 0){
                DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                ListOfInstrucitons[i][stepX] = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                DateToStartBreeding.setHours(DateToStartBreeding.getHours() + marginOfErr);
                marginOfErr = -1;
            }
        } // end of for loop for subtracting

        // add to time
        for(var k = 1; k < 6; k ++){
            stepX = "step"+k;
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
            }

            if(marginOfErr >= 0){
                DateToStartBreeding.setHours(DateToStartBreeding.getHours() + marginOfErr);
                ListOfInstrucitons[i][stepX] = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                marginOfErr = -1;
            }
        } // end of for loop for adding

    } // end of main for loop

    const leadingZeroesHours = (DateObject) =>{
        return (DateObject.getHours() < 10 ? '0' : '') + DateObject.getHours();
    }

    const leadingZeroesMinutes = (DateObject) =>{
        return (DateObject.getMinutes() -3 < 10 ? '0' : '') + (DateObject.getMinutes() -3);
    }

    return (
        <>
            { console.log(GNRH) }
            { console.log(PG) }
           
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

export default ListView;