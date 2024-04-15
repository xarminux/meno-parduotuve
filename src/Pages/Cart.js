import React, { useState, useEffect } from "react";
import cartClient from "../services/CartClient";
import itemClient from "../services/ItemsClient";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await cartClient.GetCart("3fa85f64-5717-4562-b3fc-2c963f66afa6");
        const itemsWithDetails = await Promise.all(
          response.data.map(async (item) => {
            const itemDetails = await itemClient.getItem(item.preke_Id);
            return {
              id: item.krepselis_Id,
              kopija_id: item.id,
              preke_Id: item.preke_Id,
              paveikslelis: itemDetails.data.paveikslelis,
              kaina: itemDetails.data.kaina,
              pavadinimas: itemDetails.data.pavadinimas
            };
          })
        );
        setCartItems(itemsWithDetails);
        const total = itemsWithDetails.reduce((acc, curr) => acc + curr.kaina, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    try {
      await cartClient.DeleteCartItem(id);
      setCartItems(prevItems => prevItems.filter(item => item.kopija_id !== id));
      const total = cartItems.filter(item => item.kopija_id !== id).reduce((acc, curr) => acc + curr.kaina, 0);
      setTotalPrice(total);
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handleCheckout = () => {
    // Įgyvendinkite apmokėjimo logiką čia
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Prekių krepšelis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <img src={item.paveikslelis} alt={item.pavadinimas} className="w-full h-48 object-cover mb-4" />
            <p className="text-gray-800 font-bold mb-2">Kaina: {item.kaina}</p>
            <button onClick={() => handleRemoveItem(item.kopija_id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">Išmesti</button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-2xl font-bold mb-2">Iš viso: {totalPrice}</p>
        <button onClick={handleCheckout} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Apmokėti</button>
      </div>
    </div>
  );
};

export default Cart;
