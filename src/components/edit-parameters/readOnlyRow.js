import React from "react";
import { TableCell, TableRow, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ReadOnlyRow = (props) => {
  const { parameter, paramType, handleParamDeleteClick, handleParamEditClick } =
    props;

  return (
    <TableRow>
      <TableCell>{parameter.name}</TableCell>
      <TableCell>
        <Fab
          sx={{ ml: 1 }}
          type="button"
          onClick={(event) => {
            handleParamEditClick(event, parameter);
          }}
        >
          <EditIcon />
        </Fab>

        <Fab
          sx={{ ml: 1 }}
          aria-label="delete"
          size="medium"
          onClick={() => handleParamDeleteClick(parameter.id, paramType)}
        >
          <DeleteIcon />
        </Fab>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;
