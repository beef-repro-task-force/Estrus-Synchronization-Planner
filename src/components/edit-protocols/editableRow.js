import React from "react";
import {Input, TableCell, TableRow, Fab, FormControl} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

const EditableRow = (props) =>{
    const {editProtocolFormData, handleEditFormChange, handleCancelClick } = props
    return (
        <tr> 
            <td>
            <input
            type="number"
            name="id"
            required="required"
            placeholder="Enter a number..."
            value={editProtocolFormData.id}
            onChange={handleEditFormChange}
            />
            </td>
            <td>
            <input
            type="text"
            name="SynchronizationSystemTitle"
            required="required"
            placeholder="Enter the name..."
            value={editProtocolFormData.SynchronizationSystemTitle}
            onChange={handleEditFormChange}
            />
            </td>
            <td>
            <input
            type="text"
            name="HourToleranceAdjustments"
            value={editProtocolFormData.HourToleranceAdjustments}
            onChange={handleEditFormChange}
            />
            </td>
            <td>
                <Fab type="submit">
                    <SaveIcon />
                </Fab>
                
                <Fab type="button" onClick={handleCancelClick}>
                    <CancelIcon />
                </Fab>
            </td>
        </tr>
    )
}

export default EditableRow
