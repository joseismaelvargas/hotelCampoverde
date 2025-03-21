
const usuariosAdmin={
    contraseña:"0340",
    correo:"isma@gmail.com"
}
export  const logearAdmin=(usuario)=>{
 if(usuariosAdmin.contraseña===usuario.contraseña&&usuariosAdmin.correo===usuario.correo){
    sessionStorage.setItem("Hotel",JSON.stringify(usuariosAdmin.correo)) 
    return true
 }else{
    console.log("error")
    return false
 }
}