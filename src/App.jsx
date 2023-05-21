import React from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home";
import { Categorias } from "./pages/Categorias";
import { Producto } from "./pages/Producto";
import { Productos } from "./pages/Productos";
import CarContext from "./context/car/CarContext";
import CarState from "./context/car/CarState";
import { Carrito } from "./pages/Carrito";

function App() {

  return (
    <CarState>
        <BrowserRouter>
        
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path="/" element={<Home/>} />
            <Route path="/:categoria" element={<Categorias/>} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/productos" element={<Productos/>} />
            <Route path="/carrito" element={<Carrito />} />

          </Routes>

        </BrowserRouter>


    
    </CarState>

  )
}

export default App;
