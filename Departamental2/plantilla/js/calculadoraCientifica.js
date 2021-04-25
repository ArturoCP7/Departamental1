//Variables que usemos en todas las funciones
var aux;

function presionaDigito(digito) {
    var display = document.getElementById("display");
    display.value=display.value + digito;
    
}

function limpiaDisplay(){
    var display = document.getElementById("display");
    display.value="0";
}

function presionaOperador(operador){
    var display = document.getElementById("display");
    display.value = display.value + operador;
}

function presionaIgual(){
    var display = document.getElementById("display");
    //Usar la función eval
    var resultado = eval(display.value);
    //Mostrar el resultado = numero
    display.value = resultado;
}

function calcularRaiz(){
    var display = document.getElementById("display");
    display.value = Math.sqrt(eval(display.value));
}

function calcularPorcentaje(){
    var display = document.getElementById("display");
    display.value = display.value*0.01;
}

function calcularLogNat(){
    var display = document.getElementById("display");
    display.value = Math.log(eval(display.value));
}

function calcularLogaritmo(){
    var display = document.getElementById("display");
    display.value = Math.log10(eval(display.value));
}

function calcularFactorial(){
    var display = document.getElementById("display");
    display.value = display.value * display.value;
}

function presionaPotencia(digito) {
    var display = document.getElementById("display");
    display.value=display.value + digito;
    aux++;
}