import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Grid, TextField } from "@material-ui/core";
import { Modal } from "@mui/material";

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

const AddHouseForSellModal = (props) => {
  const [user, setUser] = useState({
    userId: 0,
    ownerName: "none",
    type: "casa",
    rent: 0,
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, ...{ [name]: value } });
  };
  const [date, setDate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/user/proprietate", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(user);
  };

  return (
    <div>
      <div>
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{ background: "white" }}>
            <h1>Add</h1>

            <Container>
              <Grid>
                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    onChange={handleInput}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="description"
                    label="description"
                    name="description"
                    onChange={handleInput}
                    autoFocus
                    multiline
                    rows={4}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    onChange={handleInput}
                    autoFocus
                  />

                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="price"
                    label="Price"
                    name="price"
                    onChange={handleInput}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="imageUrl"
                    label="ImageURL"
                    name="imageUrl"
                    onChange={handleInput}
                    autoFocus
                  />
                  <select
                    style={{ height: "40px", width: "40%" }}
                    name="role"
                    id="role"
                    onChange={(e) => {
                      setUser({ ...user, ...{ type: e.target.value } });
                    }}
                  >
                    <option value="casa">Casa</option>
                    <option value="apartament">Apartament</option>
                    <option value="garsoniera">Garsoniera</option>
                  </select>
                  <Button
                    style={{ marginTop: "5%", marginBottom: "5%" }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Add
                  </Button>
                  <div className="brake-line"></div>
                </form>
              </Grid>
            </Container>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AddHouseForSellModal;
