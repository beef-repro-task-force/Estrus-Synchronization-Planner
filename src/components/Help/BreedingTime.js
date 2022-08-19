import React from "react";
import AbbreviationsData from "./Abbreviation.json"


const BreedingTime = () => {

    const DayToStartBreeding = `This is the day that you wish to start heat detection and AI.  In the case of Fixed-Time AI, this is the day that you wish to inseminate the whole group.`
    const TimeToStartBreeding = `Used with Clean-up AI and Fixed Time AI systems.  The average number of hours between PG administration and insemination should be close to the suggested interval.  Strive for the recommended interval +/- 2 hours.`
    

    return(
        <div className="centerDiv">
            <table>
                <tbody>
                    <tr>
                        <td><strong>Day to Start Breeding</strong></td>
                        <td>{DayToStartBreeding}</td>
                    </tr>

                    <tr>
                        <td><strong>Time to Start Breeding</strong></td>
                        <td>{TimeToStartBreeding}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default BreedingTime