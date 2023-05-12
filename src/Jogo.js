
import React, { useState } from "react";
import Palavras from "./palavras";

export default function Jogo() {

    const alfabetoCima = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const [botoesAtivos, setBotoesAtivos] = useState(false); // serve para abilitar o botão no assim que clicado em escolher palavra
    const [abilitar, setAbilitar] = useState('letrasDesabilitadas'); // serve para colocar a cor do boão de abilitado 
    const [erro, setErro] = useState(0); // serve pra contar a quantidade de erro
    const [acertou, setAcertou] = useState('');
    const [errou, setErrou] = useState('');
    const [palavraSorteada, setPalavraSorteada] = useState('');
    const [letrasCorretas, setLetrasCorretas] = useState([]);
    const [palavraExibida, setPalavraExibida] = useState([]);
    const [reiniciar, setReiniciar] = useState(0)
    const [botoes, setBotoes] = useState(
        alfabetoCima.map((letra) => ({ letra: letra, habilitado: true }))
    );



    function escolherLetra(letra) {
        let palavra = palavraSorteada.toUpperCase();

        setBotoes((botoes) =>
            botoes.map((botao) =>
                botao.letra === letra ? { ...botao, habilitado: false } : botao
            )
        );

        if (palavra.includes(letra)) {
            // fazer trocar o anderalaine
            setLetrasCorretas([...letrasCorretas, letra]);
            const novaPalavraExibida = palavraExibida.map((letraExibida, index) =>
                palavra[index] === letra ? letra : letraExibida
            );
            setPalavraExibida(novaPalavraExibida);
            console.log(novaPalavraExibida);
            let paralavraVerificada = novaPalavraExibida.join("");
            if (paralavraVerificada === palavra) { // verificar se a pessoal acertou
                setBotoesAtivos(false);
                setAbilitar(' letrasDesabilitadas');
                setAcertou('acertou');
            }
        } else {
            if (erro < 5) {
                setErro(erro + 1);

            } else {
                setErro(erro + 1);
                setBotoesAtivos(false);
                setAbilitar(' letrasDesabilitadas')
                setErrou('errou');
                setPalavraExibida(Array(palavraSorteada.toUpperCase()));
            }}
    };

    function Reiniciar() {

        setErro(0);
        setAcertou('');
        setErrou('');
        setPalavraSorteada('');
        setLetrasCorretas([]);
        setPalavraExibida([]);
        setBotoes(
            alfabetoCima.map((letra) => ({ letra: letra, habilitado: true }))
        );
        setBotoesAtivos(true);
        setAbilitar(' abilitado');

    };

    function escolherPalavra() {

        Reiniciar();

        const palavrasEmbaralhadas = [...Palavras];
        palavrasEmbaralhadas.sort(() => Math.random() - 0.5);
        let palavraSorteada = palavrasEmbaralhadas[0];
        console.log(palavraSorteada);
        setPalavraSorteada(palavraSorteada)
        setReiniciar(reiniciar);
        setBotoesAtivos(true);
        setAbilitar('abilitado');
        setPalavraExibida(Array(palavraSorteada.length).fill('_'));

    };
    return (
        <> <div class="cima">
            <div class="forca">
                <img class="imagem-forca" src={`./assets/forca${erro}.png`} alt="" data-test="game-image"/>
            </div>
            <div class="direita" >
                <button onClick={escolherPalavra} class="escolher-palavra" data-test="choose-word">Escolher palavra</button>
                <div class={`palavra ${errou} ${acertou}`} data-test="word" >
                    {palavraExibida.join(' ')}
                </div>
            </div>
        </div>
            <div class="letrastotais">
                <div class="parte-de-cima">
                    {botoes.map((botao, index) => (
                        <button
                            disabled={!botoesAtivos || !botao.habilitado}
                            onClick={() => escolherLetra(botao.letra)}
                            className={abilitar + (botao.habilitado ? '' : ' letrasDesabilitadas')}
                            key={index}
                            data-test="letter"
                        >
                            {botao.letra}
                        </button>
                    ))}
                </div>
            </div>

        </>
    );

}