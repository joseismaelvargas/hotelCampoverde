import React from "react";
import { Navigate } from 'react-router-dom';
import { Children } from "react";
const ProtegerRuta= ({children}) => {
  
  const admin = JSON.parse(sessionStorage.getItem("administrado")) || null;

  if (!admin) {
    return <Navigate to="/" replace />;
  }
  return children


};

export default ProtegerRuta;
