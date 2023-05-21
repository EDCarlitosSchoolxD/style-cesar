import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home";
import { Categorias } from "./pages/Categorias";
import { Producto } from "./pages/Producto";
import { Productos } from "./pages/Productos";

function App() {

  return (
    <BrowserRouter>
        <Routes>
        {/* <Route path='/admin' element={<Admin/>} /> */}
        {/* <Route path='/admin/estados' element={<EstadoV/>} />
        <Route path='/admin/municipios' element={<MunicipioV />} />
        <Route path='/admin/universidades' element={<UniversidadesAdmin/>} />
        <Route path='/admin/universidades/:universidad' element={<UniInfo />}/> */}



        <Route path='login' element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/:categoria" element={<Categorias/>} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/productos" element={<Productos/>} />
        




        

      </Routes>

    </BrowserRouter>
  )
}

export default App;
