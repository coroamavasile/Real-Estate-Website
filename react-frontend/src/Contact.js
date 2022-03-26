import React, { useState } from "react";
import "./style/contact.css";
import Button from "@mui/material/Button";

const Contact = (props) => {
  const [details, setDetails] = useState({});

  const send_email = () => {
    fetch("http://127.0.0.1:8000/emailapp/hello/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => {
        if (response.status > 400) {
          console.log("error");
        }
        console.log("aici response");
        console.log(response.json());
      })
      .then((data) => {
        console.log(data);
      });
  };

  const handleInput = (event) => {
    const { value, name } = event.target;
    setDetails({ ...details, ...{ [name]: value } });
  };

  return (
    <div>
      <div className="img">
        <img
          src="https://static-cse.canva.com/blob/572026/removingbackgroundimages_Unsplash.jpeg"
          alt="background"
          style={{ width: "100%", height: "20%" }}
        />
        <div className="infoContainer" style={{ height: "10%", width: "15%" }}>
          <h1 className="textAlign">Contact</h1>
        </div>
      </div>

      <div className="cardContainer">
        <h2 className="title">Contacteaza-ne acum</h2>

        <div className="info-contact-us">
          <h3>Adresa:</h3>
          <h4>Str Tasnad, nr 9, Cluj-Napoca</h4>
        </div>

        <div className="info-contact-us">
          <h3>Mail:</h3>
          <h4>imobialare@mail.com</h4>
        </div>

        <div className="info-contact-us">
          <h3>Telefon:</h3>
          <h4>40 324 239 124</h4>
        </div>
      </div>
      <div className="formContainer">
        <div>
          <div>
            <label for="name">Nume</label>
          </div>
          <div className="col75">
            <input
              type="text"
              className="name"
              name="name"
              placeholder="Numele tau..."
              onChange={handleInput}
            />
          </div>
        </div>

        <div>
          <div className="col25">
            <label for="email">Email</label>
          </div>
          <div className="col75">
            <input
              type="text"
              className="email"
              name="email"
              placeholder="Email-ul tau..."
              onChange={handleInput}
            />
          </div>
        </div>

        <div>
          <label for="telefon">Telefon</label>
        </div>
        <div className="col75">
          <input
            type="telefon"
            className="telefon"
            name="telefon"
            placeholder="Numarul tau..."
            onChange={handleInput}
          />
        </div>

        <div>
          <label for="subiect">Subiect</label>
        </div>
        <div className="col75">
          <textarea
            className="subiect"
            name="subiect"
            placeholder="Scrie ceva..."
            style={{ height: " 200px", width: "100%" }}
            onChange={handleInput}
          ></textarea>
          <Button
            variant="contained"
            style={{ float: "right", marginTop: "10px", marginBottom: "10px" }}
            onClick={() => {
              send_email();
              alert("Email-ul a fost trimis!");
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const styles = {
  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    margin: "3%",
    display: "inline-block",
    width: "30%",
  },
  container: {
    padding: "2px 16px",
    marginTop: "5px",
  },
  cardContainer: {
    display: "flex",
    textAlign: "center",
    width: "100%",
  },
};
