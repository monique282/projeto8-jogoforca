export default function letras(){
   
    
    const alfabetoBaixo = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "z"];
    return(
    alfabetoBaixo.map(alfabetoBaixo => (
        <div disabled class="letras">{alfabetoBaixo}</div>
    ))
);

}