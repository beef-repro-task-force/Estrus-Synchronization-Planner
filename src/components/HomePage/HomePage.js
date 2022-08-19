import React, {useState} from 'react';
import "./Homepage.css"
import InitialData from './InitialData';
import ProtocolPage from '../ProtocolsPage/ProtocolPage';
import ParentView from '../ScheduleReview/ParentView';

const HomePage = () => {
    const [BreedType , setBreedType] = useState(undefined)
    const [CowOrHeifer , setCowOrHeifer] = useState(undefined)
    const [SemenType , setSemenType] = useState(undefined)
    const [SystemType , setSystemType] = useState(undefined)
    const [DateToStartBreeding , setDateToStartBreeding ] = useState(new Date())
    const [GNRH , setGNRH] = useState(undefined)
    const [PG , setPG] = useState(undefined)
    const [BullTurnIn , setBullTurnIn] = useState(14)
    const [GestationPeriod , setGestationPeriod] = useState(281)
    const [UserFlow, setUserFlow] = useState(1);
    const [SynchronizationProtocol, setSynchronizationProtocol] = useState(undefined);

    if(UserFlow === 1){
        return (
            <InitialData 
                BreedType={BreedType}
                CowOrHeifer ={CowOrHeifer}
                SystemType={SystemType}
                SemenType ={SemenType}
                DateToStartBreeding={DateToStartBreeding}
                GNRH={GNRH} 
                PG={PG} 
                BullTurnIn={BullTurnIn} 
                GestationPeriod={GestationPeriod}
                setSemenType={setSemenType}
                setBreedType={setBreedType}
                setCowOrHeifer ={setCowOrHeifer}
                setSystemType={setSystemType}
                setDateToStartBreeding={setDateToStartBreeding} 
                setGNRH={setGNRH} 
                setPG={setPG} 
                setBullTurnIn={setBullTurnIn} 
                setGestationPeriod={setGestationPeriod} 
                UserFlow={UserFlow}
                setUserFlow = {setUserFlow}
            />
        );
    }

    if(UserFlow === 2){
        return(
        <ProtocolPage
            BreedType={BreedType}
            SemenType = {SemenType}
            SystemType={SystemType}
            CowOrHeifer ={CowOrHeifer}
            SystemType={SystemType}
            DateToStartBreeding={DateToStartBreeding}
            SynchronizationProtocol = {SynchronizationProtocol}
            setSynchronizationProtocol = {setSynchronizationProtocol}
            UserFlow={UserFlow}
            setUserFlow = {setUserFlow}
         />);
    }

    if(UserFlow === 3){
        return(
            <ParentView 
                UserFlow={UserFlow}
                setUserFlow = {setUserFlow}
                DateToStartBreeding={DateToStartBreeding}
                SynchronizationProtocol = {SynchronizationProtocol}
                GNRH={GNRH} 
                PG={PG} 
                BullTurnIn={BullTurnIn} 
                GestationPeriod={GestationPeriod}
            />
        )
    }

} /* end HomePage */
export default HomePage;