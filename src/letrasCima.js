import React, { useState } from "react";

export default function Letras(props) {

    const [ver, setver] = useState(' ');
    const [desabilitar, setDesabilitar] = useState(false);
    let erro = 0;

    function escolherLetra() {

        console.log(erro);
        let palavra = props.palavraSorteada.toUpperCase();

        let letraClicada = (props.alfabetoCima);
        console.log(letraClicada);
        if (props.abilitar === 'abilitado') {
            setver(' letrasDesabilitadas');
            setDesabilitar(true);
        }
        if (palavra.includes(letraClicada)) {
            console.log('A letra clicada está na palavra!');
        } else {
            erro++;
            console.log(erro);
            console.log('A letra clicada não está na palavra.');
        }

    };




    return (
        <button disabled={!props.botoesAtivos || desabilitar} onClick={escolherLetra} class={props.abilitar + ver}> {props.alfabetoCima} </button>
    );

}