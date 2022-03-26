import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

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

const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, ...{ [name]: value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();

    if (typeof result.id === "undefined") {
      alert("User sau parola gresita");
    } else {
      localStorage.setItem("USER_ID", result.id);
      localStorage.setItem("USER", result.role);

      // let user2 = localStorage.getItem("USER_ID");
      navigate("/profile");
    }
  };

  return (
    <div>
      <div>
        <Box sx={style} className="container" style={{ height: "45%" }}>
          <h1>Login</h1>
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

                <Button
                  style={{ marginTop: "5%", marginBottom: "5%" }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
                <div className="brake-line"></div>
              </form>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Login;
