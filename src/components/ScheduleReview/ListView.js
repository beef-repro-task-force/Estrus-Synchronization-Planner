import React from 'react';
import { Button } from '@material-ui/core';
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
    var marginOfErr;
    var tmpDate1 = DateToStartBreeding;
    var tmpDate2 = DateToStartBreeding;
    for(var i = 0; i < length; i ++){   
        if(JSON.stringify(ListOfInstrucitons[i].step2) !== undefined){
            
            if(JSON.stringify(ListOfInstrucitons[i].step2).includes("between the hours") ){
                if( JSON.stringify(ListOfInstrucitons[i].step3).includes("0.166666667") ){
                    minusErr = 24 * 0.166666667;
                }
                if( JSON.stringify(ListOfInstrucitons[i].step4).includes("0.666666667") ){
                    plusErr = 24 * 0.666666667;
                }

                console.log(minusErr);
                console.log(plusErr);
                
                marginOfErr = (plusErr - minusErr)/2;

                tmpDate1.setHours(tmpDate1.getHours() - marginOfErr);
                tmpDate2.setHours(tmpDate2.getHours() + marginOfErr);
                console.log( "setting the hour" + tmpDate1);
                console.log( "setting the hour" + tmpDate2);
                console.log(marginOfErr);
                console.log(tmpDate1.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
                ListOfInstrucitons[i].step3 = tmpDate1.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                ListOfInstrucitons[i].step4 = tmpDate2.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                console.log(JSON.stringify(ListOfInstrucitons[i].step3));
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