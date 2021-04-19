
function sumaNumeros() {
    //Acceder a los elementos del documento
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    var resultado=document.getElementById("resultado");
    //Proceso
    var suma= parseInt(num1) + parseInt(num2);
    //Mostrar
    resultado.innerHTML="Resultado: " + suma;
}

function restaNumeros() {
    var resta=document.getElementById("numero1").value - document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: " +resta;
}

function multiplicaNumeros() {
    var multiplicar=document.getElementById("numero1").value * document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: " +multiplicar;
}

function divideNumeros() {
    var dividir=document.getElementById("numero1").value / document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: " +dividir;
}