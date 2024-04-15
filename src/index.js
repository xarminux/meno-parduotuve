import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddItem from './Pages/AddItem';
import ItemGallery from './Pages/ItemGallery';
import MyItems from './Pages/MyItems';
import Cart from './Pages/Cart';
import Admin from './admin/admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
       <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Prisijungimas" element={<Login />} />
            <Route path="/Registracija" element={<Register />} />
            <Route path="/Prideti" element={<AddItem />} />
            <Route path="/Meno-Sarasas" element={<ItemGallery />} />
            <Route path="/Mano-Kuriniai" element={<MyItems />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Admin" element={<Admin />} />

        </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
