
const usuariosAdmin = {
   contraseña: "0340",
   correo: "isma@gmail.com"
 };
 
 const usuario = {
   contraseña: "000",
   correo: "isma_user@gmail.com"
 };
 
 export const logearUsuario = (data) => {
   if (
     data.contraseña === usuariosAdmin.contraseña &&
     data.correo.toLowerCase() === usuariosAdmin.correo.toLowerCase()
   ) {
     sessionStorage.setItem("administrado", JSON.stringify(usuariosAdmin.correo));
     return "admin";
   } else if (
     data.contraseña === usuario.contraseña &&
     data.correo.toLowerCase() === usuario.correo.toLowerCase()
   ) {
     sessionStorage.setItem("usuario", JSON.stringify(usuario.correo));
     return "usuario";
   } else {
     console.log("Credenciales incorrectas");
     return false;
   }
 };
 