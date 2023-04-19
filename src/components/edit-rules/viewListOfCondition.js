import {React} from "react";

import SelectedSetOfConditions from "./selectedSetOfConditions";

const ViewListOfCondition = props => {
    const {conditions} = props;

    /*Object.keys(conditions).map(item => {
        console.log(item);
        console.log(conditions[item])
    })*/

    return(
        <div>
            {Object.keys(conditions).map(item => {
               return( 
                <div key={item}>
                    <h4>Condition set {item}</h4>
                    <SelectedSetOfConditions 
                        condition = {conditions[item]}
                    />
                </div> 
               )
            })}
        </div>
    )
}

export default ViewListOfCondition;