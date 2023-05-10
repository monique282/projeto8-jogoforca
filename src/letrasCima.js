import React, { useState } from "react";

export default function Letras(){

let [abilitar, setAbilitar]= useState('letras');
   
    const alfabetoCima = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    return(
     alfabetoCima.map(alfabetoCima => (
        <div disabled  class={abilitar}>{alfabetoCima}</div>
    ))
);

}