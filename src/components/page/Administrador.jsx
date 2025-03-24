import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';
// import { arrayUser } from '../js/queries';
import { borrarReserva } from '../js/reservas';
import { URL_reservas } from '../js/reservas';
import Swal from 'sweetalert2';
const Administrador = () => {

  const [reservas,setREservas]=useState([])
 const Apireserva=async()=>{
 try{
  const response=await fetch(URL_reservas)
  if(response.status===200){
    const data=await response.json()
     setREservas(data)
  }
 }
 catch(error){
  console.error(error)
 }


 }



 const borrarlasReservas=(id)=>{
  Swal.fire({
    title: "Eliminar",
    text: "Esta seguro de eliminar la cancion del admin",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si"
  }).then((result) => {
    if (result.isConfirmed) {
       eliminarreserva(id)
     

    }
  });
}

 const eliminarreserva=async(id)=>{
  try{
    const response=await borrarReserva(id)
   if(response===201){
  alert("La reserva fue eliminada")
   }
 }catch{
   console.error("Nose pudo borrar la musica")
 }
 }

 useEffect(()=>{
  Apireserva()
 },[])


 return (
   <main>
   
      <section className="container text-start my-4 py-4">
        <h3>Administrador</h3>
      </section>
      <section className="container">
        <div className="d-flex justify-content-between my-3 py-2">
          <p className="fs-4">Tabla de Habitaciones</p>
          <Link end to={"/createHabitaciones"}><Button variant="primary" >
            Agregar Habitacion
          </Button></Link>
        </div>
      </section>

      <Table striped responsive bordered className="container">
        <thead className="bg-primary">
          <tr>
            <th>Numero de Habitacion</th>
            <th>Tipo de Habitacion</th>
            <th>Precio</th>
            <th>Disponibilidad en Fechas</th>
           
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </Table>

      
      <section className="container">
        <div className="d-flex justify-content-between my-3 py-2 mt-4 pt-4">
          <p className="fs-4">Tabla de Usuarios</p>
        </div>
      </section>

      <Table striped responsive bordered className="container table-hover">
        <thead className="bg-primary">
          <tr>
            <th>Nombre Usuario</th>
            
            <th>Nombre Completo</th>
            
            <th>Correo Electronico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {/* {
            usuarios.map((item)=>
              <tr key={item.id}>
                  <td>{item.user}</td>
                  <td>{item.nombre}</td>
                  <td>{item.correo}</td>
                 
                
                  <td>
                    <button class="btn btn-outline-danger mb-2 mx-4 mb-md-0" >Eliminar</button>
                    <button class="btn btn-outline-success"   href="#" data-bs-toggle="modal" data-bs-target="#modalLogin2">Modificar</button>
                  </td>
                </tr>
            )
           } */}
        </tbody>
      </Table>
    





      <section className="container">
        <div className="d-flex justify-content-between my-3 py-2 mt-4 pt-4">
          <p className="fs-4">Tabla de Huéspedes</p>
        </div>
      </section>
      <Table striped responsive bordered className="container">
        <thead className="bg-primary">
          <tr>
           <th>DNI</th>
            <th>Nombre</th>
         <th>Habitacion</th>
            <th>Pagos</th>
            <th>Fechas Reservadas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
         {
          reservas.map((item)=>
            <tr key={item.id}>
          <td>{item.Dni}</td>
          <td>{item.nombre}</td>
          <td>{item.tipo}</td>
          <td>{item.corre}</td>
          <td> {item.entrada} <strong>a</strong> {item.salida}</td>
         
        
          <td>
            <button class="btn btn-outline-danger mb-2 mx-4 mb-md-0" onClick={()=>borrarlasReservas(item.id)}>Eliminar</button>
            <Link  end to={`/modificarreserva/${item.id}`} ><button class="btn btn-outline-success">Modificar</button></Link>
            
          </td>
        </tr>
          )
         }
        </tbody>
      </Table>
 
   </main>
  )
}

export default Administrador
