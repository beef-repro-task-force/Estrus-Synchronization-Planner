import {React} from "react";

const ViewTheFacts = props => {
    const {facts} = props;

    //console.log(condition)
    //console.log({results})

    
    /*Object.keys(facts).map(item => {
        console.log(item)
        console.log(facts[item].fact)
    })*/

    //console.log({facts})

    return(
        <div>
           {Object.keys(facts).map(item => {
                return (
                    <div key={item}>
                        <p>{item}: 
                        {facts[item].fact}, 
                        {facts[item].operator}, 
                        {facts[item].value}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ViewTheFacts;