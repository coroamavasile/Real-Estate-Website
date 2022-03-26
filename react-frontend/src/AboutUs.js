import React from "react";
import "./aboutus.css";
import { useTranslation } from "react-i18next";
const AboutUs = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="img">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt="background"
          width="100%"
          height="100%"
        />
        <div
          className="infoContainer"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(125, 125, 125, 0.5)",
            height: "80%",
            width: "80%",
          }}
        >
          <h1 className="textAlign">{t("aboutUs")}</h1>
          <h3 className="subtitle">{t("text1")}</h3>
          <p className="description">{t("text2")}</p>
          <br />
          <h2>{t("text3")}</h2>
          <p className="description">{t("text4")}</p>
          <br />
          <h2>{t("mission")}</h2>
          <p className="description">{t("text5")}</p>

          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
