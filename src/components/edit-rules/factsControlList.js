import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import FactControl from "./factControl";

const FactsControlList = props => {
    const { parameters, cowOrHeifer, breedType, semenType,
        systemType, gnrh, pg } = props;

    return(
        <div className="adding-rules-divs">
            <h4>Fact List</h4>
            <FactControl 
                parameters = {parameters}
                cowOrHeifer = {cowOrHeifer}
                breedType = {breedType}
                semenType = {semenType}
                systemType = {systemType}
                gnrh = {gnrh}
                pg = {pg} 
            />
            <Fab
                sx={{ ml: 1 }}
                aria-label="delete"
                size="medium"
                >
                    <AddIcon />
            </Fab>
        </div>
        
    );

}

export default FactsControlList;