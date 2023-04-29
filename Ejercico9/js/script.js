/*Arreglos asociativos */

const arrayINE = {
    apPaterno:"Mondragon",
    apMaterno: "Oliva",
    nombre:"Gerardo",
    sexo: "H",
    domicilio : "Av. Republica dominicana",
    claveLector: "MNOLGR02091527H700",
    curp : "MOOG020915HTCNLRA8",
    registro: "2020 00",
    fNacimiento : "15/09/02",
    seccion: "0084",
    vigencia: "2020-2030",
    
};

let apPaterno = arrayINE.apPaterno;
let apMaterno = arrayINE.apMaterno;
let nombre = arrayINE.nombre;
let sexo = arrayINE.sexo;
let domicilio = arrayINE.domicilio;
let claveLector = arrayINE.claveLector;
const curp = arrayINE.curp;
let registro = arrayINE.registro;
let fNacimiento = arrayINE.fNacimiento;
let seccion = arrayINE.seccion;
let vigencia = arrayINE.vigencia;

document.getElementById("apPaterno").innerHTML = apPaterno;
document.getElementById("apMaterno").innerHTML = apMaterno;
document.getElementById("nombre").innerHTML = nombre;
document.getElementById("sexo").innerHTML = sexo;
document.getElementById("domicilio").innerHTML = domicilio;
document.getElementById("claveLector").innerHTML = claveLector;
document.getElementById("curp").innerHTML = curp;
document.getElementById("registro").innerHTML = registro;
document.getElementById("fNacimiento").innerHTML = fNacimiento;
document.getElementById("seccion").innerHTML = seccion;
document.getElementById("vigencia").innerHTML = vigencia;


