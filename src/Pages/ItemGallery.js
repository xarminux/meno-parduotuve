import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import itemsClient from "../services/ItemsClient";

const ItemGallery = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    itemsClient.getAllItems().then(res => {
      setItems(res.data);
    }).catch(error => {
      console.error("Error fetching items:", error);
    });
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <div key={item.id} className="m-4">
            <Card
              description={item.aprasymas}
              imageUrl={item.paveikslelis}
              price={item.kaina}
              name={item.pavadinimas}
              productId = {item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemGallery;
