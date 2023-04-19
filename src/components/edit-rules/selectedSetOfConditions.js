import {React} from "react";

import TheSelectedCondition from "./theSelectedCondition";

const SelectedSetOfConditions = props => {
    const {condition} = props;

    /*console.log({condition})

    Object.keys(condition).map(item => {
        console.log(item);
        //console.log(condition[item])
    })*/

    return(
        <div>
           {Object.keys(condition).map(item => {
                return(
                    <div key={item}>
                        <p>condition {item}</p>
                        <TheSelectedCondition 
                            condition = {condition[item]}
                            results = {condition[item]['type']}
                        />
                    </div>
                )
            })} 
        </div>
    )
}

export default SelectedSetOfConditions;