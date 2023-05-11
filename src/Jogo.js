
import LetrasAcima from "./letrasCima";
import LetrasBaixo from "./letrasBaixo";
import Palavras from "./Palavras";

export default function Jogo() {
  const palavrasEmbaralhadas = [...Palavras];

   palavrasEmbaralhadas.sort(() => Math.random() - 0.5);

   const palavraSorteada = palavrasEmbaralhadas[0];
   const palavraNaTela =[palavraSorteada];
   const quantidadeDeLetras = [palavraSorteada.length];
   

   console.log(palavraNaTela);
   console.log(quantidadeDeLetras);

    const alfabetoCima = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    const alfabetoBaixo = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "z"];

   
    function escolherPalavra() {
        alert('Passaei aqui');
        // setAbilitar('abilitado');
    };
   

    return (
        <>
            <div class="cima">
                <div class="forca">
                    <img class="imagem-forca" src="./assets/forca0.png" alt="" />
                </div>
                <div class="direita" >
                    <div onClick={escolherPalavra} class="escolher-palavra">Escolher palavra</div>
                    <div class="palavra"> 
                    {quantidadeDeLetras.map((quantidadeDeLetras)=> {
                        return( <>_</>)
                    })} </div>
                </div>
            </div>
            <div class="letrastotais">
                <div class="parte-de-cima">
                    {alfabetoCima.map((alfabetoCima) => {
                        return (<LetrasAcima alfabetoCima={alfabetoCima} />);
                    })}
                </div>
                <div class="parte-de-baixo">
                    {alfabetoBaixo.map(alfabetoBaixo => {
                       return(<LetrasBaixo alfabetoBaixo = {alfabetoBaixo} />)
                    })}
                </div>
            </div>

        </>
    );

}