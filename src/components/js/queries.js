export const URL_Usuario=import.meta.env.VITE_API_HABITACIONES
 let arrayUser=[]
 const ApiUsuario=async()=>{
  try{
   const response=await fetch(URL_Usuario+"/verusuarios")
    console.log(response)
   if(response.ok){
     arrayUser=await response.json()
    console.log(arrayUser)
   }
  }
  catch(error){
   console.error(error)
  }
 
 
  }

ApiUsuario()

console.log(arrayUser)
const usuariosAdmin = {
   contraseña: "0340",
   correo: "isma@gmail.com"
 };
 
 const user={
   contraseña: "03401122",
   correo: "isma@gmail.com"
 }




 
 
 export const logearUsuario = (data) => {
    const usuario=arrayUser.find((item)=>item.correo===data.correo)
    const contraseña=arrayUser.find((item)=>item.contraseña===data.contraseña)
 
   if (
     data.contraseña === usuariosAdmin.contraseña &&
     data.correo.toLowerCase() === usuariosAdmin.correo.toLowerCase()
   ) {
     sessionStorage.setItem("administrado", JSON.stringify(usuariosAdmin.correo));
     return "admin";
   } else if (
     data.contraseña === contraseña.contraseña&&
     data.correo.toLowerCase() === usuario.correo
   ) {
     sessionStorage.setItem("usuario", JSON.stringify(user.correo));
     return "usuario";
   } else {
     console.log("Credenciales incorrectas");
     return false;
   }
 };
 