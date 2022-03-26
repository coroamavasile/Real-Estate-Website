import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
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

const ProgramariTableModal = (props) => {
  let { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());

  function createData(id, data, ora, client) {
    return { id, data, ora, client };
  }
  const [rows, setRows] = useState([]);
  const [currentDate, setCurrentDate] = useState("2022-03-24");
  const [semafor, setSemafor] = useState(true);
  const [dateProgramre, setDateProgramre] = useState([]);
  const [dataTable, setDataTable] = useState([
    {
      name: "01",
      uv: 0,
    },
    {
      name: "02",
      uv: 0,
    },
    {
      name: "03",
      uv: 0,
    },
    {
      name: "04",
      uv: 0,
    },
    {
      name: "05",
      uv: 0,
    },
    {
      name: "06",
      uv: 0,
    },
    {
      name: "07",
      uv: 0,
    },
    {
      name: "08",
      uv: 0,
    },
    {
      name: "09",
      uv: 0,
    },
    {
      name: "10",
      uv: 0,
    },
    {
      name: "11",
      uv: 0,
    },
    {
      name: "12",
      uv: 0,
    },
    {
      name: "13",
      uv: 0,
    },
    {
      name: "14",
      uv: 0,
    },
    {
      name: "15",
      uv: 0,
    },
    {
      name: "16",
      uv: 0,
    },
    {
      name: "17",
      uv: 0,
    },
    {
      name: "18",
      uv: 0,
    },
    {
      name: "19",
      uv: 0,
    },
    {
      name: "20",
      uv: 0,
    },
    {
      name: "21",
      uv: 0,
    },
    {
      name: "22",
      uv: 0,
    },
    {
      name: "23",
      uv: 0,
    },
    {
      name: "24",
      uv: 0,
    },
    {
      name: "25",
      uv: 0,
    },
    {
      name: "26",
      uv: 0,
    },
    {
      name: "27",
      uv: 0,
    },
    {
      name: "28",
      uv: 0,
    },
    {
      name: "29",
      uv: 0,
    },
    {
      name: "30",
      uv: 0,
    },
  ]);

  const search = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/user/programare/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let result2 = await result.json();
    console.log(result2);
    let rows2 = [];
    let arrDateValue = [];
    result2.map((item) => {
      if (parseInt(id) === parseInt(item.proprietateId)) {
        let value = createData(item.id, item.data, item.ora, item.userId);
        rows2.push(value);
        let dataProg = item.data.substring(8, 10);
        let auxiliar = dataTable;
        let crtDay = dataTable[parseInt(dataProg) - 1];
        crtDay.uv++;
        auxiliar[parseInt(dataProg) - 1] = crtDay;
        setDataTable(auxiliar);
        //  {
        //   startDate: "2022-03-24T12:00",
        //   endDate: "2022-03-24T13:30",
        //   title: "Go to a gym",
        // },
        let dateValue = {};
        let endHour = parseInt(item.ora.substring(0, 2));
        // console.log(endHour);
        dateValue.startDate = item.data + "T" + item.ora;
        dateValue.endDate = item.data + "T" + endHour + ":00";
        dateValue.title = "Utilizatorul " + item.userId;
        arrDateValue.push(dateValue);
        console.log(dateValue);
      }
    });
    setDateProgramre(arrDateValue);
    setRows(rows2);
    setSemafor(false);
  };

  useEffect(() => {
    search();
  }, []);

  const renderCalendar = () => {
    return (
      <div
        style={{
          width: "70%",
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="datetime-local"
          name="date"
          onChange={(e) =>
            setCurrentDate(e.target.value.toString().substring(0, 10))
          }
        />
        <Paper>
          <Scheduler data={dateProgramre}>
            <ViewState currentDate={currentDate} />
            <DayView startDayHour={8} endDayHour={22} />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>
    );
  };

  if (localStorage.getItem("USER") !== "agent") {
    return (
      <div style={{ textAlign: "center", margin: "5%", fontSize: 30 }}>
        Trebuie sa fii logat cu un cont de agent pentru a vizualiza aceasta
        pagina!
      </div>
    );
  }
  if (semafor) return <div>Loading...</div>;

  const renderChart = () => {
    return (
      <div>
        <BarChart
          width={800}
          height={300}
          data={dataTable}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Ora</TableCell>
              <TableCell align="right">Client</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.data}</TableCell>
                <TableCell align="right">{row.ora}</TableCell>
                <TableCell align="right">{row.client}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Programari</h1>
        <div style={{ marginLeft: "25%", marginTop: "5%" }}>
          {renderCalendar()}
        </div>
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
          {renderTable()}
        </div>
        <div style={{ marginLeft: "25%", marginTop: "5%", marginBottom: "5%" }}>
          {renderChart()}
        </div>
      </div>
    </div>
  );
};

export default ProgramariTableModal;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
