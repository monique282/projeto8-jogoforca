
import React, { useState } from "react";
import LetrasAcima from "./letrasCima";
import LetrasBaixo from "./letrasBaixo";
import Palavras from "./Palavras";

export default function Jogo(props) {

    const alfabetoCima = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    const alfabetoBaixo = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

     let erros = 0;
    const [botoesAtivos, setBotoesAtivos] = useState(false);
    const [quantidadeDeLetras, setQuantidadeDeLetras] = useState(0);
    const [abilitar, setAbilitar] = useState('letrasDesabilitadas');
    const [palavraSorteada, setPalavraSorteada] = useState('')


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
        <>
            <div class="cima">
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
                    {alfabetoCima.map((alfabetoCima) => {
                        return (<LetrasAcima alfabetoCima={alfabetoCima} botoesAtivos={botoesAtivos} abilitar={abilitar} palavraSorteada={palavraSorteada} erros={erros}/>);
                    })}
                </div>
                <div class="parte-de-baixo">
                    {alfabetoBaixo.map(alfabetoBaixo => {
                        return (<LetrasBaixo alfabetoBaixo={alfabetoBaixo} botoesAtivos={botoesAtivos} abilitar={abilitar} palavraSorteada={palavraSorteada} erros={erros} />)
                    })}
                </div>
            </div>

        </>
    );

}