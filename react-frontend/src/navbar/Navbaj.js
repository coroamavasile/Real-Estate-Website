import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const logoutHandler = () => {
    localStorage.removeItem("USER");
    localStorage.removeItem("USER_ID");
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul>
          <li className="home">
            <Link to={"/"}>{t("home")}</Link>
          </li>
          {localStorage.getItem("USER") ? (
            <li className="element">
              <button onClick={logoutHandler}>Logout</button>
            </li>
          ) : (
            <li className="element">
              <Link to={"/login"}>Login</Link>
            </li>
          )}
          {localStorage.getItem("USER") ? (
            <li className="element">
              <Link to={"/profile"}>Profile</Link>
            </li>
          ) : (
            <li className="element">
              <Link to={"/register"}>Register</Link>
            </li>
          )}
          <li className="element">
            <Link to={"/news"}>{t("news")}</Link>
          </li>
          <li className="element">
            <Link to={"/aboutus"}>{t("aboutUs")}</Link>
          </li>
          <li className="element">
            {t("rent")}
            <ul>
              <li>
                <a href="http://localhost:3000/rent#casa">{t("house")}</a>
              </li>

              <li>
                <a href="http://localhost:3000/rent#apartament">
                  {t("apartament")}
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/rent#garsoniera">
                  {t("single_room")}
                </a>
              </li>
            </ul>
          </li>
          <li className="element">
            {t("sale")}
            <ul>
              <li>
                <a href="http://localhost:3000/sales#casa">{t("house")}</a>
              </li>

              <li>
                <a href="http://localhost:3000/sales#apartament">
                  {t("apartament")}
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/sales#garsoniera">
                  {t("single_room")}
                </a>
              </li>
            </ul>
          </li>
          <li className="element">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
