import React, { useState } from "react";

export default function Letras(props){


const [ver, setver] = useState('letras')

    

    function escolherLetra() {
    alert('Passaei aqui letras');
    setver('abilitado');
    };

    
    

    return(
        <div disabled onClick={escolherLetra} class={ver}>{props.alfabetoCima}</div>
    );

}