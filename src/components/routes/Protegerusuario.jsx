import React from 'react'
import { Navigate } from 'react-router-dom';
import { Children } from "react";
const Protegerusuario = ({children}) => {
    const user= JSON.parse(sessionStorage.getItem("usuario")) || null;

    if (!user) {
      return <Navigate to="/" replace />;
    }
    
  
  return children
}

export default Protegerusuario
