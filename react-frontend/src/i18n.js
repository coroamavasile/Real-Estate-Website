import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: {
      home: "Home",
      news: "News",
      aboutUs: "About us",
      single_room: "Single room",
      apartament: "Apartament",
      house: "House",
      sale: "Sales",
      rent: "Rent",
      programare: "Appointment",
      text1:
        "CAPITAL IMOBILIARE® - a brand of S.C. CAPITAL IMOWORK S.R.L. - real estate supply that successfully operates on the real estate market in Cluj-Napoca, Romania",
      text2:
        "Our agency was born at the end of 2015 and as time went on we became more mature, we learned to be better than we were yesterday and we saw in the competition a possible collaborator. At the beginning of 2021 we opened our second office and after a steady growth, we opened our third office in March 2022. We are currently a team of over 35 members, organized by department so that every real estate broker offers quality services. its customers and also to achieve their goals.",
      text3: "What are we doing?",
      text4:
        "We sought from the beginning to offer a successful experience to the real estate broker, to focus on education, ethics and mentoring from those with more experience in the field, so that the trading process is a successful one for all parties involved. We like to be enthusiastic, transparent and competent when it comes to our customers. We aim to help them achieve their goals whether we are talking about the desired apartment, the dream home or the first place for business.",
      mission: "Mission",
      text5:
        "Creating an efficient, transparent and secure environment for real estate trading, both for real estate consumers and for brokers in the organization Capital Imobiliare. Continuous innovation in key segments: work system, technology and real estate brokerage.",
    },
  },
  ro: {
    translation: {
      home: "Acasa",
      news: "Noutati",
      aboutUs: "Despre noi",
      single_room: "Garsoniera",
      apartament: "Apartament",
      house: "Casa",
      sale: "Vanzari",
      rent: "Chirie",
      programare: "Programare",
      text1:
        "CAPITAL IMOBILIARE® – un brand S.C. CAPITAL IMOWORK S.R.L. – agenție imobiliară care activează cu succes pe piața imobiliară din Cluj-Napoca, România",
      text2:
        "Agenția noastră a luat naștere la finalul anului 2015 și odată cu trecerea timpului am devenit mai maturi, am învățat să fim mai buni decât am fost ieri și am văzut în competiție un posibil colaborator. La începutul anului 2021 am deschis al doilea birou și după o creștere constantă, am deschis și al treilea birou în martie 2022. În prezent suntem o echipă formată din peste 35 de membri, organizați pe departamente astfel încât fiecare broker imobiliar să ofere servicii de calitate clienților săi și de asemenea, să-și atingă țelurile propuse.",
      text3: "Ce facem?",
      text4:
        " Am căutat încă de la început să oferim o experiență reușită brokerului imobiliar, să punem accentul pe educație, etică și mentorat din partea celor cu mai multă experiență în domeniu, astfel încât procesul de tranzacționare să fie unul de succes pentru toate părțile implicate. Ne place să fim entuziaști, transparenți și competenți când vine vorba de clienții noștri. Ne propunem să-i ajutăm să-și atingă obiectivele fie că vorbim de apartamentul dorit, casa mult visată sau primul sediu pentru business.",
      mission: "Misiune",
      text5:
        "Crearea unui mediu eficient, transparent și sigur de tranzacționarea proprietăților imobiliare, atât pentru consumatorii de imobiliare, precum și pentru brokerii din organizația Capital Imobiliare. Inovare continuă pe segmente cheie: sistem de lucru, tehnologie și activitatea de broker imobiliar.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng"),
    fallbackLng: "ro",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
