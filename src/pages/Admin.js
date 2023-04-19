import React, { useEffect, useState } from "react";
import { Button, Tabs, Tab, Box, Fab, CircularProgress, Grid } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

import EditProtocols from "../components/edit-protocols/editProtocols";
import EditParameters from "../components/edit-parameters/editParameters";
import EditRules from "../components/edit-rules/editRules";
import ViewRules from "../components/edit-rules/viewRules";

import { saveAs } from "file-saver";

import "../style/Admin.css";

function Admin(){
  
    // change the tab index
    const [tabIndex, setTabIndex] = useState(0);

    // function for changing the tab
    const handleTabChange = (e, newTabIndex) => {
        setTabIndex(newTabIndex);
    }

    const [loadingContainer, setLoadingContainer] = useState(true);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [dataCollected, setDataCollected] = useState(false);
    const [error, setError] = useState(null);

    // set up protocol 
    let [protoDictionary, setProtoDictionary] = useState([]);
    const [protocols, setProtocols ] = useState([]);
    const [editProtocolId, setEditProtocolId] = useState(null);
    const [addProtocolFormData, setAddProtocolFormData] = useState({
        "id": 0,
        "SynchronizationSystemTitle": "",
        "HourToleranceAdjustments": "",
        "instructions":[{}]
    });
    const [editProtocolFormData, setEditProtocolFormData] = useState({
        "id": 0,
        "SynchronizationSystemTitle": "",
        "HourToleranceAdjustments": "",
        "instructions":[{}]
    })

    // set up parameters
    const [parameters, setParameters ] = useState([]);
    const [editParamId, setEditParamId] = useState(null);
    const [addParamFormData, setAddParamFormData] = useState({
        "id":"",
        "name":""
    })
    const [editParamFormData, setEditParamFormData] = useState({
        "id":"",
        "name":""
    })
    const [cowOrHeifer, setCowOrHeifer] = useState([]);
    const [breedType, setBreedType] = useState([]);
    const [semenType, setSemenType] = useState([]);
    const [systemType, setSystemType] = useState([]);
    const [gnrh, setGnrh] = useState([]);
    const [pg, setPg] = useState([]);

    // set up Rule
    const [ engineRules, setEngineRules ] = useState({});
    const [selectedRuleSet, setSelectedRuleSet] = useState("Cow Preferred Systems");
    const [ ruleSetRow, setRuleSetRow ] = useState(1);
    const [ ruleSetRowArr, setRuleSetRowArr ] = useState([]);
    /*const [ addEngineRulesFormData, setAddEngineRulesFormData ] = useState({
        condition:{ 
            all:[]
        },
        event: { type: "" }
    });*/

    // one rule
    /*const ruleToAdd = {
        condition:{ 
            all:[]
        },
        event: { type: "" }
    }

    function factToAdd (param1, param2, param3){

        ruleToAdd.condition.all.push({
            fact: param1,
            operator: param2,
            value: param3
        });
    }

    function eventToAdd(param1){
        ruleToAdd.event.type = param1;
    }

    factToAdd("BreedType", "equal", "Bos Taurus");
    factToAdd("SystemType","equal","Estrus AI + Clean-up AI");

    eventToAdd("19");

    console.log(ruleToAdd);*/

    // grab the data from the json file and split it into arrays
    useEffect(()=>{
        fetch("json-files/data.json")
        .then(response => response.json())
        .then(data => {
            setParameters(data.Parameters)
            setEngineRules(data.Rules)
            setProtocols(data.Protocols)
            setCowOrHeifer(data.Parameters[0]["Cow or Heifer"])
            setBreedType(data.Parameters[1]["Breed Type"])
            setSemenType(data.Parameters[2]["Semen Type"])
            setSystemType(data.Parameters[3]["System Type"])
            setGnrh(data.Parameters[4]["GnRH"])
            setPg(data.Parameters[5]["PG"])
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            alert(error);
            setError(error);
        })
        .finally(() => {
            setLoadingContainer(false);
            setDataCollected(true);
        })
    
    }, [])

    /*console.log({cowOrHeifer})
    console.log({breedType})
    console.log({semenType})
    console.log({systemType})
    console.log({gnrh})
    console.log({pg})

    console.log({parameters})
    console.log({protocols})
    console.log({engineRules})
    console.log({cowOrHeifer})*/
    
    /**
     * function to download all the arrays into JSON
     */
    function downloadFile(){
        var blob = new Blob([JSON.stringify(protocols)], {
            type: "text/json;charset=utf-8"
        });
        saveAs(blob, "data.json");
    }

    /********************** Protocol functions ****************************/
    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newProtocolFormData = { ...addProtocolFormData};
        newProtocolFormData[fieldName] = fieldValue;

        setAddProtocolFormData(newProtocolFormData);
    };

    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newProtocolFormData = { ...editProtocolFormData};
        newProtocolFormData[fieldName] = fieldValue;

        setEditProtocolFormData(newProtocolFormData);
    };

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newProtocol = {
            "id": parseInt(addProtocolFormData.id),
            "SynchronizationSystemTitle": addProtocolFormData.SynchronizationSystemTitle,
            "HourToleranceAdjustments": addProtocolFormData.HourToleranceAdjustments,
            "instructions": addProtocolFormData.instructions
        }

        const newProtocols = [...protocols, newProtocol];
        setProtocols(newProtocols);
        console.log("clicked form submit", protocols);
        setOpen(false);
    };
    
    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const editedProtocol = {
            "id": parseInt(editProtocolFormData.id),
            "SynchronizationSystemTitle": editProtocolFormData.SynchronizationSystemTitle,
            "HourToleranceAdjustments": editProtocolFormData.HourToleranceAdjustments
        }

        const newProtocols = [...protocols];

        const index = protocols.findIndex((protocol) => protocol.id === editProtocolId);

        newProtocols[index] = editedProtocol;

        setProtocols(newProtocols);
        setEditProtocolId(null);
    };

    const handleEditClick = (e, protocol)=>{
        e.preventDefault();
        setEditProtocolId(protocol.id);

        const formValues = {
            "id": protocol.id,
            "SynchronizationSystemTitle": protocol.SynchronizationSystemTitle,
            "HourToleranceAdjustments": protocol.HourToleranceAdjustments
        }

        setEditProtocolFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditProtocolId(null);
    };

    const handleDeleteClick = (protocolId) => {
        const newprotocols = [...protocols];
        const index = protocols.findIndex((proto) => proto.id === protocolId);
        newprotocols.splice(index, 1);
        setProtocols(newprotocols);
    };

    /********************** Parameter functions ****************************/

    const handleParamDeleteClick = (Id, paramType) => {
        let newParam = [];
        let index = 0;
        switch(paramType){
            case "breedType":
                newParam = [...breedType];
                index = breedType.findIndex((param) => param.id === Id);
                newParam.splice(index, 1);
                setBreedType(newParam);
                break;
            case "cowOrHeifer":
                newParam = [...cowOrHeifer];
                index = cowOrHeifer.findIndex((param) => param.id === Id);
                newParam.splice(index, 1);
                setCowOrHeifer(newParam);
                break;
            case "semenType":
                newParam = [...semenType];
                index = semenType.findIndex((param) => param.id === Id);
                newParam.splice(index, 1);
                setSemenType(newParam);
                break;
            case "systemType":
                newParam = [...systemType];
                index = systemType.findIndex((param) => param.id === Id);
                newParam.splice(index, 1);
                setSystemType(newParam);
                break;
            case "gnrh":
                newParam = [...gnrh];
                index = gnrh.findIndex((param) => param.id === Id);
                newParam.splice(index, 1);
                setGnrh(newParam);
                break;
            case "pg":
                newParam = [...pg];
                index = pg.findIndex((param) => param.id === Id);
                newParam.splice(index, 1);
                setPg(newParam);
                break;
            default:
                alert("the parameter type input, was not valid");
                break;
        }
        
    };

    const handleParamAddFormChange = (e, paramType) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        let newParamFormData = {};

        switch(paramType){
            case "breedType":
                newParamFormData = { ...breedType};
                break;
            case "cowOrHeifer":
                newParamFormData = { ...cowOrHeifer};
                break;
            case "semenType":
                newParamFormData = { ...semenType};
                break;
            case "systemType":
                newParamFormData = { ...systemType};
                break;
            case "gnrh":
                newParamFormData = { ...gnrh};
                break;
            case "pg":
                newParamFormData = { ...pg};
                break;
            default:
                alert("the parameter type input, was not valid");
                break;
        }

        newParamFormData[fieldName] = fieldValue;

        setAddParamFormData(newParamFormData);
    };

    const handleParamEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newParamFormData = { ...editParamFormData};
        newParamFormData[fieldName] = fieldValue;

        setEditParamFormData(newParamFormData);
    };

    const handleParamAddFormSubmit = (e, paramType) => {
        e.preventDefault();

        const newParam = {
            id: addParamFormData.id,
            name: addParamFormData.name
        }

        let newParams = [];

        switch(paramType){
            case "breedType":
                newParams = [...breedType, newParam];
                setBreedType(newParams);
                break;
            case "cowOrHeifer":
                newParams = [...cowOrHeifer, newParam];
                setCowOrHeifer(newParams);
                break;
            case "semenType":
                newParams = [...semenType, newParam];
                setSemenType(newParams);
                break;
            case "systemType":
                newParams = [...systemType, newParam];
                setSystemType(newParams);
                break;
            case "gnrh":
                newParams = [...gnrh, newParam];
                setGnrh(newParams);
                break;
            case "pg":
                newParams = [...pg, newParam];
                setPg(newParams)
                break;
            default:
                alert("the parameter type input, was not valid");
                break;
        }

        
    };
    
    const handleParamEditFormSubmit = (e, paramType) => {
        e.preventDefault();

        const editedParam = {
            "id": editParamId,
            "name": editParamFormData.name
        }

        const newParams = [...breedType];

        const index = breedType.findIndex((param) => param.id === editParamId);

        newParams[index] = editedParam;

        setProtocols(newParams);
        setEditProtocolId(null);
    };

    const handleParamEditClick = (e, param)=>{
        e.preventDefault();
        setEditParamId(param.id);

        const formValues = {
            "id": param.id,
            "name" : param.name
        }

        setEditParamFormData(formValues);
    };

    const handleParamCancelClick = () => {
        setEditParamId(null);
    };

    /********************** Rules Engine functions ****************************/

    const handleAddMoreRulesClick = () => {

    }

    return(
        <div className="container">
            <Box>
                <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
                    <Tab label="Protocols"></Tab>
                    <Tab label="Parameters"></Tab>
                    <Tab label="Rules"></Tab>
                </Tabs>
            </Box>
            {loadingContainer === false ? (
                <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                    <div>
                    <h2>Protocols</h2>
                    <EditProtocols
                        protocols = {protocols}
                        addProtocolFormData = {addProtocolFormData}
                        setAddProtocolFormData = {setAddProtocolFormData}
                        editProtocolFormData = {editProtocolFormData}
                        setEditProtocolFormData = {setEditProtocolFormData}
                        editProtocolId = {editProtocolId}
                        setEditProtocolId = {setEditProtocolId}
                        loadingContainer = {loadingContainer}
                        setLoadingContainer = {setLoadingContainer}
                        handleDeleteClick = {handleDeleteClick}
                        handleEditFormSubmit = {handleEditFormSubmit}
                        handleEditFormChange = {handleEditFormChange}
                        handleCancelClick = {handleCancelClick}
                        handleEditClick = {handleEditClick}
                        handleAddFormChange = {handleAddFormChange}
                        handleAddFormSubmit = {handleAddFormSubmit}
                        open = {open}
                        setOpen = {setOpen}
                        handleOpen = {handleOpen}
                        handleClose = {handleClose}
                    />
                </div>
                )}
            </Box>
            ) : (
                <center style={{margin: 40}}><CircularProgress /></center>
            )}
            
            <Box sx={{ padding: 2 }}>
                {tabIndex === 1 && (
                    <div>
                    <h2>Parameters</h2>
                    <EditParameters 
                        editParamId = {editParamId}
                        cowOrHeifer = {cowOrHeifer}
                        breedType = {breedType}
                        semenType = {semenType}
                        systemType = {systemType}
                        gnrh = {gnrh}
                        pg = {pg}
                        parameters = {parameters}
                        setParameters = {setParameters}
                        handleParamEditClick = {handleParamEditClick}
                        handleParamDeleteClick = {handleParamDeleteClick}
                        handleParamAddFormChange = {handleParamAddFormChange}
                        handleParamEditFormChange = {handleParamEditFormChange}
                        handleParamAddFormSubmit = {handleParamAddFormSubmit}
                        
                    />
                </div>
                )}
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 2 && (
                    <div>
                    <h2>Rules</h2>
                    <EditRules 
                        engineRules = {engineRules}
                        setEngineRules = {setEngineRules}
                        parameters = {parameters}
                        cowOrHeifer = {cowOrHeifer}
                        breedType = {breedType}
                        semenType = {semenType}
                        systemType = {systemType}
                        gnrh = {gnrh}
                        pg = {pg} 
                        selectedRuleSet = {selectedRuleSet}
                        setSelectedRuleSet = {setSelectedRuleSet}
                        ruleSetRow = {ruleSetRow} 
                        setRuleSetRow = {setRuleSetRow}
                        ruleSetRowArr = {ruleSetRowArr} 
                        setRuleSetRowArr = {setRuleSetRowArr}
                    />
                </div>
                )}
            </Box>
            <Grid container direction="row" justifyContent="flex-end" alignItems="center" className="download-btn-container">
                <Fab
                variant="extended" 
                color="success" 
                aria-label="add"
                onClick={downloadFile}
                >
                    <DownloadIcon sx={{ mr: 1 }} />
                    Download
                </Fab>
            </Grid>
            
        </div>
    )
}

export default Admin;

/**
 * 
 * /**
     * function to add to the dictionary, returns updated dictionary
     */
/*const addToDict = (dict, id, item) => {
    if(findValueInDict(dict, id)){
        alert("Protocol number already taken. ");
    }else{
        dict[id] = item;
        return dict;
    }
}

/**
 * function to delete items in a dictionary, returns updated dictionary
 */
/*const deleteItemInDict = (dict, id) => {
    if(findValueInDict(dict, id)){
        delete dict[id];
        return dict;
    }
    else{
        alert("that id is not in the list of Protocols")
        return dict;
    }
}

/**
 * function return bool if value is associated with key
 */
/*3const findValueInDict = (dict, id) =>{
    if(dict[id] === undefined){
        return false;
    }else{
        return true;
    }
}
 */
