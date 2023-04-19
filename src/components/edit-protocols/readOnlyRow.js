import React from 'react';
import { TableCell, TableRow, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const ReadOnlyRow = (props) =>{
    const { handleEditClick,  
            protocol,
            handleDeleteClick } = props;
  
    return(
        <TableRow>
        <TableCell>{protocol.id}</TableCell>
        <TableCell>{protocol.SynchronizationSystemTitle}</TableCell>
        <TableCell>
          <Fab
            sx={{ ml: 1     }} 
            type='button'
            onClick={(event) => {handleEditClick(event, protocol)}}
            > 
              <EditIcon /> 
          </Fab>

          <Fab
          sx={{ ml: 1 }}
          onClick={() => handleDeleteClick(protocol.id)}
          aria-label="delete"
          size="medium"
          >
            <DeleteIcon />
          </Fab>
        </TableCell>
      </TableRow>
    )
}

export default ReadOnlyRow;

/**
 * 
 * <button
            type="button"
            onClick={(event) => handleEditClick(event, protocol)}
          >
            Edit
          </button>
 * 
 *  <tr>
        <TableCell>
        <input
        type="text"
        name="id"
        required="required"
        placeholder="Enter a number..."
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="SynchronizationSystemTitle"
        required="required"
        placeholder="Enter the name..."
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfPGFShotsPerFemale"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfGnRHShotsPerFemale"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfCIDRsPerFemale"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfDaysOnMGA"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfDaysDrylot"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfDaysAI"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfTechTrips"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfHeatChecks"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="NumberOfChuteTimes"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="ResponseStartPercentage"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="ConcpeptionStartPercentage"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="BeginHeat"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="EndHeaTableCellate"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="BeginMGADate"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="EndMGADate"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="DaysWorkedForLaborCosts"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="HourWait"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="BreedingTimeRange"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="minPG"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="maxPG"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="minGnRH"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="maxGnRH"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="minCiDR"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="maxCiDR"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="minMGA"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="maxMGA"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="SumMINs"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="SumMAXs"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="DaysStartToEnd"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="PullCIDR"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="PGShot"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="GNRH"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="DateOfAIAdjustments"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="HourToleranceAdjustments"
        onChange={handleAddFormChange}
        />
        <br />
        <input
        type="text"
        name="LastPGInjectionDate"
        onChange={handleAddFormChange}
        />
        </TableCell>
        <TableCell></TableCell>
        <TableCell>
            <button type="button" onClick={(e)=> handleEditClick(e, protocol)}>Edit</button>
        </TableCell>
        </tr>
 */