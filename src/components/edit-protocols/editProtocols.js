import {React, Fragment} from "react";
import EditableRow from "./editableRow";
import ReadOnlyRow from "./readOnlyRow";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import {Input, InputLabel, TextField,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Fab, FormControl,
    CircularProgress, Modal, Button } from "@mui/material";

import "../../style/editProtocols.css";
import "../../style/modal.css";

const editProtocols = props => {
    const { protocols, 
            setProtocols, 
            addProtocolFormData, 
            setAddProtocolFormData,
            editProtocolFormData,
            setEditProtocolFormData,
            editProtocolId,
            setEditProtocolId,
            loadingContainer,
            setLoadingContainer,
            handleDeleteClick,
            handleEditFormSubmit,
            handleEditFormChange,
            handleCancelClick,
            handleEditClick,
            handleAddFormChange,
            handleAddFormSubmit,
            open,
            setOpen,
            handleOpen,
            handleClose } = props;
            

    /*Object.keys(protoDictionary).forEach(key => {
        console.log(`${key}: ${protoDictionary[key].SynchronizationSystemTitle}`);
    });*/

    /*Object.keys(protoDictionary).map((k)=>{
        console.log(k)
    })*/

    return(
        <div>
            <form onSubmit={handleEditFormSubmit} >
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {protocols.map((v, k)=>{
                                if(k != 0){
                                    return(
                                        <Fragment key={k}>
                                            {editProtocolId === k ? (
                                            <EditableRow
                                                editProtocolFormData = {editProtocolFormData}
                                                handleEditFormChange = {handleEditFormChange}
                                                handleCancelClick = {handleCancelClick}
                                            />
                                            ) : (
                                            <ReadOnlyRow
                                                protocol = {v}
                                                handleEditClick = {handleEditClick}
                                                handleDeleteClick = {handleDeleteClick}
                                            />
                                            )}
                                        </Fragment>
                                    )
                                }
                            })} 
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>

            <br />
            <br />
            <div>
            <div>
                <Button onClick={handleOpen} variant="outlined" size="medium">Add New Protocol</Button>
                <Modal
                    open={open}
                    onClose={handleClose}>
                    
                
                <div className="add-new-protocol-form modal-background-container">
                    <h2>Add new Protocol</h2>
                    <form onSubmit={handleAddFormSubmit} className="add-new-protocol-form-control">
                        <input
                        type="number"
                        name="id"
                        
                        onChange={handleAddFormChange}
                        />
                        <br />
                        <br />
                        <input
                        type="text"
                        name="SynchronizationSystemTitle"
                        required="required"
                        placeholder="Enter the name..."
                        onChange={handleAddFormChange}
                        />
                        <br />
                        <br />
                        <input
                        type="text"
                        name="HourToleranceAdjustments"
                        onChange={handleAddFormChange}
                        />
                        <br />
                        <br />

                        <Button type="submit" variant="outlined" size="medium">Add</Button>
                        
                    </form>
                </div>
                </Modal>
            </div>
            </div>
            
        </div> 
    );
}

export default editProtocols;

/**
 * 
 * id: protocol.id,
            SynchronizationSystemTitle: protocol.SynchronizationSystemTitle,
            NumberOfPGFShotsPerFemale: protocol.NumberOfPGFShotsPerFemale,
            NumberOfGnRHShotsPerFemale: protocol.NumberOfGnRHShotsPerFemale,
            NumberOfCIDRsPerFemale: protocol.NumberOfCIDRsPerFemale,
            NumberOfDaysOnMGA: protocol.NumberOfDaysOnMGA,
            NumberOfDaysDrylot: protocol.NumberOfDaysDrylot,
            NumberOfDaysAI: protocol.NumberOfDaysAI,
            NumberOfTechTrips: protocol.NumberOfTechTrips,
            NumberOfHeatChecks: protocol.NumberOfHeatChecks,
            NumberOfChuteTimes: protocol.NumberOfChuteTimes,
            ResponseStartPercentage: protocol.ResponseStartPercentage,
            ConcpeptionStartPercentage: protocol.ConcpeptionStartPercentage,
            BeginHeat: protocol.BeginHeat,
            EndHeatDate: protocol.EndHeatDate,
            BeginMGADate: protocol.BeginMGADate,
            EndMGADate: protocol.EndMGADate,
            DaysWorkedForLaborCosts: protocol.DaysWorkedForLaborCosts,
            HourWait: protocol.HourWait,
            BreedingTimeRange: protocol.BreedingTimeRange,
            minPG: protocol.minPG,
            maxPG: protocol.maxPG,
            minGnRH: protocol.minGnRH,
            maxGnRH: protocol.maxGnRH,
            minCiDR: protocol.minCiDR,
            maxCiDR: protocol.maxCiDR,
            minMGA: protocol.minMGA,
            maxMGA: protocol.maxMGA,
            SumMINs: protocol.SumMINs,
            SumMAXs: protocol.SumMAXs,
            DaysStartToEnd: protocol.DaysStartToEnd,
            PullCIDR: protocol.PullCIDR,
            PGShot: protocol.PGShot,
            GNRH: protocol.GNRH,
            DateOfAIAdjustments: protocol.DateOfAIAdjustments,
            HourToleranceAdjustments: protocol.HourToleranceAdjustments,
            LastPGInjectionDate: protocol.LastPGInjectionDate,




            <Fab
                    className="add-new-protocol-btn" 
                    variant="extended" 
                    size="medium" 
                    color="primary"
                    type="submit">
                    <AddIcon sx={{ mr: 1 }} />
                    Add
                    </Fab>



                    <Fragment key={k}>
                                    {editProtocolId === k ? (
                                    <EditableRow
                                        editProtocolFormData={editProtocolFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                    ) : (
                                    <ReadOnlyRow
                                        dictIndex = {k}
                                        dictItem = {v.SynchronizationSystemTitle}
                                        protoDictionary={protoDictionary}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                        
                                    />
                                    )}
                                </Fragment>

                                <Fragment key={k}>
                                        {editProtocolId === k ? (
                                        <EditableRow
                                            protoDictionary = {protoDictionary}
                                            editProtocolFormData = {editProtocolFormData}
                                            handleEditFormChange = {handleEditFormChange}
                                            handleCancelClick = {handleCancelClick}
                                        />
                                        ) : (
                                        <ReadOnlyRow
                                            dictIndex = {k}
                                            protoDictionary = {protoDictionary}
                                            handleEditClick = {handleEditClick}
                                            handleDeleteClick = {handleDeleteClick}
                                        />
                                        )}
                                    </Fragment>

    const handleDeleteClick = (protocolId) => {
        const newProtocols = [...protocols];
    
        const index = protocols.findIndex((protocol) => protocol.id === protocolId);
    
        newProtocols.splice(index, 1);
    
        setProtocols(newProtocols);
    };


 */