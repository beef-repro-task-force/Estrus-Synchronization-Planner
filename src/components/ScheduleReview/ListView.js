import React from 'react';
import { Button } from '@material-ui/core';
import "./ListView.css"

const ListView = props => {
    const { ListOfInstrucitons, DateToStartBreeding, SynchronizationProtocol, GNRH, PG} = props;

    console.log(JSON.stringify(ListOfInstrucitons[0]));
    console.log(ListOfInstrucitons[0].OnDay);
    console.log(DateToStartBreeding);
    console.log(DateToStartBreeding.getHours());
    //console.log(DateToStartBreeding.getDate());

    const length = Object.keys(ListOfInstrucitons).length;
    for(var i = 0; i < length; i ++){
        
        if(JSON.stringify(ListOfInstrucitons[i].step2) != undefined){
            if(JSON.stringify(ListOfInstrucitons[i].step2).includes("between the hours") ){
                console.log("this should work now!");
                var minusError = 24 * parseInt(JSON.stringify(ListOfInstrucitons[i].step3));
                var plusError = 24 * parseInt(JSON.stringify(ListOfInstrucitons[i].step4));

                var marginOfErr = (minusError + plusError)/2;
                
                ListOfInstrucitons[i].step3 = (DateToStartBreeding.getHours - marginOfErr).toString;
                ListOfInstrucitons[i].step4 = (DateToStartBreeding.getHours + marginOfErr).toString; 

                console.log(JSON.stringify(ListOfInstrucitons[i].step3));
                console.log(JSON.stringify(ListOfInstrucitons[i].step4));
            }
        }
        
    }

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