import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Register = (props) => {
  const [user, setUser] = useState({ role: "client" });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, ...{ [name]: value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    console.log(result);
  };

  return (
    <div>
      <div>
        {" "}
        <Box sx={style} style={{ height: "70%" }}>
          <h1> Register</h1>
          <Container>
            <Grid>
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  onChange={handleInput}
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  onChange={handleInput}
                  autoFocus
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  onChange={handleInput}
                  autoFocus
                />
                <select
                  style={{ height: "40px", width: "40%" }}
                  name="role"
                  id="role"
                  onChange={(e) => {
                    setUser({ ...user, ...{ role: e.target.value } });
                  }}
                >
                  <option value="client">Client</option>
                  <option value="agent">Agent_Imobiliar</option>
                </select>

                <Button
                  style={{ marginTop: "5%", marginBottom: "5%" }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </form>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Register;
