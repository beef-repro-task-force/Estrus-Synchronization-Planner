import React from "react";

import ViewListOfCondition from "./viewListOfCondition";

import "../../style/Admin.css";

const ViewRules = (props) => {
  const { engineRules } = props;

  return (
    <div>
      {Object.keys(engineRules).map((key) => {
        return (
          <div key={key}>
            <h4>{key}</h4>
            <ViewListOfCondition conditions={engineRules[key][0]} />
          </div>
        );
      })}
    </div>
  );
};

export default ViewRules;
