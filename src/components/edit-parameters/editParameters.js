import {React, Fragment} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, TableCell, TableContainer, TableHead, 
        TableRow, Fab, Table, TableBody } from "@mui/material";
import ReadOnlyRow from './readOnlyRow';
import EditableRow from './editableRow';

import "../../style/Admin.css";


const editParameters = props =>{
    const { parameters, setParameters, handleParamAddFormSubmit,
        handleParamDeleteClick, editParamId, handleParamAddFormChange,
            cowOrHeifer, breedType, semenType, systemType, 
            gnrh, pg, handleParamEditClick } = props;

    //console.log(parameters)
    return(
        <div>
            <div className="param-wrapper-container">
                <h3>Breed Type</h3>
                <form>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {breedType.map((v, k) => {
                                    if(k != 0){
                                        return(
                                            <Fragment key={k}>
                                                {editParamId === k ? (
                                                <EditableRow
                                                    
                                                />
                                                ) : (
                                                <ReadOnlyRow
                                                    paramType = "breedType"
                                                    parameter = {v}
                                                    handleParamDeleteClick = {handleParamDeleteClick}
                                                    handleParamEditClick = {handleParamEditClick}
                                                />
                                                )}
                                            </Fragment>
                                        )
                                    }
                                })}
                            </TableBody>
                        </Table>
                        <br />
                    </TableContainer>
                </form>
                <div>
                    <h2>Add new Breed</h2>
                    <form onSubmit={(e) => {handleParamAddFormSubmit(e, "breedType")}} className="add-new-protocol-form-control">
                        <input
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Enter the name..."
                        onChange={(e) => {handleParamAddFormChange(e, "breedType")}}
                        />
                        <br />
                        <br />

                        <button type="submit">Add</button>
                    </form>
                </div>
                <br />
            </div>
            <div className="param-wrapper-container-alt">
                <h3>Semen Type</h3>
                <form>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {semenType.map((v, k) => {
                                    if(k != 0){
                                        return(
                                            <Fragment key={k}>
                                                {editParamId === k ? (
                                                <EditableRow
                                                    
                                                />
                                                ) : (
                                                <ReadOnlyRow
                                                    paramType = "semenType"
                                                    parameter = {v}
                                                    handleParamDeleteClick = {handleParamDeleteClick}
                                                    handleParamEditClick = {handleParamEditClick}
                                                />
                                                )}
                                            </Fragment>
                                        )
                                    }
                                })}
                            </TableBody>
                        </Table>
                        <br />
                    </TableContainer>
                </form>
                <div>
                    <h2>Add new Semen</h2>
                    <form onSubmit={(e) => {handleParamAddFormSubmit(e, "semenType")}} className="add-new-protocol-form-control">
                        <input
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Enter the name..."
                        onChange={(e) => {handleParamAddFormChange(e, "semenType")}}
                        />
                        <br />
                        <br />

                        <button type="submit">Add</button>
                    </form>
                </div>
                <br />
            </div>
            <div className="param-wrapper-container">
                <h3>System Type</h3>
                <form>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {systemType.map((v, k) => {
                                    if(k != 0){
                                        return(
                                            <Fragment key={k}>
                                                {editParamId === k ? (
                                                <EditableRow
                                                    
                                                />
                                                ) : (
                                                <ReadOnlyRow
                                                    paramType = "systemType"
                                                    parameter = {v}
                                                    handleParamDeleteClick = {handleParamDeleteClick}
                                                    handleParamEditClick = {handleParamEditClick}
                                                />
                                                )}
                                            </Fragment>
                                        )
                                    }
                                })}
                            </TableBody>
                        </Table>
                        <br />
                    </TableContainer>
                </form>
                <div>
                    <h2>Add new System</h2>
                    <form onSubmit={(e) => {handleParamAddFormSubmit(e, "systemType")}} className="add-new-protocol-form-control">
                        <input
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Enter the name..."
                        onChange={(e) => {handleParamAddFormChange(e, "systemType")}}
                        />
                        <br />
                        <br />

                        <button type="submit">Add</button>
                    </form>
                </div>
                <br />
            </div>
            <div className="param-wrapper-container-alt">
                <h3>GnRH</h3>
                <form>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {gnrh.map((v, k) => {
                                    if(k != 0){
                                        return(
                                            <Fragment key={k}>
                                                {editParamId === k ? (
                                                <EditableRow
                                                    
                                                />
                                                ) : (
                                                <ReadOnlyRow
                                                    paramType = "gnrh"
                                                    parameter = {v}
                                                    handleParamDeleteClick = {handleParamDeleteClick}
                                                    handleParamEditClick = {handleParamEditClick}
                                                />
                                                )}
                                            </Fragment>
                                        )
                                    }
                                })}
                            </TableBody>
                        </Table>
                        <br />
                    </TableContainer>
                </form>
                <div>
                    <h2>Add new GnRH</h2>
                    <form onSubmit={(e) => {handleParamAddFormSubmit(e, "gnrh")}} className="add-new-protocol-form-control">
                        <input
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Enter the name..."
                        onChange={(e) => {handleParamAddFormChange(e, "gnrh")}}
                        />
                        <br />
                        <br />

                        <button type="submit">Add</button>
                    </form>
                </div>
                <br />
            </div>
            <div className="param-wrapper-container">
                <h3>PG</h3>
                <form>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pg.map((v, k) => {
                                    if(k != 0){
                                        return(
                                            <Fragment key={k}>
                                                {editParamId === k ? (
                                                <EditableRow
                                                    
                                                />
                                                ) : (
                                                <ReadOnlyRow
                                                    paramType = "pg"
                                                    parameter = {v}
                                                    handleParamDeleteClick = {handleParamDeleteClick}
                                                    handleParamEditClick = {handleParamEditClick}
                                                />
                                                )}
                                            </Fragment>
                                        )
                                    }
                                })}
                            </TableBody>
                        </Table>
                        <br />
                    </TableContainer>
                </form>
                <br />
                <div>
                    <h2>Add new PG</h2>
                    <form onSubmit={(e) => {handleParamAddFormSubmit(e, "pg")}} className="add-new-protocol-form-control">
                        <input
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Enter the name..."
                        onChange={(e) => {handleParamAddFormChange(e, "pg")}}
                        />
                        <br />
                        <br />

                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>  
        </div>
   );
}

export default editParameters;


/**
 * 
    {Object.keys(parameters).map((param, key) => {
        console.log({param})
        return(
            <div key={key}>
                <h3>{param}</h3>
                <form>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {parameters[param].map((v, k) => {
                                    return(
                                        <Fragment key={k}>
                                            {editParamID === k ? (
                                            <EditableRow
                                            />
                                            ) : (
                                            <ReadOnlyRow
                                                paramSection = {param}
                                                parameter = {v}
                                                paramID = {k}
                                                handleParamDeleteClick = {handleParamDeleteClick}
                                            />
                                            )}
                                        </Fragment>
                                    )
                                })}
                            </TableBody>
                        </Table>
                        <br />
                    </TableContainer>
                </form>
            </div>  
        )
    })}
 */