import LetrasCima from "./letrasCima";
import LetrasBaixo from "./letrasBaixo";

export default function Jogo() {
   

    function escolherPalavra() {
        alert('Passaei aqui');
    };
    
    return (
        <>
            <div class="cima">
                <div class="forca">
                    <img class="imagem-forca" src="./assets/forca0.png" alt="" />
                </div>
               <div class="direita" >
               <div onClick={escolherPalavra} class="escolher-palavra">Escolher palavra</div>
               <div class ="palavra"> _ </div>
               </div> 
            </div>
            <div class="letrastotais">
                <div class="parte-de-cima">
                    <LetrasCima/>
                
                </div>
                <div class="parte-de-baixo">
                   <LetrasBaixo />
                </div>
            </div>

        </>
    );

}