import React from "react";
import RulesControlList from "./rulesControlList";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const editRules = (props) => {
  const {
    engineRules,
    parameters,
    cowOrHeifer,
    breedType,
    semenType,
    systemType,
    gnrh,
    pg,
    setSelectedRuleSet,
    selectedRuleSet,
  } = props;

  let arrOfRules = [];

  Object.keys(engineRules[selectedRuleSet][0]).forEach((key) => {
    arrOfRules.push(key);
  });

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={8}>
          <RulesControlList
            parameters={parameters}
            cowOrHeifer={cowOrHeifer}
            breedType={breedType}
            semenType={semenType}
            systemType={systemType}
            gnrh={gnrh}
            pg={pg}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Select a Set of Rules</InputLabel>
          <FormControl variant="filled" className="Input-formcontrol-style">
            <Select
              className="InputStyle"
              value={selectedRuleSet}
              onChange={(event) => {
                setSelectedRuleSet(event.target.value);
              }}
            >
              <MenuItem value={"Cow Preferred Systems"}>
                Cow Preferred Systems
              </MenuItem>
              <MenuItem value={"Cow Less Preferred Systems"}>
                Cow Less Preferred Systems
              </MenuItem>
              <MenuItem value={"Heifer Preferred Systems"}>
                Heifer Preferred Systems
              </MenuItem>
              <MenuItem value={"Heifer Less Preferred Systems"}>
                Heifer Less Preferred Systems
              </MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <center>
            <ArrowDownwardIcon />
          </center>
          <br />
        </Grid>
      </Grid>
    </div>
  );
};

export default editRules;