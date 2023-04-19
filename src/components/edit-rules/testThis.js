import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import RuleControl from "./ruleControl";

const TestThis = props => {
    const { ruleSetRow, setRuleSetRow,  } = props;

    return(
        <div>
            <InputLabel>Select a Row from the Rule</InputLabel>
            <FormControl variant = "filled" className="Input-formcontrol-style">
                <Select 
                    className="InputStyle"
                    value    = { ruleSetRow } 
                    onChange ={ (event) => {setRuleSetRow(event.target.value)} } 
                >
                    
                    
                </Select>
            </FormControl>
        </div>
    );

}

export default TestThis;