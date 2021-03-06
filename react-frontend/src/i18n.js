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
        "CAPITAL IMOBILIARE┬« - a brand of S.C. CAPITAL IMOWORK S.R.L. - real estate supply that successfully operates on the real estate market in Cluj-Napoca, Romania",
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
        "CAPITAL IMOBILIARE┬« ÔÇô un brand S.C. CAPITAL IMOWORK S.R.L. ÔÇô agen╚Ťie imobiliar─â care activeaz─â cu succes pe pia╚Ťa imobiliar─â din Cluj-Napoca, Rom├ónia",
      text2:
        "Agen╚Ťia noastr─â a luat na╚Ötere la finalul anului 2015 ╚Öi odat─â cu trecerea timpului am devenit mai maturi, am ├«nv─â╚Ťat s─â fim mai buni dec├ót am fost ieri ╚Öi am v─âzut ├«n competi╚Ťie un posibil colaborator. La ├«nceputul anului 2021 am deschis al doilea birou ╚Öi dup─â o cre╚Ötere constant─â, am deschis ╚Öi al treilea birou ├«n martie 2022. ├Än prezent suntem o echip─â format─â din peste 35 de membri, organiza╚Ťi pe departamente astfel ├«nc├ót fiecare broker imobiliar s─â ofere servicii de calitate clien╚Ťilor s─âi ╚Öi de asemenea, s─â-╚Öi ating─â ╚Ťelurile propuse.",
      text3: "Ce facem?",
      text4:
        " Am c─âutat ├«nc─â de la ├«nceput s─â oferim o experien╚Ť─â reu╚Öit─â brokerului imobiliar, s─â punem accentul pe educa╚Ťie, etic─â ╚Öi mentorat din partea celor cu mai mult─â experien╚Ť─â ├«n domeniu, astfel ├«nc├ót procesul de tranzac╚Ťionare s─â fie unul de succes pentru toate p─âr╚Ťile implicate. Ne place s─â fim entuzia╚Öti, transparen╚Ťi ╚Öi competen╚Ťi c├ónd vine vorba de clien╚Ťii no╚Ötri. Ne propunem s─â-i ajut─âm s─â-╚Öi ating─â obiectivele fie c─â vorbim de apartamentul dorit, casa mult visat─â sau primul sediu pentru business.",
      mission: "Misiune",
      text5:
        "Crearea unui mediu eficient, transparent ╚Öi sigur de tranzac╚Ťionarea propriet─â╚Ťilor imobiliare, at├ót pentru consumatorii de imobiliare, precum ╚Öi pentru brokerii din organiza╚Ťia Capital Imobiliare. Inovare continu─â pe segmente cheie: sistem de lucru, tehnologie ╚Öi activitatea de broker imobiliar.",
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
