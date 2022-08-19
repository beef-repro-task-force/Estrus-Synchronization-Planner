import React from "react";
import AbbreviationsData from "./Abbreviation.json"


const AbbreviationsTable = () => {
    return(
        <div className="centerDiv">
            <table>
            <tbody>
                <tr>
                    <td><h3>Abbreviation </h3></td>
                    <td><h3>Definition</h3></td>
                </tr>
                {AbbreviationsData.map((item,index) => (
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

export default AbbreviationsTable