import React from 'react';
import { Button, Container } from "@mui/material";
import "../style/listView.css";

const ListView = props => {
    const { UserFlow, setUserFlow, ListOfInstrucitons, DateToStartBreeding, SynchronizationProtocol, GNRH, PG, SemenType} = props;

    var selectedGNRH;
    var selectedPG;
    // text changes
    let ai_standing_heat_txt = "";
    let ai_with_sexed_semen = "";
    let ai_with_sexed_semen_showing = "";
    let ai_with_sexed_semen_plus_conventional = "";
    let nonestrous_females = "";
    let cidr_device = "";
    let estrus_detection_aid = "";
    let ai_females_showing_estrus = "";

    let mga_time_change = new Date();
    let mga_time_change_2 = new Date();
    let mga_time_change_3 = new Date();

    mga_time_change.setDate(DateToStartBreeding.getDate() - 19);
    mga_time_change_2.setDate(DateToStartBreeding.getDate() - 11);
    mga_time_change_3.setDate(DateToStartBreeding.getDate() - 22);
    //console.log(DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))

    //store if breed females AI 16-22....
    // G14 -> Semen Type
    if(SemenType === "Conventional & Sexed"){
        ai_standing_heat_txt = "Breed females AI 16-22 hours after standing heat.";
        ai_with_sexed_semen = "AI with sexed semen estrous females";
        ai_with_sexed_semen_showing = "AI with sexed semen those showing females estrus";
        ai_with_sexed_semen_plus_conventional = "AI with sexed semen estrous females.  All others with conventional semen.";
        nonestrous_females = "Inject 2cc Cystorelin (GnRH) to nonestrous females.";
        cidr_device = "Remove the CIDR device and apply estrus detection aid for each female.";
        estrus_detection_aid = "Apply estrus detection aid.";
        ai_females_showing_estrus = "AI females showing estrus with sexed semen.  All others with conventional semen.";
    }else{
        ai_standing_heat_txt = "Breed females AI 10-14 hours after standing heat.";
        ai_with_sexed_semen = "AI females in estrus";
        ai_with_sexed_semen_showing = "AI females in estrus";
        ai_with_sexed_semen_plus_conventional = "AI females in estrus";
        nonestrous_females = "Inject 2cc Cystorelin (GnRH) to all females.";
        cidr_device = "Remove the CIDR device from each female.";
    }

    //search instruction for <<ai_after_standing_heat>>
    ListOfInstrucitons.forEach(item => {
        for (let param in item){
            if(item[param] === "<<ai_after_standing_heat>>") item[param] = ai_standing_heat_txt;
            if(item[param] === "<<ai_sexed_semen>>") item[param] = ai_with_sexed_semen;
            if(item[param] === "<<ai_with_sexed_semen_showing>>") item[param] = ai_with_sexed_semen_showing;
            if(item[param] === "<<ai_with_sexed_semen_plus_conventional>>") item[param] = ai_with_sexed_semen_plus_conventional;
            if(item[param] === "<<nonestrous>>") item[param] = nonestrous_females;
            if(item[param] === "<<cidr_device>>") item[param] = cidr_device;
            if(item[param] === "<<estrus_detection_aid>>") item[param] = estrus_detection_aid;
            if(item[param] === "<<ai_females_showing_estrus>>") item[param] = ai_females_showing_estrus;
            if(item[param] === "<<current_time>>") item[param] = DateToStartBreeding.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            if(item[param] === "<<mga_time_change_3>>") item[param] = "Continue feeding until " + (mga_time_change_3.getMonth() + 1) + "/" + mga_time_change_3.getDate() + "/" + mga_time_change_3.getFullYear() + ".";
            if(item[param] === "<<mga_time_change_2>>") item[param] = "Continue feeding until " + (mga_time_change_2.getMonth() + 1) + "/" + mga_time_change_2.getDate() + "/" + mga_time_change_2.getFullYear() + ".";
            if(item[param] === "<<mga_time_change>>") item[param] = "Continue feeding until " + (mga_time_change.getMonth() + 1) + "/" + mga_time_change.getDate() + "/" + mga_time_change.getFullYear() + ".";
            
            /*if(SynchronizationProtocol === "8"){
                if(item[param] === "<<protocol_8_time_change>>") item[param] = "Continue feeding until " + (changingTime.getMonth() + 1) + "/" + changingTime.getDay() + "/" + changingTime.getFullYear() + ".";
            }*/
        }
    });

    switch(true){
        case GNRH === "Cystorelin":
            selectedGNRH = "2cc Cystorelin (GnRH)";
            break;
        case GNRH === "Factrel":
            selectedGNRH = "2cc Factrel (GnRH)";
            break;
        case GNRH === "Fertagyl":
            selectedGNRH = "2cc Fertagyl (GnRH)";
            break;
        case GNRH === "OvaCyst":
            selectedGNRH = "2cc OvaCyst (GnRH)";
            break;
        case GNRH === "GONAbreed":
            selectedGNRH = "1cc GONAbreed (GnRH)";
            break;
        case GNRH === "GnRH":
            selectedGNRH = "(GnRH)";
            break;
        default:
            break;
    }

    //console.log("the selected GNRH: " + selectedGNRH);

    switch(true){
        case PG === "Estrumate":
            selectedPG = "2cc Estrumate (PG)";
            break;
        case PG === "EstroPLAN":
            selectedPG = "2cc EstroPLAN (PG)";
            break;
        case PG === "InSynch":
            selectedPG = "5cc InSynch (PG)";
            break;
        case PG === "Lutalyse":
            selectedPG = "5cc Lutalyse (PG)";
            break;
        case PG === "ProstaMate":
            selectedPG = "5cc ProstaMate (PG)";
            break;
        case PG === "HiConc.Lutalyse":
            selectedPG = "2cc HiConc.Lut. (PG)";
            break;
        case PG === "Synchsure":
            selectedPG = "2cc Synchsure (PG)";
            break;
        case PG === "PG":
            selectedPG = "(PG)";
            break;
        default:
            break;
    }

    //console.log("the selected PG: " + selectedPG);

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
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("+12hrs")){
                    marginOfErr = 12;
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

                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("2cc Cystorelin")){
                    
                    ListOfInstrucitons[i][stepX] = JSON.parse(JSON.stringify(ListOfInstrucitons[i][stepX]).replace("2cc Cystorelin (GnRH)", selectedGNRH));
                }
    
                if(JSON.stringify(ListOfInstrucitons[i][stepX]).includes("5cc Lutalyse")){
                    
                    ListOfInstrucitons[i][stepX] = JSON.parse(JSON.stringify(ListOfInstrucitons[i][stepX]).replace("5cc Lutalyse (PG)", selectedPG));
                }
            }
            

        } // end of inner for loop
    } // end of main for loop

    /*const leadingZeroesHours = (DateObject) =>{
        return (DateObject.getHours() < 10 ? '0' : '') + DateObject.getHours();
    }

    const leadingZeroesMinutes = (DateObject) =>{
        return (DateObject.getMinutes() -3 < 10 ? '0' : '') + (DateObject.getMinutes() -3);
    }*/

    console.log(DateToStartBreeding)

    return (
        <> 

            <center><h2>Protocol #{SynchronizationProtocol}</h2></center>

            <div className="centerTable">
                <table >
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Instructions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ListOfInstrucitons.map((instruction, key) => {

                        let tempDate = new Date(DateToStartBreeding)
                        tempDate.setDate(DateToStartBreeding.getDate() + parseInt(instruction.OnDay))

                        return(
                            <tr key={key}>
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
                    </tbody> 
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