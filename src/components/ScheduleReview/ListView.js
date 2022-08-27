import React from 'react';
import { Button, List } from '@material-ui/core';
import "./ListView.css"
import { dateTimePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

const ListView = props => {
    const { ListOfInstrucitons, DateToStartBreeding, SynchronizationProtocol, GNRH, PG} = props;

    console.log(JSON.stringify(ListOfInstrucitons[0]));
    console.log(ListOfInstrucitons[0].OnDay);
    console.log(DateToStartBreeding);
    console.log(DateToStartBreeding.getHours());
    //console.log(DateToStartBreeding.getDate());

    // fixing some timing issues
    const length = Object.keys(ListOfInstrucitons).length;

    
    var minusErr;
    var plusErr;

    
    for(var i = 0; i < length; i ++){  
        var marginOfErr = 0;
        console.log(JSON.stringify(ListOfInstrucitons[i]));
        
        // step 1
        if(JSON.stringify(ListOfInstrucitons[i].step1) !== undefined){
            if(JSON.stringify(ListOfInstrucitons[i].step1).includes("between the hours") || JSON.stringify(ListOfInstrucitons[i].step1).includes("Fixed Time AI between") || JSON.stringify(ListOfInstrucitons[i].step1).includes("Target first breeding time between")){
                console.log("before the switch statement" + marginOfErr);

                if(JSON.stringify(ListOfInstrucitons[i].step2).includes("0.333333333")){
                    marginOfErr = 2;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step2).includes("0.291666667")){
                    marginOfErr = 3;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step2).includes("0.25")){
                    marginOfErr = 4;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step2).includes("0.166666667")){
                    marginOfErr = 6;
                }
                
                console.log("after the switch statement" + marginOfErr);

                if(marginOfErr > 0){
                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                    ListOfInstrucitons[i].step2 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() + (2 * marginOfErr));
                    ListOfInstrucitons[i].step3 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                    console.log("step4 is:" + JSON.stringify(ListOfInstrucitons[i].step4));

                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                    console.log("The DateToStartBreeding at the end of loop: " + DateToStartBreeding);
                    marginOfErr = 0;
                }
            }
        }

        // step 2
        if(JSON.stringify(ListOfInstrucitons[i].step2) !== undefined){
            if(JSON.stringify(ListOfInstrucitons[i].step2).includes("between the hours") || JSON.stringify(ListOfInstrucitons[i].step2).includes("Fixed Time AI between") || JSON.stringify(ListOfInstrucitons[i].step2).includes("Target first breeding time between")){
                console.log("before the switch statement" + marginOfErr);

                if(JSON.stringify(ListOfInstrucitons[i].step3).includes("0.333333333")){
                    marginOfErr = 2;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step3).includes("0.291666667")){
                    marginOfErr = 3;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step3).includes("0.25")){
                    marginOfErr = 4;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step3).includes("0.166666667")){
                    marginOfErr = 6;
                }
                
                console.log("after the switch statement" + marginOfErr);

                if(marginOfErr > 0){
                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                    ListOfInstrucitons[i].step3 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() + (2 * marginOfErr));
                    ListOfInstrucitons[i].step4 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                    console.log("step4 is:" + JSON.stringify(ListOfInstrucitons[i].step4));

                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                    console.log("The DateToStartBreeding at the end of loop: " + DateToStartBreeding);
                    marginOfErr = 0;
                }
            }
        }

        // step 3
        if(JSON.stringify(ListOfInstrucitons[i].step3) !== undefined){
            if(JSON.stringify(ListOfInstrucitons[i].step3).includes("between the hours") || JSON.stringify(ListOfInstrucitons[i].step3).includes("Fixed Time AI between") || JSON.stringify(ListOfInstrucitons[i].step3).includes("Target first breeding time between")){
                console.log("before the switch statement" + marginOfErr);

                if(JSON.stringify(ListOfInstrucitons[i].step4).includes("0.333333333")){
                    marginOfErr = 2;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step4).includes("0.291666667")){
                    marginOfErr = 3;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step4).includes("0.25")){
                    marginOfErr = 4;
                }
                if(JSON.stringify(ListOfInstrucitons[i].step4).includes("0.166666667")){
                    marginOfErr = 6;
                }
                
                console.log("after the switch statement" + marginOfErr);

                if(marginOfErr > 0){
                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                    ListOfInstrucitons[i].step4 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() + (2 * marginOfErr));
                    ListOfInstrucitons[i].step5 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                    console.log("step4 is:" + JSON.stringify(ListOfInstrucitons[i].step4));

                    DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                    console.log("The DateToStartBreeding at the end of loop: " + DateToStartBreeding);
                    marginOfErr = 0;
                }
            }
        }


    }

    

    // JSON.stringify(instruction.step2).includes("Fixed Time AI between:") || JSON.stringify(instruction.step2).includes("between the hours")

    /*ListOfInstrucitons.map(instruction => {
        if(JSON.stringify(instruction.step1) !== undefined){
            switch(JSON.stringify(instruction.step2) && JSON.stringify(instruction.step3)) {
                case "0.333333333" && "0.5":
                    marginOfErr = 2;
                    break;
                case "0.291666667" && "0.541666667":
                    marginOfErr = 3;
                    break;
                case "0.25" && "0.583333333":
                    marginOfErr = 4;
                    break;
                case "0.166666667" && "0.666666667":
                    marginOfErr = 6;
                    break;
                default:
                    marginOfErr = 0;
                    break;
            }

            if(marginOfErr != 0){
                DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                instruction.step2 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                DateToStartBreeding.setHours(DateToStartBreeding.getHours() + (2 * marginOfErr));
                instruction.step3 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                console.log("step3 is:" + JSON.stringify(instruction.step3));

                DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                console.log("The DateToStartBreeding at the end of loop: " + DateToStartBreeding);
            }
        }
        if(JSON.stringify(instruction.step2) !== undefined){
            switch(JSON.stringify(instruction.step3) && JSON.stringify(instruction.step4)) {
                case "0.333333333" && "0.5":
                    marginOfErr = 2;
                    break;
                case "0.291666667" && "0.541666667":
                    marginOfErr = 3;
                    break;
                case "0.25" && "0.583333333":
                    marginOfErr = 4;
                    break;
                case "0.166666667" && "0.666666667":
                    marginOfErr = 6;
                    break;
                default:
                    break;
            }

            if(marginOfErr != 0){
                DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                instruction.step3 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                DateToStartBreeding.setHours(DateToStartBreeding.getHours() + (2 * marginOfErr));
                instruction.step4 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                console.log("step4 is:" + JSON.stringify(instruction.step4));

                DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                console.log("The DateToStartBreeding at the end of loop: " + DateToStartBreeding);
            }
        }
        if(JSON.stringify(instruction.step3) !== undefined){
            switch(JSON.stringify(instruction.step4) && JSON.stringify(instruction.step5)) {
                case "0.333333333" && "0.5":
                    marginOfErr = 2;
                    break;
                case "0.291666667" && "0.541666667":
                    marginOfErr = 3;
                    break;
                case "0.25" && "0.583333333":
                    marginOfErr = 4;
                    break;
                case "0.166666667" && "0.666666667":
                    marginOfErr = 6;
                    break;
                default:
                    break;
            }

            if(marginOfErr != 0){
                DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                instruction.step4 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                DateToStartBreeding.setHours(DateToStartBreeding.getHours() + (2 * marginOfErr));
                instruction.step5 = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                console.log("step5 is:" + JSON.stringify(instruction.step5));

                DateToStartBreeding.setHours(DateToStartBreeding.getHours() - marginOfErr);
                console.log("The DateToStartBreeding at the end of loop: " + DateToStartBreeding);
            }
        }
    });*/

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