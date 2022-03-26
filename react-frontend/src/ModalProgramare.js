import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
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

const ModalProgramare = (props) => {
  const [user, setUser] = useState({});
  const handleInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, ...{ [name]: value } });
  };
  const [date, setDate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(date.substring(0, 10));
    // console.log(date.substring(11, 18));
    // console.log({
    //   userId: localStorage.getItem("USER_ID"),
    //   data: date.substring(0, 10),
    //   ora: date.substring(11, 18),
    //   proprietateId: props.details.proprietateId,
    // });
    let ok = true;

    let result = await fetch("http://127.0.0.1:8000/api/user/programare/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let result2 = await result.json();
    console.log(result2);

    result2.map((item) => {
      if (item.proprietateId === props.details.proprietateId) {
        if (item.data === date.substring(0, 10)) {
          console.log(item.ora.substring(0, 2));
          console.log(date.substring(11, 13));
          if (item.ora.substring(0, 2) === date.substring(11, 13)) {
            ok = false;
          }
        }
      }
    });

    if (ok) {
      await fetch("http://127.0.0.1:8000/api/user/programare", {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("USER_ID"),
          data: date.substring(0, 10),
          ora: date.substring(11, 18),
          proprietateId: props.details.proprietateId,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      alert("Programarea a fost inregistrata");
    } else {
      alert("Data aleasa nu este disponibila. Incearca alta data!");
    }
  };

  console.log(props.details);

  if (props.details === null) {
    return <div> Loading...</div>;
  }

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
            <h1>Programare</h1>

            <Container>
              <Grid>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginTop: "10px" }}>
                    <h3>Adresa:{props.details.address}</h3>
                    <h3>Descriere:{props.details.description}</h3>
                    <h3>Pret:{props.details.price}&euro;</h3>
                  </div>
                  <input
                    type="datetime-local"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                  />

                  <Button
                    style={{ marginTop: "5%", marginBottom: "5%" }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Programare
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

export default ModalProgramare;
