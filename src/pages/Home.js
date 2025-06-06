import React, { useState, useEffect } from "react";
import UserInput from "../components/userInput";
import ValidProtocols from "../components/validProtocols";
import ProtocolInstructions from "../components/ProtocolInstructions/ProtocolInstructions";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";

function Home() {
  const [protocols, setProtocols] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [loadingContainer, setLoadingContainer] = useState(true);
  const [BreedType, setBreedType] = useState("Bos Taurus");
  const [CowOrHeifer, setCowOrHeifer] = useState("Cow");
  const [SemenType, setSemenType] = useState("Conventional");
  const [SystemType, setSystemType] = useState("Estrus AI");
  const [DateToStartBreeding, setDateToStartBreeding] = useState(dayjs());
  const [GNRH, setGNRH] = useState("GnRH");
  const [PG, setPG] = useState("PG");
  const [BullTurnIn, setBullTurnIn] = useState(14);
  const [GestationPeriod, setGestationPeriod] = useState(281);
  const [UserFlow, setUserFlow] = useState(1);
  const [SynchronizationProtocol, setSynchronizationProtocol] = useState(0);
  // arrays for the rules engine to store valid protocols
  const [preferList, setPreferList] = useState([]);
  const [lessPreferList, setLessPreferList] = useState([]);
  // arrays for user selections

  // grab the data from the json file and split it into arrays
  useEffect(() => {
    fetch("/Estrus-Synchronization-Planner/json-files/data.json")
      .then((response) => response.json())
      .then((data) => {
        setLoadingContainer(false);
        setParameters(data.Parameters);
        setProtocols(data.Protocols);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert(error);
      })
      .finally(() => {
        setLoadingContainer(false);
      });
  }, []);

  if (UserFlow === 1) {
    return (
      <div>
        {loadingContainer === false ? (
          <UserInput
            BreedType={BreedType}
            CowOrHeifer={CowOrHeifer}
            SystemType={SystemType}
            SemenType={SemenType}
            DateToStartBreeding={DateToStartBreeding}
            GNRH={GNRH}
            PG={PG}
            BullTurnIn={BullTurnIn}
            GestationPeriod={GestationPeriod}
            setSemenType={setSemenType}
            setBreedType={setBreedType}
            setCowOrHeifer={setCowOrHeifer}
            setSystemType={setSystemType}
            setDateToStartBreeding={setDateToStartBreeding}
            setGNRH={setGNRH}
            setPG={setPG}
            setBullTurnIn={setBullTurnIn}
            setGestationPeriod={setGestationPeriod}
            UserFlow={UserFlow}
            setUserFlow={setUserFlow}
            protocols={protocols}
            parameters={parameters}
          />
        ) : (
          <center style={{ margin: 40 }} data-testid="loading-spinner">
            <CircularProgress />
          </center>
        )}
      </div>
    );
  }

  if (UserFlow === 2) {
    return (
      <ValidProtocols
        BreedType={BreedType}
        SemenType={SemenType}
        SystemType={SystemType}
        CowOrHeifer={CowOrHeifer}
        DateToStartBreeding={DateToStartBreeding}
        SynchronizationProtocol={SynchronizationProtocol}
        setSynchronizationProtocol={setSynchronizationProtocol}
        UserFlow={UserFlow}
        setUserFlow={setUserFlow}
        preferList={preferList}
        setPreferList={setPreferList}
        lessPreferList={lessPreferList}
        setLessPreferList={setLessPreferList}
      />
    );
  }

  if (UserFlow === 3) {
    return (
      <ProtocolInstructions
        UserFlow={UserFlow}
        setUserFlow={setUserFlow}
        DateToStartBreeding={DateToStartBreeding}
        SynchronizationProtocol={SynchronizationProtocol}
        GNRH={GNRH}
        PG={PG}
        BullTurnIn={BullTurnIn}
        GestationPeriod={GestationPeriod}
        SemenType={SemenType}
      />
    );
  }
}

export default Home;
