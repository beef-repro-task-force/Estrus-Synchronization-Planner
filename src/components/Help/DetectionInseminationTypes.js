import React from "react";
import DIT from "./Detection-Insemination-type.json"

const DetectionIneminationTypes = () => {
    return(
        <div className="centerDiv">
            <table>
                <tbody>
                <tr>
                    <td><h3>Insemination Type </h3></td>
                    <td><h3>Definition</h3></td>
                </tr>
                {DIT.map((item, index) => (
                    <tr key={index} >
                        <td> <strong>{item[0]}</strong> </td>
                        <td> {item[1]} </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DetectionIneminationTypes