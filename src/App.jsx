import Nav from "./components/common/nav"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Index from "./components/page/Index"
import Fotos from "./components/page/Fotos"
import Administrador from "./components/page/Administrador"
import Salon from "./components/page/Salon"
import Servicios from "./components/page/Servicios"
import Footer from "./components/common/Footer"
import Hotel from "./components/Hotel"

function App() {



  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
   
      <Route  path="/" element={<Index></Index>}></Route>
      <Route path="/fotos" element={<Fotos></Fotos>}></Route>
      <Route path="/admin" element={<Administrador></Administrador>}></Route>
      <Route path="/salon" element={<Salon></Salon>}></Route>
      <Route path="/servicios" element={<Servicios></Servicios>}></Route>
      <Route path="/hotel/:id" element={<Hotel></Hotel>}></Route>
      
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
   
       
    </>
  )
}

export default App
