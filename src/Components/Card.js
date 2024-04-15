import React from "react";
import cartClient from "../services/CartClient"; // Pakeista iš "../services/CartClient"

const Card = ({ description, imageUrl, price, name, productId }) => {
  const userId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // Fiksuotas vartotojo ID
  
  const handleAddToCart = () => {
    // Pridedame prekę į krepšelį pasinaudodami CartService
    cartClient.AddCart(productId, userId); // Pakeista iš CartClient.AddCart į cartClient.AddCart
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={imageUrl}
        alt="Prekės pavadinimas"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        <p className="text-gray-700 text-base">
          Price: {price}
        </p>
      </div>
      <div className="px-6 py-4">
        <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pridėti į krepšelį
        </button>
      </div>
    </div>
  );
};

export default Card;
