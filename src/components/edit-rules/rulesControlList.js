import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import RuleControl from "./ruleControl";

const RulesControlList = props => {
    const { parameters, 
        engineRules, 
        setEngineRules, cowOrHeifer, breedType, semenType,
        systemType, gnrh, pg } = props;

    return(
        <div className="adding-rules-divs">
            <h4>Rule List</h4>
            <RuleControl 
                parameters={parameters}
                engineRules = {engineRules}
                setEngineRules = {setEngineRules}
                cowOrHeifer = {cowOrHeifer}
                breedType = {breedType}
                semenType = {semenType}
                systemType = {systemType}
                gnrh = {gnrh}
                pg = {pg} 
            />
            
            <Fab
                sx={{ ml: 1 }}
                layout_gravity="bottom|right"
                aria-label="delete"
                size="medium"
                >
                    <AddIcon />
            </Fab>
            
        </div>
    );

}

export default RulesControlList;