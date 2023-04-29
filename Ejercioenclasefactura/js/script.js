


let cantidad = parseInt(prompt("Ingresa que cantidad quieres cobrar"));
let persona = prompt("Ingresa el tipo de persona a la que le quieres hacer el cobro(fisica/moral)");
let iva= .16
let isr= .0125
totaliva= iva*cantidad;
totalisr= cantidad*isr;
personafisica=totaliva+cantidad;
personamoral=personafisica-totalisr;
if(persona === "moral"){
    document.write(`La cantidad que tienes que cobrar es ${personamoral} <br>`);
    document.write(`La cantidad del iva es ${totaliva} <br>`);
    document.write(`La cantidad del isr es ${totalisr} <br>`);
}else if(persona === "fisica"){
    document.write(`La cantidad que tienes que cobrar es ${personafisica} <br>`);
    document.write(`La cantidad del iva es ${totaliva} <br>`);
}





