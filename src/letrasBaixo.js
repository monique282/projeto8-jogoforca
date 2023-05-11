
import React, { useState } from "react";

export default function Letras(props){
   
    const [verB, setverB] = useState('letras');

    

    function escolherLetra() {
    alert('Passaei aqui letras abaixo');
    setverB('abilitado');
    };
    return(
    
 <div disabled onClick={escolherLetra} class={verB}>{props.alfabetoBaixo}</div>
    
);


}