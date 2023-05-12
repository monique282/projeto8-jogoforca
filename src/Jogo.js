
import React, { useState } from "react";
//import LetrasAcima from "./letrasCima";
import LetrasBaixo from "./letrasBaixo";
import Palavras from "./Palavras";

export default function Jogo() {

    const alfabetoCima = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    const alfabetoBaixo = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const [botoesAtivos, setBotoesAtivos] = useState(false); // serve para abilitar o botão no assim que clicado em escolher palavra
    const [abilitar, setAbilitar] = useState('letrasDesabilitadas'); // serve para colocar a cor do boão de abilitado 
    const [desabilitar, setDesabilitar] = useState(false); // serve para desabilitar o botão assim que clicado
    const [ver, setver] = useState(' '); // serve pra colocar a cor de desabilitado
    const [quantidadeDeLetras, setQuantidadeDeLetras] = useState(0);
    const [palavraSorteada, setPalavraSorteada] = useState('');

    function escolherLetra(letra) {
        let palavra = palavraSorteada.toUpperCase();
        let letraClicada = (alfabetoCima);
        console.log(letra);
        if (abilitar === 'abilitado') {
            setver(' letrasDesabilitadas');
            setDesabilitar(true);

        };
        if (palavra.includes(letraClicada)) {
            console.log('A letra clicada está na palavra!');
        } else {
            console.log('A letra clicada não está na palavra.');
        }
    };


    function escolherPalavra() {

        if (palavraSorteada === '') {
            const palavrasEmbaralhadas = [...Palavras];

            palavrasEmbaralhadas.sort(() => Math.random() - 0.5);

            let palavraSorteada = palavrasEmbaralhadas[0];
            console.log(palavraSorteada);
            setPalavraSorteada(palavraSorteada)
            setQuantidadeDeLetras(palavraSorteada.length);
            setBotoesAtivos(true);
            setAbilitar('abilitado');
            console.log(palavraSorteada);
        }
    };
    return (
        <> <div class="cima">
            <div class="forca">
                <img class="imagem-forca" src="./assets/forca0.png" alt="" />
            </div>
            <div class="direita" >
                <button onClick={escolherPalavra} class="escolher-palavra">Escolher palavra</button>
                <div class="palavra">
                    {Array.from({ length: quantidadeDeLetras }, () => '_').join(' ')}
                </div>
            </div>
        </div>
            <div class="letrastotais">
                <div class="parte-de-cima">
                    {alfabetoCima.map((letra, index) => {
                        return (<button disabled={!botoesAtivos || desabilitar} onClick={() => escolherLetra(letra)} class={abilitar + ver} key={index}> {letra} </button>);
                    })}
                </div>
                <div class="parte-de-baixo">
                    {alfabetoBaixo.map(alfabetoBaixo => {
                        return (<LetrasBaixo alfabetoBaixo={alfabetoBaixo} botoesAtivos={botoesAtivos} abilitar={abilitar} palavraSorteada={palavraSorteada}  />)
                    })}
                </div>
            </div>

        </>
    );

}