import React from "react";
import { Button } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "../../style/calendarView.css";

const CalendarView = (props) => {
  const {
    ListOfCalendarInstruction,
    DateToStartBreeding,
    SynchronizationProtocol,
    SemenType,
  } = props;


  let timeTmp = DateToStartBreeding;
  // text changes
  let ai_standing_heat_txt = "";
  let ai_with_sexed_semen = "";
  let ai_with_sexed_semen_showing = "";
  let ai_with_sexed_semen_plus_conventional = "";
  let nonestrous_females = "";
  let cidr_device = "";
  let estrus_detection_aid = "";
  let ai_females_showing_estrus = "";

  let mga_time_change = new Date();
  let mga_time_change_2 = new Date();
  let mga_time_change_3 = new Date();

  mga_time_change.setDate(DateToStartBreeding.getDate() - 19);
  mga_time_change_2.setDate(DateToStartBreeding.getDate() - 11);
  mga_time_change_3.setDate(DateToStartBreeding.getDate() - 22);

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
  ListOfCalendarInstruction.forEach((item) => {
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
        item[param] = DateToStartBreeding.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

      if (item[param] === "<<mga_time_change_3>>")
        item[param] =
          "Continue feeding until " +
          (mga_time_change_3.getMonth() + 1) +
          "/" +
          mga_time_change_3.getDate() +
          "/" +
          mga_time_change_3.getFullYear() +
          ".";
      if (item[param] === "<<mga_time_change_2>>")
        item[param] =
          "Continue feeding until " +
          (mga_time_change_2.getMonth() + 1) +
          "/" +
          mga_time_change_2.getDate() +
          "/" +
          mga_time_change_2.getFullYear() +
          ".";
      if (item[param] === "<<mga_time_change>>")
        item[param] =
          "Continue feeding until " +
          (mga_time_change.getMonth() + 1) +
          "/" +
          mga_time_change.getDate() +
          "/" +
          mga_time_change.getFullYear() +
          ".";
    }
  });

  let calEventArr = [];

  ListOfCalendarInstruction.forEach((instruction) => {
    let tempDate = new Date(timeTmp);
    tempDate.setDate(timeTmp.getDate() + parseInt(instruction.OnDay));
    for (let item in instruction) {
      if (item !== "OnDay") {
        let newItemObj = {
          title: instruction[item],
          display: "auto",
          start: `${tempDate.getFullYear()}-${(tempDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${tempDate
            .getDate()
            .toString()
            .padStart(2, "0")}`,
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
