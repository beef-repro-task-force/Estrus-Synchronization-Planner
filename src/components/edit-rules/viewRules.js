import React, { useEffect, useState } from "react";
import { Button, Tabs, Tab, Box, Fab, CircularProgress, Grid } from "@mui/material";

import ViewListOfCondition from "./viewListOfCondition";

import "../../style/Admin.css";

const ViewRules = props => {
    const { engineRules } = props;

    Object.keys(engineRules).map(key => {
        console.log(key);
        Object.keys(engineRules[key][0]).map(item => {
            console.log(engineRules[key][0][item])
        })
      });


    return(
        <div>
            {
                Object.keys(engineRules).map(key => {
                    return (
                        <div key={key}>
                            <h4>{key}</h4>
                            <ViewListOfCondition 
                                conditions = {engineRules[key][0]}
                            />
                        </div>
                        )
                  })
            }
        </div>
    );

}

export default ViewRules;