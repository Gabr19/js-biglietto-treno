const km = prompt ("Quanti chilometri devi percorrere?")
    console.log("La distanza da percorrere è: ", km);

const età = prompt ("Quanti anni hai?")
    console.log("L'età del passeggero è: ", età );


if (età>=19 && età<=64) {
    let x = km;
    let y = 0.21;
    let z = x * y;
    console.log( z.toFixed( 2 ) );
    document.getElementById("number").innerHTML=( z.toFixed( 2 ) ) ;


}

else if (età>=65) {
    let x = km;
    let y = 0.21;
    let z = x * y * 0.6;
    console.log( z.toFixed( 2 ) );
    document.getElementById("number").innerHTML=( z.toFixed( 2 ) ) ;
}

else {
    let x = km;
    let y = 0.21;
    let z = x * y * 0.8;
    console.log( z.toFixed( 2 ) );
    document.getElementById("number").innerHTML=( z.toFixed( 2 ) ) ;

}



