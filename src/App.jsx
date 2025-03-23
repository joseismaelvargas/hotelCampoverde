import Nav from "./components/common/nav"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Administrador from "./components/page/Administrador"
import Servicios from "./components/page/Servicios"
import Footer from "./components/common/Footer"
import Hotel from "./components/Hotel"
import { ModalLogin } from "./components/ModalLogin"
import Habitaciones from "./components/page/Habitaciones"
import Index from "./components/page/Index"
import Reservar from "./components/page/Reservar"
import { useState } from "react"
import ProtegerRuta from "./components/routes/ProtegerRuta"
import Protegerusuario from "./components/routes/Protegerusuario"
import AgregarUsuario from "./components/page/AgregarUsuario"
import CrearHabitacion from "./components/page/CrearHabitacion"
function App() {
  const usuario=JSON.parse(sessionStorage.getItem("administrado"))||[]

  const [logeado,setlogeado]=useState(usuario)
  const user=JSON.parse(sessionStorage.getItem("usuario"))||[]
  const [logeadoUser,setlogeadoUser]=useState(user)
  return (
    <>
    <BrowserRouter>
    <Nav logeado={logeado} setlogeado={setlogeado}></Nav>
 <ModalLogin></ModalLogin>
    <Routes>
   
      <Route  path="/" element={<Index></Index>}></Route>

      <Route path="/admin/*" element={   <ProtegerRuta><Administrador></Administrador>  </ProtegerRuta>}></Route>
 
     <Route path="/createHabitaciones/*" element={<ProtegerRuta><CrearHabitacion></CrearHabitacion></ProtegerRuta> }></Route>
  
      
     <Route path="/habitaciones" element={<Habitaciones logeadoUser={logeadoUser}></Habitaciones>}></Route>
      <Route path="/servicios" element={ <Servicios></Servicios>}></Route>
      <Route path="/hotel/:id" element={<Hotel></Hotel>}></Route>
      <Route path="/reservar/*" element={<Protegerusuario><Reservar></Reservar></Protegerusuario>}></Route>
      <Route path="/createuser" element ={<AgregarUsuario></AgregarUsuario>}></Route>
    </Routes>
    <Footer logeado={logeado} setlogeado={setlogeado}></Footer>
    </BrowserRouter>
   
       
    </>
  )
}

export default App
