import React from "react";
import MenuIninio from "../Components/MenuInicio";
import UltimoTema from "../Components/UltimoTema";
import WhatsApp from "../Components/WhatsApp";

function AppPrincipal (){

    return(

        <div className="AppPrincipal">
            <MenuIninio />
            <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1656122469/Imagen1_ycupqi.jpg" alt="" />
            <UltimoTema />
            <WhatsApp />
        </div>
    )
       
   
}

export default AppPrincipal