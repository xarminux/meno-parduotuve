import React from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar"; // Importuojame Card komponentą

const ItemGallery = () => {
  // Sukurkime masyvą su 30 kortelių duomenimis
  const cardsData = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Prekė ${index + 1}`,
    image: "https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg",
    description: `Trumpas prekės aprašymas arba kiti svarbūs duomenys ${index + 1}`,
  }));

  return (
    <div>
      <Navbar/>
    <div className="flex flex-wrap justify-center ">
      
      {cardsData.map((card) => (
        <div key={card.id} className="m-4">
          <Card {...card} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default ItemGallery;
