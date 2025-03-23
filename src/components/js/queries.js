export const URL_Usuario=import.meta.env.VITE_URL_USUARIO

export let arrayUser=[]
const Api=async()=>{
 try{
 const response =await fetch(URL_Usuario)
 if(response.status===200){
  let data=await response.json()
  arrayUser=data
  }else {
    console.log("Error al cargar usuarios:");
  }
   }catch{
  console.log("error")
  }
}

Api()

const usuariosAdmin = {
   contraseña: "0340",
   correo: "isma@gmail.com"
 };
 
 
 
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
     sessionStorage.setItem("usuario", JSON.stringify(usuario.correo));
     return "usuario";
   } else {
     console.log("Credenciales incorrectas");
     return false;
   }
 };
 