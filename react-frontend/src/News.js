import React from "react";
import "./style/news.css";

const News = (props) => {
  const renderCards = () => {
    return (
      <div style={styles.card}>
        <div style={styles.title}>
          <h2>E oficial, 5% TVA pentru imobiliare pana in 700.000 lei</h2>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt="Avatar"
          style={{ width: "100%", height: "60%" }}
        />
        <div style={styles.container}>
          <p>
            Conform Ordonanței Guvernamentale nr. 130 din 17 decembrie 2021 care
            modifică și completează legea 227/2015 privind Codul Fiscal, cota
            redusa de 5 % TVA pentru imobiliare se aplică la achiziția de
            locuințe de până la 700.000 lei.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={styles.cardContainer}>
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
      </div>
    </div>
  );
};

export default News;
const styles = {
  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    margin: "3%",
    display: "inline-block",
    width: "25%",
  },
  container: {
    padding: "2px 16px",
    marginTop: "5px",
  },
  cardContainer: {
    display: "flex",
    textAlign: "center",
    width: "100%",
    flexWrap: "wrap",
  },
};
