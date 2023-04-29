/*
   IF ES UNA ESTRUCTURA DE CONTROL EN JAVASCRIPT QUE SE UTILIZA PARA TOMAR DECISIONES BASADAS EN UNA CONDICION.
   PERMITE EJECUTAR UN BLOQUE DE CODIGO SI LA CONDICION ES VERDADERA Y OTRO BLOQUE DE CODIGO SI LA CONDICION ES FALSA

LA SINTAXIS BASICA DE IF ES LA SIGUIENTE 

if (condicion) {
    * codigo a ejecutar si la condicion es verdadera
} else {
    !codigo a ejecutar si la condicion es falsa
}
*/

const USER = "Hola";
const PASSWORE = "Holamundo";

let u = prompt("Ingresa tu usuario");
let p = prompt("Ingresa tu contraseña");

if(USER === u && PASSWORE === p){
    document.write("Bienvenido a tu panel de control");
}else{
    document.write("Acceso denegado");
}

/*
let balon = prompt("De que color es el balon");

if(balon === "azul"){ //! solo se usa una vez por condiccion

    document.write('Podemos jugar el balon es ${balon}'); 
}else if(balon === "rojo"){ //!Se ejecuta una o varias veces
    document.write('Podemos jugar el balon es ${balon}');

}else { //!Se ejecuta una o varias veces

    document.write('No podemos jugar el balon es ${balon}');
}
/*
if(balon === "rojo"){
    document.write('podemos jugar, el balon es ${balon}'); 
}else{
    document.write('Es una lastima, el balon es ${balon}')
} 
/*
como se hacia antes 
document.write(a>b);
document.write(a<b);
*/
/* ejemplo de explicacion
if(a > b){
    document.write(' ${b} es mayor a ${a}');
}else{
    document.write(' ${a} es mayor a ${b}');
}
*/
/*
los simbolos ${} muestra que valor tiene 
la variable */
