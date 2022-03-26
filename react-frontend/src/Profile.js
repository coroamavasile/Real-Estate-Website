import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import axios from "axios";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [state, setState] = React.useState({
    apartamentVanzare: false,
    garsonieraVanzare: false,
    casaVanzare: false,
    apartamentInchiriere: true,
    garsonieraInchiriere: false,
    casaInchiriere: false,
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.checked,
    });
    console.log(user);
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, ...{ [name]: value } });
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    console.log(selectedFile);
    formData.append("file", selectedFile);

    const options = {
      method: "POST",
      body: formData,
    };
    console.log(formData);
    fetch("http://127.0.0.1:8000/api/user/addfile", options);
  };

  const search = () => {
    fetch(
      "http://127.0.0.1:8000/api/user/get/" + localStorage.getItem("USER_ID")
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  };

  useEffect(() => {
    search();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    let result = await fetch("http://127.0.0.1:8000/api/user/edit", {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    alert("Profilul dumneavoastra a fost modificat!");
    window.location.reload();
  };

  if (user === null) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <Box sx={style} style={{ height: "80%" }}>
          {localStorage.getItem("USER") === "client" && <h1>Client Profile</h1>}
          {localStorage.getItem("USER") === "agent" && <h1>Agent Profile</h1>}
          <Container>
            <Grid>
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  placeholder={user.email}
                  onChange={handleInput}
                  autoFocus
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  placeholder={user.name}
                  onChange={handleInput}
                  autoFocus
                />
                {localStorage.getItem("USER") === "client" && (
                  <div>
                    <h1 style={{ textAlign: "center" }}>Preferinte</h1>
                    <div>
                      {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                      <FormGroup style={{ display: "inline-block" }}>
                        <div style={{ display: "flex" }}>
                          <div style={{ flex: 1, maxWidth: "50%" }}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={user.apartamentVanzare}
                                  onChange={handleChange}
                                  name="apartamentVanzare"
                                />
                              }
                              label="Apartament vanzare"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={user.garsonieraVanzare}
                                  onChange={handleChange}
                                  name="garsonieraVanzare"
                                />
                              }
                              label="Garsoniera vanzare"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={user.casaVanzare}
                                  onChange={handleChange}
                                  name="casaVanzare"
                                />
                              }
                              label="Casa vanzare"
                            />
                          </div>
                          <div style={{ flex: 2, maxWidth: "50%" }}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={user.apartamentInchiriere}
                                  onChange={handleChange}
                                  name="apartamentInchiriere"
                                />
                              }
                              label="Apartament Inchiriere"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={user.garsonieraInchiriere}
                                  onChange={handleChange}
                                  name="garsonieraInchiriere"
                                />
                              }
                              label="Garsoniera inchiriere"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={user.casaInchiriere}
                                  onChange={handleChange}
                                  name="casaInchiriere"
                                />
                              }
                              label="Casa inchiriere"
                            />
                          </div>
                        </div>
                      </FormGroup>
                      {/* <FormHelperText>Be careful</FormHelperText>
      </FormControl> */}
                    </div>
                  </div>
                )}

                <Button
                  style={{ marginTop: "5%", marginBottom: "5%" }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>

                {localStorage.getItem("USER") === "client" && (
                  <div>
                    <input type="file" onChange={onFileChange} />
                    <button onClick={onFileUpload}>Upload!</button>
                  </div>
                )}
              </form>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
