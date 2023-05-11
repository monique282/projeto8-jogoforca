
import React, { useState } from "react";

export default function Letras(props) {

    const [verB, setverB] = useState(' ');
    const [desabilitar, setDesabilitar] = useState(false);


    function escolherLetra() {

        let palavra = props.palavraSorteada.toUpperCase();
        console.log(palavra);
        let letraClicada = (props.alfabetoBaixo);
        console.log(letraClicada);
        if (props.abilitar === 'abilitado') {
            setverB(' letrasDesabilitadas')
            setDesabilitar(true);
        }
        if (palavra.includes(letraClicada)) {
            console.log('A letra clicada está na palavra!');
        } else {
            props.erros++;
            console.log(props.erros);
            console.log('A letra clicada não está na palavra.');
        }
    };


    return (

        <button disabled={!props.botoesAtivos || desabilitar} onClick={escolherLetra} class={props.abilitar + verB} > {props.alfabetoBaixo} </button>

    );
}