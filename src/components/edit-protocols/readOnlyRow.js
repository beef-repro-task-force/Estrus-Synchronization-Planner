import React from "react";
import { TableCell, TableRow, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ReadOnlyRow = (props) => {
  const { handleEditClick, protocol, handleDeleteClick } = props;

  return (
    <TableRow>
      <TableCell>{protocol.id}</TableCell>
      <TableCell>{protocol.SynchronizationSystemTitle}</TableCell>
      <TableCell>
        <Fab
          sx={{ ml: 1 }}
          type="button"
          onClick={(event) => {
            handleEditClick(event, protocol);
          }}
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
  );
};

export default ReadOnlyRow;
