import Nav from "./components/common/nav"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Administrador from "./components/page/Administrador"
import Servicios from "./components/page/Servicios"
import Footer from "./components/common/Footer"
import Hotel from "./components/Hotel"
import { ModalLogin } from "./components/ModalLogin"
import Habitaciones from "./components/page/Habitaciones"
import Index from "./components/page"
import { useState } from "react"
function App() {
  const usuario=JSON.parse(sessionStorage.getItem("Hotel"))||[]
  const [logeado,setlogeado]=useState(usuario)

 
  return (
    <>
    <BrowserRouter>
    <Nav logeado={logeado} setlogeado={setlogeado}></Nav>
 <ModalLogin></ModalLogin>
    <Routes>
   
      <Route  path="/" element={<Index></Index>}></Route>
   
      <Route path="/admin" element={<Administrador></Administrador>}></Route>
     <Route path="/habitaciones" element={<Habitaciones></Habitaciones>}></Route>
      <Route path="/servicios" element={<Servicios></Servicios>}></Route>
      <Route path="/hotel/:id" element={<Hotel></Hotel>}></Route>
      
    </Routes>
    <Footer logeado={logeado} setlogeado={setlogeado}></Footer>
    </BrowserRouter>
   
       
    </>
  )
}

export default App
