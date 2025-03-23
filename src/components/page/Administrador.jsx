import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';
import { arrayUser } from '../js/queries';
import { URL_Usuario } from '../js/queries';
const Administrador = () => {
const [usuarios,setUsuarios]=useState(arrayUser)
 console.log(usuarios)
 
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
        {
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
           }
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
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </Table>
 
   </main>
  )
}

export default Administrador
