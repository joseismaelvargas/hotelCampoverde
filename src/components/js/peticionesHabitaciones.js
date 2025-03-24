export const URL_habitaciones=import.meta.env.VITE_URL_USUARIO

export const petticionAgregar=async(habitacion)=>{
   
      try{
             const response=await fetch(URL_habitaciones,{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(habitacion)
           
          })
          if (!response.ok) {
              const errorData = await response.json();
              console.error("Error en el servidor:", errorData);
            }
    }catch(error){
        console.error(error)
    }

}