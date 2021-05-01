function cambiaContenido() {
    var inputLongitud_1 = document.getElementById("input_longitud_1");
    var inputLongitud_2 = document.getElementById("input_longitud_2");
    var muestra_formula = document.getElementById("muestra_formula");

    var selectLongitud_1 = document.getElementById("select_longitud_1").value;
    var selectLongitud_2 = document.getElementById("select_longitud_2").value;
    
    //alert("Cambia contenido: ["+inputLongitud_1.value+"]["+inputLongitud_2.value+"]["+selectLongitud_1+"] ["+selectLongitud_2+"]"); 

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 100000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 100000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000000000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000000000000";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 1.609;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1.609";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 1093.61;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1093.61";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value * 3280.84;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 3280.84";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 39370;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 39370";
    }

    if (selectLongitud_1=="kilometro" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 1.852;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1.852";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 100;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 100";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000000";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000000000";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 1609;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1609";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 1.09361;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1.09361";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value * 3.28084;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 3.28084";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 39.37;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 39.37";
    }

    if (selectLongitud_1=="metro" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 1852;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1852";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value / 100000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 100000";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value / 100;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 100";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 10;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 10";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 10000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 10000";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 10000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 10000000";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 160934;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 160934";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value / 91.44;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 91.44";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value / 30.48;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 30.48";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value / 2.54;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 2.54";
    }

    if (selectLongitud_1=="centimetro" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value * 185200;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 185200";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000000";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value / 10;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 10";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000000";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 1609000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1609000";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value / 914;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 914";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value / 305;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 305";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value / 25.4;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 25.4";
    }

    if (selectLongitud_1=="milimetro" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 1852000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1852000";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000000000";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000000";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value / 10000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 10000";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 1609000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1.609";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value / 914400;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 914400";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value / 304800;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 304800";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value / 25400;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 25400";
    }

    if (selectLongitud_1=="micrometro" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 1852000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1852000000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000000000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000000000000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000000000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value / 10000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 10000000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value / 1000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 1609000000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1609000000000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value / 914400000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 914400000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value / 304800000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 304800000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value / 2540000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 2540000";
    }

    if (selectLongitud_1=="nanometro" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 1852000000000;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1852000000000";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1.609;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1.609";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value * 1609;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1609";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 160934;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 160934";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1609000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000000";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1609000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1000";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1609000000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1609000000000";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 1760;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1760";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value * 5280;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 5280";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 63360;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 63360";
    }

    if (selectLongitud_1=="milla" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 1.151;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1.151";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value / 1094;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1094";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value / 1.094;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1.094";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 91.44;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 91.44";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 914;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 914";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 914400;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 914400";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 914400000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 914400000";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 1760;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 1760";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value * 3;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 3";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 36;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 36";
    }

    if (selectLongitud_1=="yarda" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 2025;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 2025";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value / 3281;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 3281";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value / 3.281;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 3.281";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 30.48;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 30.48";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 305;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 305";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 304800;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 304800";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 304800000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 304800000";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 5280;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 5280";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value / 3;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 3";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 12;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 12";
    }

    if (selectLongitud_1=="pie" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 6076;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 6076";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value / 39370;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 39370";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value / 39.37;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 39.37";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 2.54;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 2.54";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 25.4;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 25.4";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 25400;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 25400";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 25400000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 25400000";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value / 63360;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 63360";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value / 36;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 36";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value / 12;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 12";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }

    if (selectLongitud_1=="pulgada" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value / 72913;
        muestra_formula.innerHTML ="El valor de la longitud dividido por 72913";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="kilometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1.852;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1.852";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="metro"){
        inputLongitud_2.value = inputLongitud_1.value * 1852;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1852";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 185200;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 185200";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 18520000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 18520000";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1850000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1852000000";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1852000000000;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1852000000000";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="milla"){
        inputLongitud_2.value = inputLongitud_1.value * 1.151;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1.151";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 2025;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 2025";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="pie"){
        inputLongitud_2.value = inputLongitud_1.value * 6076;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 6076";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 72913;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 72913";
    }

    if (selectLongitud_1=="milla nau" && selectLongitud_2=="milla nau"){
        inputLongitud_2.value = inputLongitud_1.value * 1;
        muestra_formula.innerHTML ="El valor de la longitud multiplicado por 1";
    }
}

