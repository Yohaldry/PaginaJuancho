import React from "react";
import ReactPlayer from 'react-player'

function UltimoTema (){

    return(

        <div className="ultimo-tema">
            <h1>Escucha 
                Mi tema <br/>promocional</h1>
            <ReactPlayer
          url='https://www.youtube.com/watch?v=WsRXRhYL83w'
          className='react-player'
          playing
          width='50%'
          height='40%'
        />
           
       
      </div>
        
    )
       
   
}

export default UltimoTema