import React, { useState, useEffect } from "react";
import "./SalePage.scss";
import { useTranslation } from "react-i18next";
import AddHouseForSellModal from "../AddHouseForSellModal";
import { Link } from "react-router-dom";
import ModalProgramare from "../ModalProgramare";
const SalePage = (props) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseAdd = () => setOpenAdd(false);
  const [details, setDetails] = useState(null);
  const [caseData, setCaseData] = useState([]);
  const [apartamenteData, setApartamenteData] = useState([]);
  const [garsoniereData, setGarsoniereData] = useState([]);

  const search = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/user/proprietate/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let result2 = await result.json();
    let houses = [];
    let apartaments = [];
    let singles = [];

    console.log(result2);
    result2.map((item) => {
      if (item.rent === 0) {
        if (item.type === "apartament") {
          apartaments.push(item);
        }

        if (item.type === "casa") {
          houses.push(item);
        }

        if (item.type === "garsoniera") {
          singles.push(item);
        }
      }
    });
    setApartamenteData(apartaments);
    setGarsoniereData(singles);
    setCaseData(houses);
  };

  useEffect(() => {
    search();
  }, []);

  const changeLanguage = (lng) => {
    // localStorage.deleteItem("lng");
    i18n.changeLanguage(lng);
  };

  const renderCard = (id, image, title, address, description, price) => {
    return (
      <div className="card">
        <div className="img-container">
          <img
            src={image}
            alt="apart"
            style={{
              height: "100%",
              width: "100%",

              margin: "5%",
            }}
          />
        </div>
        <div className="container">
          <h1 className="title">{title}</h1>
          <h4 className="address">{address}</h4>
          <div className="description">
            <p>{description}</p>

            <div className="pret">
              <h2>Pret: {price}&euro;</h2>
            </div>

            <div className="detalii">
              {localStorage.getItem("USER") === "client" && (
                <button
                  onClick={() => {
                    setOpen(true);
                    setDetails({
                      proprietateId: id,
                      address: address,
                      price: price,
                      appointments: [],
                      description: description,
                    });
                  }}
                >
                  {t("programare")}
                </button>
              )}

              {localStorage.getItem("USER") === "agent" && (
                <Link to={`/programari/${id}`}>Appointments</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCards = (DATA) => {
    let cards = DATA.map((item) => (
      <div>
        {renderCard(
          item.id,
          item.imageUrl,
          item.title,
          item.address,
          item.description,
          item.price,
          item.programari
        )}
      </div>
    ));
    return cards;
  };
  return (
    <div>
      <AddHouseForSellModal open={openAdd} handleClose={handleCloseAdd} />
      {details ? (
        <ModalProgramare
          open={open}
          handleClose={handleClose}
          details={details}
        />
      ) : (
        <div></div>
      )}
      <h1 style={{ textAlign: "center", fontSize: "55px", marginBottom: "2%" }}>
        {t("sale")}
      </h1>

      {localStorage.getItem("USER") === "agent" && (
        <button
          onClick={() => {
            setOpenAdd(true);
          }}
        >
          Adauga proprietate
        </button>
      )}
      <div id="casa">
        <h1
          style={{ textAlign: "center", color: "white", background: "black" }}
        >
          {t("house")}
        </h1>
        <div style={{ paddingBottom: "20px" }}>{renderCards(caseData)}</div>
      </div>
      <div id="apartament">
        <h1
          style={{ textAlign: "center", color: "white", background: "black" }}
        >
          {t("apartament")}
        </h1>
        <div style={{ paddingBottom: "20px" }}>
          {renderCards(apartamenteData)}
        </div>
      </div>

      <div id="garsoniera">
        <h1
          style={{ textAlign: "center", color: "white", background: "black" }}
        >
          {t("single_room")}
        </h1>
        <div style={{ paddingBottom: "20px" }}>
          {renderCards(garsoniereData)}
        </div>
      </div>
    </div>
  );
};

export default SalePage;
const DATE_CASE = [
  {
    image:
      "https://media.istockphoto.com/photos/modern-house-with-solar-panels-and-wall-battery-for-energy-storage-picture-id1308318231?k=20&m=1308318231&s=612x612&w=0&h=XSq8fdrB3SoCdxuuvhQ0vvYOE6fLE9mmtQT9ru2XZag=",
    title: "Inchiriez apartament in Cluj-Napoca",
    address: "zona Manastur, 3 camera, 65mp, Parter /4",
    description:
      " Stil de viaţă modern, în inima verde a Timişoarei! Pentru DenyaForest a fost aleasă o locaţie privilegiată, în zona de nord aTimişoarei, în vecinătatea Pădurii Verzi, într-o comunitate cu aceleaşi valori ca ale tale. Însumând 116 apartamente, construite la standarde occidentale, cu finisaje de cea mai bună calitate şisistem de încălzire în pardoseală, ansamblul rezidenţial vacuprinde apartamente cu 2 și 3 camere, precum și apartamente detip penthouse, diverse ca şi compartimentare si spaţiu, pe măsuranevoilor şi posibilităţilor tale. Tu ce apartament ai alege? Spaţiile apartamentelor sunt proiectate inteligent, astfel încât să te simţi în largul tău, acasă. Suprafeţele vitrate mari şi terasele îţi oferă deschiderea de care ai nevoie, îmbinând armonios căldura casei tale cu libertatea pădurii din apropiere.",
    price: "200",
  },
  {
    image:
      "https://media.istockphoto.com/photos/modern-minimalist-family-villa-picture-id1254871777?k=20&m=1254871777&s=612x612&w=0&h=bG_QudxmoVZkKpjI0wMOuUvH86yNk0K-gPZytf_TSbQ=",
    title: "Inchiriez apartament in Cluj-Napoca",
    address: "zona Manastur, 3 camera, 65mp, Parter /4",
    description:
      " Stil de viaţă modern, în inima verde a Timişoarei! Pentru DenyaForest a fost aleasă o locaţie privilegiată, în zona de nord aTimişoarei, în vecinătatea Pădurii Verzi, într-o comunitate cu aceleaşi valori ca ale tale. Însumând 116 apartamente, construite la standarde occidentale, cu finisaje de cea mai bună calitate şisistem de încălzire în pardoseală, ansamblul rezidenţial vacuprinde apartamente cu 2 și 3 camere, precum și apartamente detip penthouse, diverse ca şi compartimentare si spaţiu, pe măsuranevoilor şi posibilităţilor tale. Tu ce apartament ai alege? Spaţiile apartamentelor sunt proiectate inteligent, astfel încât să te simţi în largul tău, acasă. Suprafeţele vitrate mari şi terasele îţi oferă deschiderea de care ai nevoie, îmbinând armonios căldura casei tale cu libertatea pădurii din apropiere.",
    price: "183",
  },
];

const DATE_APARTAMENTE = [
  {
    image:
      "https://media.istockphoto.com/photos/modern-interior-picture-id853258138?k=20&m=853258138&s=612x612&w=0&h=WvlwZpEqk9OOCKYEjRjTwpofciljUTLEWPNkRqvNbMo=",
    title: "Inchiriez apartament in Cluj-Napoca",
    address: "zona Manastur, 3 camera, 65mp, Parter /4",
    description:
      " Stil de viaţă modern, în inima verde a Timişoarei! Pentru DenyaForest a fost aleasă o locaţie privilegiată, în zona de nord aTimişoarei, în vecinătatea Pădurii Verzi, într-o comunitate cu aceleaşi valori ca ale tale. Însumând 116 apartamente, construite la standarde occidentale, cu finisaje de cea mai bună calitate şisistem de încălzire în pardoseală, ansamblul rezidenţial vacuprinde apartamente cu 2 și 3 camere, precum și apartamente detip penthouse, diverse ca şi compartimentare si spaţiu, pe măsuranevoilor şi posibilităţilor tale. Tu ce apartament ai alege? Spaţiile apartamentelor sunt proiectate inteligent, astfel încât să te simţi în largul tău, acasă. Suprafeţele vitrate mari şi terasele îţi oferă deschiderea de care ai nevoie, îmbinând armonios căldura casei tale cu libertatea pădurii din apropiere.",
    price: "200",
  },
  {
    image:
      "https://media.istockphoto.com/photos/modern-living-room-interior-design-in-3d-picture-id1266344111?k=20&m=1266344111&s=612x612&w=0&h=E3DIRFmEkbGUn2X9J5DBNccBbaQGVNAvym0mIhACfHM=",
    title: "Inchiriez apartament in Cluj-Napoca",
    address: "zona Manastur, 3 camera, 65mp, Parter /4",
    description:
      " Stil de viaţă modern, în inima verde a Timişoarei! Pentru DenyaForest a fost aleasă o locaţie privilegiată, în zona de nord aTimişoarei, în vecinătatea Pădurii Verzi, într-o comunitate cu aceleaşi valori ca ale tale. Însumând 116 apartamente, construite la standarde occidentale, cu finisaje de cea mai bună calitate şisistem de încălzire în pardoseală, ansamblul rezidenţial vacuprinde apartamente cu 2 și 3 camere, precum și apartamente detip penthouse, diverse ca şi compartimentare si spaţiu, pe măsuranevoilor şi posibilităţilor tale. Tu ce apartament ai alege? Spaţiile apartamentelor sunt proiectate inteligent, astfel încât să te simţi în largul tău, acasă. Suprafeţele vitrate mari şi terasele îţi oferă deschiderea de care ai nevoie, îmbinând armonios căldura casei tale cu libertatea pădurii din apropiere.",
    price: "183",
  },
];

const DATE_GARSONIERA = [
  {
    image:
      "https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Inchiriez apartament in Cluj-Napoca",
    address: "zona Manastur, 3 camera, 65mp, Parter /4",
    description:
      " Stil de viaţă modern, în inima verde a Timişoarei! Pentru DenyaForest a fost aleasă o locaţie privilegiată, în zona de nord aTimişoarei, în vecinătatea Pădurii Verzi, într-o comunitate cu aceleaşi valori ca ale tale. Însumând 116 apartamente, construite la standarde occidentale, cu finisaje de cea mai bună calitate şisistem de încălzire în pardoseală, ansamblul rezidenţial vacuprinde apartamente cu 2 și 3 camere, precum și apartamente detip penthouse, diverse ca şi compartimentare si spaţiu, pe măsuranevoilor şi posibilităţilor tale. Tu ce apartament ai alege? Spaţiile apartamentelor sunt proiectate inteligent, astfel încât să te simţi în largul tău, acasă. Suprafeţele vitrate mari şi terasele îţi oferă deschiderea de care ai nevoie, îmbinând armonios căldura casei tale cu libertatea pădurii din apropiere.",
    price: "200",
  },
  {
    image:
      "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    title: "Inchiriez apartament in Cluj-Napoca",
    address: "zona Manastur, 3 camera, 65mp, Parter /4",
    description:
      " Stil de viaţă modern, în inima verde a Timişoarei! Pentru DenyaForest a fost aleasă o locaţie privilegiată, în zona de nord aTimişoarei, în vecinătatea Pădurii Verzi, într-o comunitate cu aceleaşi valori ca ale tale. Însumând 116 apartamente, construite la standarde occidentale, cu finisaje de cea mai bună calitate şisistem de încălzire în pardoseală, ansamblul rezidenţial vacuprinde apartamente cu 2 și 3 camere, precum și apartamente detip penthouse, diverse ca şi compartimentare si spaţiu, pe măsuranevoilor şi posibilităţilor tale. Tu ce apartament ai alege? Spaţiile apartamentelor sunt proiectate inteligent, astfel încât să te simţi în largul tău, acasă. Suprafeţele vitrate mari şi terasele îţi oferă deschiderea de care ai nevoie, îmbinând armonios căldura casei tale cu libertatea pădurii din apropiere.",
    price: "183",
  },
];
