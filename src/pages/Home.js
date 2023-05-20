import React, {useState, useEffect} from "react";
import UserInput from "../components/userInput";
import ValidProtocols from "../components/validProtocols";
import ProtocolInstructions from "../components/protocolInstructions";

import { CircularProgress } from "@mui/material";

function Home(){
    const [data, setData] = useState([]);
    const [protocols, setProtocols] = useState([]);
    const [parameters, setParameters ] = useState([]);
    const [engineRules, setEngineRules ] = useState({});
    const [loadingContainer, setLoadingContainer] = useState(true);
    const [error, setError] = useState(null);
    const [BreedType , setBreedType] = useState("Bos Taurus")
    const [CowOrHeifer , setCowOrHeifer] = useState("Cow")
    const [SemenType , setSemenType] = useState("Conventional")
    const [SystemType , setSystemType] = useState("Estrus AI")
    const [DateToStartBreeding , setDateToStartBreeding ] = useState(new Date())
    const [GNRH , setGNRH] = useState("GnRH")
    const [PG , setPG] = useState("PG")
    const [BullTurnIn , setBullTurnIn] = useState(14)
    const [GestationPeriod , setGestationPeriod] = useState(281)
    const [UserFlow, setUserFlow] = useState(1);
    const [SynchronizationProtocol, setSynchronizationProtocol] = useState(0);
    // arrays for the rules engine to store valid protocols 
    const [preferList , setPreferList] = useState([]);
    const [lessPreferList , setLessPreferList] = useState([]);
    // arrays for user selections
    const [CowOrHeiferArr, setCowOrHeiferArr] = useState([]);
    const [BreedTypeArr , setBreedTypeArr] = useState([])
    const [SemenTypeArr , setSemenTypeArr] = useState([])
    const [SystemTypeArr , setSystemTypeArr] = useState([])
    const [GNRHArr , setGNRHArr] = useState([])
    const [PGArr , setPGArr] = useState([])

    // grab the data from the json file and split it into arrays
    /*useEffect(()=>{
        const fetchData = async() => {
            const result = await fetch("fall2022-j8sh/json-files/data.json").then(response => response.json());
            setData(result);
            setLoadingContainer(false);
            setParameters(data.Parameters)
            setEngineRules(data.Rules)
            setProtocols(data.Protocols)
            console.log({data})
            
        };
        fetchData();
    }, [loadingContainer])*/

    // grab the data from the json file and split it into arrays
    useEffect(()=>{
        fetch("/Estrus-Synchronization-Planner/json-files/data.json")
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoadingContainer(false);
            setParameters(data.Parameters)
            setEngineRules(data.Rules)
            setProtocols(data.Protocols)
            console.log({data})
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            alert(error);
            setError(error);
        })
        .finally(() => {
            setLoadingContainer(false);
        })
    
    }, [])

    console.log({parameters})
    console.log({protocols})
    console.log({engineRules})
    console.log({CowOrHeiferArr})
    
        if(UserFlow === 1){
            return (
                <div>
                    {loadingContainer === false ? (
                        <UserInput 
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
                            protocols = {protocols}
                            parameters = {parameters}
                        />
                        ) : ( <center style={{margin: 40}}><CircularProgress /></center> ) 
                    }
                </div>
            );
        }

        if(UserFlow === 2){
            return(
                <ValidProtocols
                    BreedType={BreedType}
                    SemenType = {SemenType}
                    SystemType={SystemType}
                    CowOrHeifer ={CowOrHeifer}
                    DateToStartBreeding={DateToStartBreeding}
                    SynchronizationProtocol = {SynchronizationProtocol}
                    setSynchronizationProtocol = {setSynchronizationProtocol}
                    UserFlow={UserFlow}
                    setUserFlow = {setUserFlow}
                    preferList = {preferList}
                    setPreferList = {setPreferList}
                    lessPreferList = {lessPreferList}
                    setLessPreferList = {setLessPreferList}
                />
            );
        }

        if(UserFlow === 3){
            return(
                <ProtocolInstructions
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
    
}

export default Home;

/*
return (      
        <div>
            <Header />
            <Navbar />

            <UserInput 
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

            <br />
            <br />
            <hr />
            <br />

            {
                BreedType   === "0" ||
                CowOrHeifer === "0" ||
                SemenType   === "0" ||
                SystemType  === "0" ||
                BullTurnIn  === 0 ||
                GestationPeriod  === 0 ? 
                    'filled in the inputs above' : 
                    <ValidProtocols
                        BreedType={BreedType}
                        SemenType = {SemenType}
                        SystemType={SystemType}
                        CowOrHeifer ={CowOrHeifer}
                        DateToStartBreeding={DateToStartBreeding}
                        SynchronizationProtocol = {SynchronizationProtocol}
                        setSynchronizationProtocol = {setSynchronizationProtocol}
                        UserFlow={UserFlow}
                        setUserFlow = {setUserFlow}
                    />
            }

            <br />
            <br />
            <hr />
            <br />



            <br />
            <br />
            <Footer />
        </div>
    );
*/