function cambiaTemp() {
    var inputTemperatura_1 = document.getElementById("input_temperatura_1");
    var inputTemperatura_2 = document.getElementById("input_temperatura_2");
    var mostrar_formula = document.getElementById("mostrar_formula");
    
    var selectTemperatura_1 = document.getElementById("select_temperatura_1").value;
    var selectTemperatura_2 = document.getElementById("select_temperatura_2").value;

    if (selectTemperatura_1=="celsius" && selectTemperatura_2=="celsius"){
        inputTemperatura_2.value = inputTemperatura_1.value * 1;
        mostrar_formula.innerHTML ="El valor de la temperatura multiplicado por 1";
    }

    if (selectTemperatura_1=="celsius" && selectTemperatura_2=="fahrenheit"){
        inputTemperatura_2.value = inputTemperatura_1.value * (9/5)+32;
        mostrar_formula.innerHTML ="El valor de la temperatura multiplicado por 5, dividiendo entre 5 y sumando 32";
    }

    if (selectTemperatura_1=="celsius" && selectTemperatura_2=="kelvin"){
        inputTemperatura_2.value = inputTemperatura_1.value + 273.15;
        mostrar_formula.innerHTML ="El valor de la temperatura más 273.15";
    }

    if (selectTemperatura_1=="fahrenheit" && selectTemperatura_2=="celsius"){
        inputTemperatura_2.value = (inputTemperatura_1.value - 32) * (5/9);
        mostrar_formula.innerHTML ="El valor de la temperatura restando 32 y multiplicando por 5/9";
    }

    if (selectTemperatura_1=="fahrenheit" && selectTemperatura_2=="fahrenheit"){
        inputTemperatura_2.value = inputTemperatura_1.value * 1;
        mostrar_formula.innerHTML ="El valor de la temperatura multiplicado por 1";
    }

    if (selectTemperatura_1=="fahrenheit" && selectTemperatura_2=="kelvin"){
        inputTemperatura_2.value = (inputTemperatura_1.value - 32) * (5/9) + 273.15;
        mostrar_formula.innerHTML ="El valor de la temperatura restando 32 y multiplicando por 5/9 despues sumando 273.15";
    }

    if (selectTemperatura_1=="kelvin" && selectTemperatura_2=="celsius"){
        inputTemperatura_2.value = (inputTemperatura_1.value - 273.15);
        mostrar_formula.innerHTML ="El valor de la temperatura restando 273.15";
    }

    if (selectTemperatura_1=="kelvin" && selectTemperatura_2=="fahrenheit"){
        inputTemperatura_2.value = (inputTemperatura_1.value - 273.15) * (9/5) +32;
        mostrar_formula.innerHTML ="El valor de la temperatura restando 273.15 y multiplicando por 9/5 despues sumando 32";
    }

    if (selectTemperatura_1=="kelvin" && selectTemperatura_2=="kelvin"){
        inputTemperatura_2.value = inputTemperatura_1.value * 1;
        mostrar_formula.innerHTML ="El valor de la temperatura multiplicado por 1";
    }
}

