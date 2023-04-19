import {React} from "react";

import ViewTheFacts from "./viewtheFacts";

const TheSelectedCondition = props => {
    const {condition, results} = props;

    //console.log(condition)
    //console.log({results})

    /*
    Object.keys(condition).map(item => {
        console.log(condition[item])
    })*/

    

    return(
        <div>
           {Object.keys(condition).map((item, key) => {
                if(item === "conditions"){
                    return (
                    <div key={key}>
                        <ViewTheFacts 
                            facts = {condition[item].all}
                        />
                    </div>)
                }else{
                    return (<p key={key}>result: {condition[item].type}</p>)
                }
            })}
        </div>
    )
}

export default TheSelectedCondition;