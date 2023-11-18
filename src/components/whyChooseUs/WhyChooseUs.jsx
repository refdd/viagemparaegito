import React from "react";
import HeaderSection from "../header/HeaderSection";
import CardChooseUs from "../cards/CardChooseUs";
import icon1 from "../../../public/assets/images/1.svg";
import icon2 from "../../../public/assets/images/2.svg";
import icon3 from "../../../public/assets/images/3.svg";

function WhyChooseUs() {
  return (
    <div className="container mx-auto px-4 mt-10 mb-6">
      <HeaderSection
        title={"Perchè Vacanza in Egitto?"}
        desc={"Con Vacanza in Egitto viverai un esperienza unica"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  lg:gap-28 mt-5">
        <CardChooseUs
          imgsrc={icon1}
          title={"Prezzi Vantaggiosi"}
          desc={"Offriamo i migliori prezzi con pagamento sicuro"}
        />
        <CardChooseUs
          imgsrc={icon2}
          title={"Facile Prenotazione"}
          desc={"  Personalizza e prenota facilmente il tuo viaggio"}
        />
        <CardChooseUs
          imgsrc={icon3}
          title={"Migliori Consulenti di Viaggio"}
          desc={"Assistenza dai nostri esperti di viaggio"}
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