function cambiaMasa() {
    var inputMasa_1 = document.getElementById("input_masa_1");
    var inputMasa_2 = document.getElementById("input_masa_2");
    var ver_formula = document.getElementById("ver_formula");
    
    var selectMasa_1 = document.getElementById("select_masa_1").value;
    var selectMasa_2 = document.getElementById("select_masa_2").value;

    if (selectMasa_1=="gramos" && selectMasa_2=="gramos"){
        inputMasa_2.value = inputMasa_1.value * 1;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 1";
    }

    if (selectMasa_1=="gramos" && selectMasa_2=="kilogramos"){
        inputMasa_2.value = inputMasa_1.value / 1000;
        ver_formula.innerHTML ="El valor de la masa dividido por 1000";
    }

    if (selectMasa_1=="gramos" && selectMasa_2=="tonelada"){
        inputMasa_2.value = inputMasa_1.value / 1000000;
        ver_formula.innerHTML ="El valor de la masa dividido por 1000000";
    }

    if (selectMasa_1=="gramos" && selectMasa_2=="onza"){
        inputMasa_2.value = inputMasa_1.value / 28.35;
        ver_formula.innerHTML ="El valor de la masa dividido por 28.35";
    }

    if (selectMasa_1=="gramos" && selectMasa_2=="libra"){
        inputMasa_2.value = inputMasa_1.value / 454;
        ver_formula.innerHTML ="El valor de la masa dividido por 454";
    }

    if (selectMasa_1=="kilogramos" && selectMasa_2=="gramos"){
        inputMasa_2.value = inputMasa_1.value * 1000;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 1000";
    }

    if (selectMasa_1=="kilogramos" && selectMasa_2=="kilogramos"){
        inputMasa_2.value = inputMasa_1.value * 1;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 1";
    }

    if (selectMasa_1=="kilogramos" && selectMasa_2=="tonelada"){
        inputMasa_2.value = inputMasa_1.value / 1000;
        ver_formula.innerHTML ="El valor de la masa dividido por 1000";
    }

    if (selectMasa_1=="kilogramos" && selectMasa_2=="onza"){
        inputMasa_2.value = inputMasa_1.value * 35.274;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 35.274";
    }

    if (selectMasa_1=="kilogramos" && selectMasa_2=="libra"){
        inputMasa_2.value = inputMasa_1.value * 2.205;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 2.205";
    }
    if (selectMasa_1=="tonelada" && selectMasa_2=="gramos"){
        inputMasa_2.value = inputMasa_1.value * 1000000;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 1000000";
    }

    if (selectMasa_1=="tonelada" && selectMasa_2=="kilogramos"){
        inputMasa_2.value = inputMasa_1.value * 1000;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 1000";
    }

    if (selectMasa_1=="tonelada" && selectMasa_2=="tonelada"){
        inputMasa_2.value = inputMasa_1.value * 1;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 1";
    }

    if (selectMasa_1=="tonelada" && selectMasa_2=="onza"){
        inputMasa_2.value = inputMasa_1.value * 35274;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 35274";
    }

    if (selectMasa_1=="tonelada" && selectMasa_2=="libra"){
        inputMasa_2.value = inputMasa_1.value * 2205;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 2205";
    }
    if (selectMasa_1=="onza" && selectMasa_2=="gramos"){
        inputMasa_2.value = inputMasa_1.value * 28.35;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 28.35";
    }

    if (selectMasa_1=="onza" && selectMasa_2=="kilogramos"){
        inputMasa_2.value = inputMasa_1.value / 35.274;
        ver_formula.innerHTML ="El valor de la masa dividido por 35.274";
    }

    if (selectMasa_1=="onza" && selectMasa_2=="tonelada"){
        inputMasa_2.value = inputMasa_1.value / 35274;
        ver_formula.innerHTML ="El valor de la masa dividido por 35274";
    }

    if (selectMasa_1=="onza" && selectMasa_2=="onza"){
        inputMasa_2.value = inputMasa_1.value * 1;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 1";
    }

    if (selectMasa_1=="onza" && selectMasa_2=="libra"){
        inputMasa_2.value = inputMasa_1.value / 16;
        ver_formula.innerHTML ="El valor de la masa dividido por 16";
    }
    if (selectMasa_1=="libra" && selectMasa_2=="gramos"){
        inputMasa_2.value = inputMasa_1.value * 454;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 454";
    }

    if (selectMasa_1=="libra" && selectMasa_2=="kilogramos"){
        inputMasa_2.value = inputMasa_1.value / 2.205;
        ver_formula.innerHTML ="El valor de la masa dividido por 2.205";
    }

    if (selectMasa_1=="libra" && selectMasa_2=="tonelada"){
        inputMasa_2.value = inputMasa_1.value / 2205;
        ver_formula.innerHTML ="El valor de la masa dividido por 2205";
    }

    if (selectMasa_1=="libra" && selectMasa_2=="onza"){
        inputMasa_2.value = inputMasa_1.value * 16;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 16";
    }

    if (selectMasa_1=="libra" && selectMasa_2=="libra"){
        inputMasa_2.value = inputMasa_1.value * 1;
        ver_formula.innerHTML ="El valor de la masa multiplicado por 1";
    }
}