/*
Fisicascantidad * IVA  IVA=1.25 %

Morales  ( Cantidad )

100*1.25
100*0.125

*/


let cantidad= parseInt(prompt("Ingresa una Cantidad"));
let tipoPersona = prompt("[1] 🧍Fisica \n [2] 🏢 Moral");

// Operaciones 

const IVA = .16;

const ISR = .0125;

operacionIVA = cantidad*IVA;
operacionISR = cantidad*ISR;

Fisica= cantidad + operacionIVA;
Moral= (cantidad - operacionISR) * operacionIVA; 


if (tipoPersona === "1"){

    document.write(`La cantidad: ${cantidad}<br>
            IVA:${operacionIVA} <br>
            Total: ${Fisica}`);
    
}else if (tipoPersona ==="2") {

    document.write(`La cantidad: ${cantidad}<br>
            IVA:${operacionIVA} <br>
            ISR:-${operacionISR} <br>
            Total: ${Moral}`);



}else{

alert("Valor Erroneo") ;
}
