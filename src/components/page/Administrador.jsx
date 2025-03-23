import React from 'react'
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';
const Administrador = () => {
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

      <Table striped responsive bordered className="container">
        <thead className="bg-primary">
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Correo Electronico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
         
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
