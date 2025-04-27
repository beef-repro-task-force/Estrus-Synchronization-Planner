import { React, Fragment } from "react";
import EditableRow from "./editableRow";
import ReadOnlyRow from "./readOnlyRow";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Button,
} from "@mui/material";

import "../../style/editProtocols.css";
import "../../style/modal.css";

const editProtocols = (props) => {
  const {
    protocols,
    editProtocolFormData,
    editProtocolId,
    handleDeleteClick,
    handleEditFormSubmit,
    handleEditFormChange,
    handleCancelClick,
    handleEditClick,
    handleAddFormChange,
    handleAddFormSubmit,
    open,
    handleOpen,
    handleClose,
  } = props;

  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {protocols.map((v, k) => {
                if (k != 0) {
                  return (
                    <Fragment key={k}>
                      {editProtocolId === k ? (
                        <EditableRow
                          editProtocolFormData={editProtocolFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
                          protocol={v}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </Fragment>
                  );
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
          <Button onClick={handleOpen} variant="outlined" size="medium">
            Add New Protocol
          </Button>
          <Modal open={open} onClose={handleClose}>
            <div className="add-new-protocol-form modal-background-container">
              <h2>Add new Protocol</h2>
              <form
                onSubmit={handleAddFormSubmit}
                className="add-new-protocol-form-control"
              >
                <input type="number" name="id" onChange={handleAddFormChange} />
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

                <Button type="submit" variant="outlined" size="medium">
                  Add
                </Button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default editProtocols;
