import React from 'react';
import Navbar from '../Components/Navbar';
import { useState, useEffect } from 'react';

function MyItems() {
  // Imituojame įkeltų skelbimų sąrašą
  const [skelbimai, setSkelbimai] = useState([]);

  // Imituojame įkeltų skelbimų gavimą iš serverio
  useEffect(() => {
    // Čia galite įtraukti kodą, kuris gautų skelbimus iš serverio ir nustatytų juos naudodamas setSkelbimai
    const gautiSkelbimusIsServerio = async () => {
      // Simuliuojame skelbimų gavimą iš serverio
      const skelbimaiIsServerio = [
        { id: 1, nuotrauka: 'https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg', pavadinimas: 'Pirmas skelbimas', kaina: '100' },
        { id: 2, nuotrauka: 'https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg', pavadinimas: 'Antras skelbimas', kaina: '200' },
      ];
      setSkelbimai(skelbimaiIsServerio);
    };

    gautiSkelbimusIsServerio();
  }, []);

  const handleEdit = (id) => {
    console.log("Redaguoti skelbimą su id:", id);
  };

  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skelbimai.map((skelbimas) => (
          <div key={skelbimas.id} className="bg-white p-4 shadow-md rounded-md flex flex-col justify-between">
            <div>
              <img src={skelbimas.nuotrauka} alt={skelbimas.pavadinimas} className="w-full h-40 object-cover mb-2 rounded-md" />
              <h2 className="text-lg font-semibold">{skelbimas.pavadinimas}</h2>
              <p className="text-gray-600">Kaina: {skelbimas.kaina}</p>
            </div>
            <button onClick={() => handleEdit(skelbimas.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Redaguoti
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyItems;
