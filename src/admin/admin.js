import React from 'react';
import Navbar from '../Components/Navbar';

function admin() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Admin valdymo skydas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mygtukas valdyti vartotojus */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded shadow">
            Valdyti vartotojus
          </button>

          {/* Mygtukas valdyti pranešimus */}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded shadow">
            Valdyti pranešimus
          </button>

          {/* Mygtukas patvirtinti skelbimus */}
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded shadow">
            Patvirtinti skelbimus
          </button>
        </div>
      </div>
    </div>
  );
}

export default admin;
