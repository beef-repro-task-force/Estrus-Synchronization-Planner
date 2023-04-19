import FactsControlList from "./factsControlList";

const RuleControl = props => {
    const { parameters, cowOrHeifer, breedType, semenType,
        systemType, gnrh, pg } = props;

    return(
        <div className="adding-rules-divs">
            <h4>Rule</h4>
            <FactsControlList 
                parameters={parameters}
                cowOrHeifer = {cowOrHeifer}
                breedType = {breedType}
                semenType = {semenType}
                systemType = {systemType}
                gnrh = {gnrh}
                pg = {pg} 
            />
        </div>
    );

}

export default RuleControl;