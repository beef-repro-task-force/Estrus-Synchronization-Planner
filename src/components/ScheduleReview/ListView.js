import React from 'react';
import { Button } from '@material-ui/core';
import "./ListView.css"

const ListView = props => {
    const { ListOfInstrucitons, DateToStartBreeding, SynchronizationProtocol, GNRH, PG} = props;
    
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
                                { console.log( tempDate.getMonth() + 1 + " / " + tempDate.getDate() + " / " + tempDate.getFullYear() )} 
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