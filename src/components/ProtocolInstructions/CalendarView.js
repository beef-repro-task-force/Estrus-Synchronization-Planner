import React from "react";
import { Button } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import dayjs from "dayjs";
import "../../style/calendarView.css";

const CalendarView = (props) => {
  const {
    ListOfCalendarInstruction,
    DateToStartBreeding,
    SynchronizationProtocol,
    GNRH,
    PG,
    SemenType,
  } = props;


  // text changes
  let selectedGNRH;
  let selectedPG;
  let listOfCalendarInstruction = JSON.parse(JSON.stringify(ListOfCalendarInstruction));
  let ai_standing_heat_txt = "";
  let ai_with_sexed_semen = "";
  let ai_with_sexed_semen_showing = "";
  let ai_with_sexed_semen_plus_conventional = "";
  let nonestrous_females = "";
  let cidr_device = "";
  let estrus_detection_aid = "";
  let ai_females_showing_estrus = "";

  let mga_time_change = dayjs().startOf("day");
  let mga_time_change_2 = dayjs().startOf("day");
  let mga_time_change_3 = dayjs().startOf("day");

  let dateToStartBreeding = DateToStartBreeding.clone();

  mga_time_change = mga_time_change.subtract(19, "day").startOf("day");
  mga_time_change_2 = mga_time_change_2.subtract(11, "day").startOf("day");
  mga_time_change_3 = mga_time_change_3.subtract(22, "day").startOf("day");


  //store if breed females AI 16-22....
  // G14 -> Semen Type
  if (SemenType === "Conventional & Sexed") {
    ai_standing_heat_txt = "Breed females AI 16-22 hours after standing heat.";
    ai_with_sexed_semen = "AI with sexed semen estrous females";
    ai_with_sexed_semen_showing =
      "AI with sexed semen those showing females estrus";
    ai_with_sexed_semen_plus_conventional =
      "AI with sexed semen estrous females.  All others with conventional semen.";
    nonestrous_females = "Inject 2cc Cystorelin (GnRH) to nonestrous females.";
    cidr_device =
      "Remove the CIDR device and apply estrus detection aid for each female.";
    estrus_detection_aid = "Apply estrus detection aid.";
    ai_females_showing_estrus =
      "AI females showing estrus with sexed semen.  All others with conventional semen.";
  } else {
    ai_standing_heat_txt = "Breed females AI 10-14 hours after standing heat.";
    ai_with_sexed_semen = "AI females in estrus";
    ai_with_sexed_semen_showing = "AI females in estrus";
    ai_with_sexed_semen_plus_conventional = "AI females in estrus";
    nonestrous_females = "Inject 2cc Cystorelin (GnRH) to all females.";
    cidr_device = "Remove the CIDR device from each female.";
  }

  //search instruction for <<ai_after_standing_heat>>
  listOfCalendarInstruction.forEach((item) => {
    for (let param in item) {
      if (item[param] === "<<ai_after_standing_heat>>")
        item[param] = ai_standing_heat_txt;
      if (item[param] === "<<ai_sexed_semen>>")
        item[param] = ai_with_sexed_semen;
      if (item[param] === "<<ai_with_sexed_semen_showing>>")
        item[param] = ai_with_sexed_semen_showing;
      if (item[param] === "<<ai_with_sexed_semen_plus_conventional>>")
        item[param] = ai_with_sexed_semen_plus_conventional;
      if (item[param] === "<<nonestrous>>") item[param] = nonestrous_females;
      if (item[param] === "<<cidr_device>>") item[param] = cidr_device;
      if (item[param] === "<<estrus_detection_aid>>")
        item[param] = estrus_detection_aid;
      if (item[param] === "<<ai_females_showing_estrus>>")
        item[param] = ai_females_showing_estrus;
      if (item[param] === "<<current_time>>")
        item[param] = dateToStartBreeding.format('h:mm A');

      if (item[param] === "<<mga_time_change_3>>")
        item[param] =
          "Continue feeding until " +
          mga_time_change_3.format('MM/DD/YYYY') +
          ".";
      if (item[param] === "<<mga_time_change_2>>")
        item[param] =
          "Continue feeding until " +
          mga_time_change_2.format('MM/DD/YYYY') +
          ".";
      if (item[param] === "<<mga_time_change>>")
        item[param] =
          "Continue feeding until " +
          mga_time_change.format('MM/DD/YYYY') +
          ".";
    }
  });

  switch (true) {
    case GNRH === "Cystorelin":
      selectedGNRH = "2cc Cystorelin (GnRH)";
      break;
    case GNRH === "Factrel":
      selectedGNRH = "2cc Factrel (GnRH)";
      break;
    case GNRH === "Fertagyl":
      selectedGNRH = "2cc Fertagyl (GnRH)";
      break;
    case GNRH === "OvaCyst":
      selectedGNRH = "2cc OvaCyst (GnRH)";
      break;
    case GNRH === "GONAbreed":
      selectedGNRH = "1cc GONAbreed (GnRH)";
      break;
    case GNRH === "GnRH":
      selectedGNRH = "(GnRH)";
      break;
    default:
      break;
  }

  switch (true) {
    case PG === "Estrumate":
      selectedPG = "2cc Estrumate (PG)";
      break;
    case PG === "EstroPLAN":
      selectedPG = "2cc EstroPLAN (PG)";
      break;
    case PG === "InSynch":
      selectedPG = "5cc InSynch (PG)";
      break;
    case PG === "Lutalyse":
      selectedPG = "5cc Lutalyse (PG)";
      break;
    case PG === "ProstaMate":
      selectedPG = "5cc ProstaMate (PG)";
      break;
    case PG === "HiConc.Lutalyse":
      selectedPG = "2cc HiConc.Lut. (PG)";
      break;
    case PG === "Synchsure":
      selectedPG = "2cc Synchsure (PG)";
      break;
    case PG === "PG":
      selectedPG = "(PG)";
      break;
    default:
      break;
  }

  const length = Object.keys(listOfCalendarInstruction).length;

  for (var i = 0; i < length; i++) {
    var marginOfErr = -1;
    var stepX = "step";

    // subtract time
    for (var j = 1; j < 6; j++) {
      stepX = "step" + j;
      // subtract time
      if (JSON.stringify(listOfCalendarInstruction[i][stepX]) !== undefined) {
        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.416666667")
        ) {
          marginOfErr = 0;
        }
        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.333333333")
        ) {
          marginOfErr = 2;
        }
        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.291666667")
        ) {
          marginOfErr = 3;
        }
        if (JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.25")) {
          marginOfErr = 4;
        }
        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.166666667")
        ) {
          marginOfErr = 6;
        }
        if (JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("-12hrs")) {
          marginOfErr = 12;
        }
        if (JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("-15hrs")) {
          marginOfErr = 15;
        }
        if (JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("-18hrs")) {
          marginOfErr = 18;
        }
        if (marginOfErr >= 0) {
          let tempDateToStartBreeding = dateToStartBreeding.clone();
          tempDateToStartBreeding = tempDateToStartBreeding.subtract(
            marginOfErr,
            "hour"
          );
          listOfCalendarInstruction[i][stepX] =
            tempDateToStartBreeding.format("h:mm A");

          tempDateToStartBreeding = tempDateToStartBreeding.add(
            marginOfErr,
            "hour"
          );
          marginOfErr = -1;
        }
      }

      // add time
      if (JSON.stringify(listOfCalendarInstruction[i][stepX]) !== undefined) {
        if (JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.5")) {
          marginOfErr = 2;
        }
        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.541666667")
        ) {
          marginOfErr = 3;
        }
        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.583333333")
        ) {
          marginOfErr = 4;
        }
        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("0.666666667")
        ) {
          marginOfErr = 6;
        }
        if (JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("+9hrs")) {
          marginOfErr = 9;
        }
        if (JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("+12hrs")) {
          marginOfErr = 12;
        }
        if (JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("+18hrs")) {
          marginOfErr = 18;
        }
        if (marginOfErr >= 0) {
          let tempDateToStartBreeding = dateToStartBreeding.clone();
          tempDateToStartBreeding = tempDateToStartBreeding.add(
            marginOfErr,
            "hour"
          );
          listOfCalendarInstruction[i][stepX] =
            tempDateToStartBreeding.format("h:mm A");

          tempDateToStartBreeding = tempDateToStartBreeding.subtract(
            marginOfErr,
            "hour"
          );
          marginOfErr = -1;
        }

        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes(
            "2cc Cystorelin"
          )
        ) {
          listOfCalendarInstruction[i][stepX] = JSON.parse(
            JSON.stringify(listOfCalendarInstruction[i][stepX]).replace(
              "2cc Cystorelin (GnRH)",
              selectedGNRH
            )
          );
        }

        if (
          JSON.stringify(listOfCalendarInstruction[i][stepX]).includes("5cc Lutalyse")
        ) {
          listOfCalendarInstruction[i][stepX] = JSON.parse(
            JSON.stringify(listOfCalendarInstruction[i][stepX]).replace(
              "5cc Lutalyse (PG)",
              selectedPG
            )
          );
        }
      }
    }
  }

  let calEventArr = [];

  listOfCalendarInstruction.forEach((instruction) => {
    let tempDate = dateToStartBreeding.clone();

    if (parseInt(instruction.OnDay) < 0) {
      tempDate = tempDate.add(parseInt(instruction.OnDay) + 1, "day");
    } else {
      tempDate = tempDate.add(parseInt(instruction.OnDay), "day");
    }

    for (let item in instruction) {
      if (item !== "OnDay") {
        let newItemObj = {
          title: instruction[item],
          display: "auto",
          start: tempDate.format('YYYY-MM-DD'),
        };
        calEventArr.push(newItemObj);
      }
    }
  });

  calEventArr.reverse();

  return (
    <div className="calendar-container">
      <h2>Protocol #{SynchronizationProtocol}</h2>

      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          events={calEventArr}
          height={"auto"}
          aspectRatio={1}
        />
      </div>
      <br />
      <center>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            window.print();
          }}
        >
          Print
        </Button>
      </center>
    </div>
  );
};

export default CalendarView;
