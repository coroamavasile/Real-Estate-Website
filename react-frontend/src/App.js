import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage.js";
import Navbar from "./navbar/Navbaj.js";
import News from "./News.js";
import AboutUs from "./AboutUs.js";
import Contact from "./Contact.js";
import { useTranslation } from "react-i18next";
import Register from "./Register.js";
import Login from "./Login.js";
import Profile from "./Profile.js";
import RentPage from "./RentPage";
import SalePage from "./SalePage/SalePage.jsx";
import ProgramariTableModal from "./ProgramariTableModal.js";
import Test from "./Test.js";

const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    // localStorage.deleteItem("lng");
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("i18nextLng"));
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/news" exact element={<News />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route
            path="/programari/:id"
            exact
            element={<ProgramariTableModal />}
          />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/test" exact element={<Test />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/rent" exact element={<RentPage />} />
          <Route path="/sales" exact element={<SalePage />} />
        </Routes>
        <div style={{ position: "fixed", bottom: 0 }}>
          <button className="btn" onClick={() => changeLanguage("en")}>
            english
          </button>
          <button className="btn" onClick={() => changeLanguage("ro")}>
            romana
          </button>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
