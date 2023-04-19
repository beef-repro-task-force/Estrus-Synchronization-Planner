import { FormControl, Select, InputLabel, MenuItem} from "@mui/material";
import {React, useState } from "react";

import "../../style/Admin.css";

const FactControl = props => {
    const { parameters, cowOrHeifer, breedType, semenType,
        systemType, gnrh, pg } = props; 

    let [selectedParamValues, setSelectedParamValues] = useState([]);

    const onParamSelectionClick = (e) => {
        console.log(e)
        switch(e){
            case "Breed Type":
                setSelectedParamValues(breedType);
                break;
            case "System Type":
                setSelectedParamValues(systemType);
                break;
            case "Semen Type":
                setSelectedParamValues(semenType);
                break;
            case "GnRH":
                setSelectedParamValues(gnrh);
                break;
            case "PG":
                setSelectedParamValues(pg);
                break;
            case "Cow Or Heifer":
                setSelectedParamValues(cowOrHeifer);
                break;
            default:
                alert("no correct seletion? ")
                break;
        }
        console.log({selectedParamValues})
    }

    console.log({selectedParamValues});

    return(
        <div className="adding-rules-divs">
            <h4>Fact</h4>
            <form>
                <Select 
                    onChange={(e) => {onParamSelectionClick(e.target.value)}} 
                    sx={{m: 1, minWidth: 190}}>
                    <MenuItem>Choose...</MenuItem>
                    <MenuItem>Cow Or Heifer</MenuItem>
                    <MenuItem>Breed Type</MenuItem>
                    <MenuItem>System Type</MenuItem>
                    <MenuItem>Semen Type</MenuItem>
                    <MenuItem>GnRH</MenuItem>
                    <MenuItem>PG</MenuItem>
                </Select>
                <Select sx={{m: 1, minWidth: 120}}>
                    <MenuItem>equal</MenuItem>
                </Select>
                <Select sx={{m: 1, minWidth: 120}}>
                    <MenuItem>Choose...</MenuItem>
                    {Object.keys(selectedParamValues).map((k)=>{
                        if(k !== 0){
                            return(
                                <MenuItem key={k}>{selectedParamValues[k].name}</MenuItem>
                            )
                        }else{
                            return (
                                <MenuItem> hello world </MenuItem>
                            )
                        }
                    })}
                </Select>

            </form>
        </div>
    )
}

export default FactControl;