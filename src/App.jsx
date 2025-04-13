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
import Modificar from "./components/Formularios/Modificar"
import ModificarHabitacion from "./components/Formularios/ModificarHabitacion"
import ModificarUsuario from "./components/Formularios/ModuficarUsuario"
import Verhabitacion from "./components/cuartos/Verhabitacion"
import Verreservas from "./components/page/Verreservas"
function App() {
  const usuario=JSON.parse(sessionStorage.getItem("administrado"))||[]

  const [logeado,setlogeado]=useState(usuario)
  
  const user=JSON.parse(sessionStorage.getItem("usuario"))||[]

  const [logeadoUser,setlogeadoUser]=useState(user)
 
  return (
    <>
    <BrowserRouter>
    <Nav logeado={logeado} setlogeado={setlogeado} logeadoUser={logeadoUser}></Nav>
 <ModalLogin logeado={logeado } setlogeado={setlogeado}></ModalLogin>
    <Routes>
   
      <Route  path="/" element={<Index></Index>}></Route>
      <Route path="/admin/*" element={   <ProtegerRuta><Administrador></Administrador>  </ProtegerRuta>}></Route>
      <Route path="/createHabitaciones/*" element={<ProtegerRuta><CrearHabitacion></CrearHabitacion></ProtegerRuta> }></Route>
      <Route path="/modificarreserva/:id/*" element={<Modificar usuario={logeadoUser} logeado={logeado}></Modificar>}></Route>
     <Route path="/habitaciones" element={<Habitaciones logeadoUser={logeadoUser}></Habitaciones>}></Route>
      <Route path="/servicios" element={ <Servicios></Servicios>}></Route>
      <Route path='/verHabitacion/:id/*' element={<Verhabitacion logeadoUser={logeadoUser}></Verhabitacion>}></Route>
      <Route path="/hotel/:id" element={<Hotel></Hotel>}></Route>
      <Route path="/reservar/:id/*" element={<Protegerusuario><Reservar></Reservar></Protegerusuario>}></Route>
      <Route path="/createuser" element ={<AgregarUsuario></AgregarUsuario>}></Route>
      <Route path="/modificarhabitaciones/:id/*" element={<ProtegerRuta><ModificarHabitacion></ModificarHabitacion></ProtegerRuta>}></Route>
       <Route path="/modificarUsuario/:id/*" element={<ProtegerRuta> <ModificarUsuario></ModificarUsuario></ProtegerRuta>}></Route>
     <Route path="/verReserva/*" element={<Protegerusuario> <Verreservas></Verreservas></Protegerusuario>}></Route>
    </Routes>
    <Footer logeado={logeado} setlogeado={setlogeado} logeadoUser={logeadoUser}></Footer>
    </BrowserRouter>
   
       
    </>
  )
}

export default App
