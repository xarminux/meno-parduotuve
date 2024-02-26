import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function AddItem() {
  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Čia galite atlikti veiksmus su įvestais duomenimis, pvz.: išsiųsti į serverį, saugoti duomenis ir t.t.
    console.log('Pavadinimas:', name);
    console.log('Trumpas aprašymas:', shortDescription);
    console.log('Ilgas aprašymas:', longDescription);
    console.log('Kaina:', price);
    console.log('Nuotrauka:', image);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Pridėti prekę</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Pavadinimas
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
              Trumpas aprašymas
            </label>
            <textarea
              id="shortDescription"
              rows="3"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700">
              Ilgas aprašymas
            </label>
            <textarea
              id="longDescription"
              rows="5"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Kaina
            </label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Nuotrauka
            </label>
            <input
              id="image"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Pridėti prekę
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;

