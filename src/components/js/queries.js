export const URL_Usuario=import.meta.env.VITE_URL_USUARIO







const usuariosAdmin = {
   contraseña: "0340",
   correo: "isma@gmail.com"
 };
 
 const user={
   contraseña: "03401122",
   correo: "isma@gmail.com"
 }




 
 
 export const logearUsuario = (data) => {
    // const usuario=arrayUser.find((item)=>item.correo===data.correo)
    // const contraseña=arrayUser.find((item)=>item.contraseña===data.contraseña)
 
   if (
     data.contraseña === usuariosAdmin.contraseña &&
     data.correo.toLowerCase() === usuariosAdmin.correo.toLowerCase()
   ) {
     sessionStorage.setItem("administrado", JSON.stringify(usuariosAdmin.correo));
     return "admin";
   } else if (
     data.contraseña === user.contraseña&&
     data.correo.toLowerCase() === user.correo
   ) {
     sessionStorage.setItem("usuario", JSON.stringify(user.correo));
     return "usuario";
   } else {
     console.log("Credenciales incorrectas");
     return false;
   }
 };
 