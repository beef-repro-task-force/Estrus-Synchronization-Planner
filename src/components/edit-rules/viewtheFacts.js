import { React } from "react";

const ViewTheFacts = (props) => {
  const { facts } = props;

  return (
    <div>
      {Object.keys(facts).map((item) => {
        return (
          <div key={item}>
            <p>
              {item}:{facts[item].fact},{facts[item].operator},
              {facts[item].value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewTheFacts;
