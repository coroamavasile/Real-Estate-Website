import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2022-03-24T12:00",
    endDate: "2022-03-24T13:30",
    title: "Go to a gym",
  },
];
const Test = (props) => {
  const [currentDate, setCurrentDate] = useState("2018-11-01");
  return (
    <div>
      <input
        type="datetime-local"
        name="date"
        onChange={(e) =>
          setCurrentDate(e.target.value.toString().substring(0, 10))
        }
      />
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <DayView startDayHour={9} endDayHour={14} />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Test;
