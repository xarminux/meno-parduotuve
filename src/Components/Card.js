import React from "react";

const Card = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg"
        alt="Prekės pavadinimas"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Prekės pavadinimas</div>
        <p className="text-gray-700 text-base">
          Trumpas prekės aprašymas arba kiti svarbūs duomenys.
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pridėti į krepšelį
        </button>
      </div>
    </div>
  );
};

export default Card;
