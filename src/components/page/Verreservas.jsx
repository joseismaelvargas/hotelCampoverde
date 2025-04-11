import React, { useEffect, useState } from 'react'
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import Table from 'react-bootstrap/esm/Table';
import "../css/miReserva.css"
import Swal from 'sweetalert2';
import {  URL_reservas } from '../js/reservas';
import { Link } from 'react-router-dom';
import { borrarReserva } from '../js/reservas';
const Verreservas = () => {
  const miReservas=JSON.parse(localStorage.getItem("correo"))||null
  const [correo,setCorreo]=useState(miReservas)
  const [reserva,setreserva]=useState([])

  const borrarmiReserva=(id)=>{
   Swal.fire({
     title: "Eliminar",
     text: "Esta seguro de Cancelar su Reserva",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Si"
   }).then((result) => {
     if (result.isConfirmed) {
       eliminarmiReserva(id)
      
 
     }
   });
  
  }

 const eliminarmiReserva=async(id)=>{
  try{

     const response=await borrarReserva(id)
    buscarReserva()
    location.reload()
 
  }catch{
    console.log("hubo un error en el sistema")
  }
 }
  const buscarReserva=async(correo)=>{
    try{
  const response=await fetch(URL_reservas+"/verReservas")
  if(response.ok){
    const data=await response.json()
     let filtrar=data.filter((item)=>item.corre===correo)
      if(filtrar){
        setreserva(filtrar)
      }
  }
    }catch{
      console.error("error")
    }
  }

  useEffect(()=>{
   buscarReserva(correo)
  },[correo])

 console.log(reserva)
  return (
    <main>

   
    {correo===null ?
    <div className='div-mireserva'>
    <p className='no-reservas'>No tiene ninguna Reserva</p>
      </div>


    :  
    <div className='container-table' >
      <br />
        <h3 className='text-center my-10'>Mis Reservas </h3>
      <br />
  
      <Table striped responsive bordered className="container">
        <thead className="bg-primary">
          <tr>
            <th>nombre</th>
            <th>Habitacion</th>
         
            <th>personas</th>
            <th>Entrada</th>
            <th>opciones</th>
          </tr>
        </thead>
        <tbody>
     { reserva.map((miReserva)=>
        <tr key={miReserva._id}>
        <td>{miReserva.nombre}</td>
        <td>{miReserva.tipo}</td>
      
     
        <td>{miReserva.personas}</td>
        <td>{miReserva.entrada}</td>
        
     
        <td>
         <button className='btn btn-danger mx-2' onClick={()=>borrarmiReserva(miReserva._id)}>Cancelar reserva</button>
         <Link end to={"/modificarreserva/"+miReserva._id} className='btn btn-success'>Modificar</Link>
      
          </td>
        </tr> 
   

         )}
        </tbody>
      </Table>
    
</div>
   

    }
    
 
    </main>
  )
}

export default Verreservas
