"use client";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
const questions = [
  {
    id: 1,
    question:
      "Perché l'Egitto è considerato una destinazione sicura da visitare?",
    answer:
      "L'Egitto è rinomato come destinazione di viaggio sicura grazie alla sua reputazione di lunga data in materia di sicurezza. La natura accogliente e gentile del popolo egiziano infonde nei visitatori un senso di comfort e sicurezza simile a quello di casa.Con le dovute precauzioni e preparazioni, i viaggiatori possono esplorare e apprezzare in tutta sicurezza diverse città egiziane. Secondo le statistiche, il tasso di criminalità è molto basso, soprattutto nelle zone turistiche. Per chiunque voglia scoprire la terra dei faraoni, un viaggio in Egitto e Crociera sul Nilo sono l'opzione ideale.",
  },
  {
    id: 2,
    question: "Quali sono i tipi di hotel disponibili in Egitto?",
    answer:
      "In Egitto, i viaggiatori possono scegliere tra i tre principali itinerari di crociera sul Nilo offerti di solito. Si tratta di una crociera sul Nilo classica di 8 giorni/7 notti che inizia e finisce a Luxor o ad Assuan, di una crociera sul Nilo di 5 giorni/4 notti con partenza da Luxor o da Assuan e di una crociera in Egitto di 4 giorni/3 notti con partenza sia da Luxor che da Assuan. Tutti questi itinerari sono opzioni molto apprezzate dai viaggiatori. You Should Avoid Photographing Local People Specially Women. Binoculars Should Not Be Brought Into Saudi Arabia And May Be Confiscated At The Port Of Entry.",
  },
  {
    id: 3,
    question:
      "Perché l'Egitto è considerato una destinazione sicura da visitare?",
    answer:
      "In Egitto, i viaggiatori possono scegliere tra i tre principali itinerari di crociera sul Nilo offerti di solito. Si tratta di una crociera sul Nilo classica di 8 giorni/7 notti che inizia e finisce a Luxor o ad Assuan, di una crociera sul Nilo di 5 giorni/4 notti con partenza da Luxor o da Assuan e di una crociera in Egitto di 4 giorni/3 notti con partenza sia da Luxor che da Assuan. Tutti questi itinerari sono opzioni molto apprezzate dai viaggiatori..",
  },
  {
    id: 4,
    question:
      "Perché l'Egitto è considerato una destinazione sicura da visitare?",
    answer:
      "In Egitto, i viaggiatori possono scegliere tra i tre principali itinerari di crociera sul Nilo offerti di solito. Si tratta di una crociera sul Nilo classica di 8 giorni/7 notti che inizia e finisce a Luxor o ad Assuan, di una crociera sul Nilo di 5 giorni/4 notti con partenza da Luxor o da Assuan e di una crociera in Egitto di 4 giorni/3 notti con partenza sia da Luxor che da Assuan. Tutti questi itinerari sono opzioni molto apprezzate dai viaggiatori.",
  },
];
function AccordionFAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="mt-12 md:w-[60%] mx-auto">
      <div className="mt-12">
        {faqData?.map((q, index) => (
          <div
            key={index}
            className=" border mb-8 rounded shadow-lg py-5 px-3 "
          >
            <button
              className="flex  w-full items-center text-left   gap-2  "
              onClick={() => handleClick(index)}
            >
              <div className="w-[20%] md:w-[10%] flex items-center justify-center">
                <div
                  className={` flex items-center justify-center w-10 h-10 rounded-full   text-2xl 
                 ${
                   activeIndex === index
                     ? "bg-[#051036] text-white "
                     : "bg-[#f5f5f5] text-colorDark"
                 }
              `}
                >
                  <BiPlus
                    className={activeIndex === index ? "rotate-45 " : ""}
                  />
                </div>
              </div>
              <h2 className=" text-textColor text-[15px] md:text-lg font-medium  capitalize">
                {q.title}
              </h2>
            </button>
            {activeIndex === index && (
              <div
                dangerouslySetInnerHTML={{
                  __html: q.body ? q.body : "",
                }}
                className="mt-4 text-base text-gray-500 textEditor"
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionFAQ;
