let numerosGenerados = [];


let sumaNumeros = 0;
let menorNumero = Number.MAX_SAFE_INTEGER;
let mayorNumero = Number.MIN_SAFE_INTEGER;


function almacenarNumero() {

    let numeroGenerado = Math.floor(Math.random() * 100) + 1;


    document.getElementById("numeroAleatorio").value = numeroGenerado;

    numerosGenerados.push(numeroGenerado);


    mostrarNumerosAlmacenados();
}


function mostrarNumerosAlmacenados() {
    let numerosAlmacenadosDiv = document.getElementById("numerosAlmacenados");


    numerosAlmacenadosDiv.innerHTML = "";


    for (let i = 0; i < numerosGenerados.length; i++) {
        let numeroP = document.createElement("p");
        numeroP.textContent = "Número almacenado: " + numerosGenerados[i];
        numerosAlmacenadosDiv.appendChild(numeroP);
    }


    sumaNumeros += numerosGenerados[numerosGenerados.length - 1];
    menorNumero = Math.min(...numerosGenerados);
    mayorNumero = Math.max(...numerosGenerados);

    document.getElementById("sumaNumeros").textContent = sumaNumeros;
    document.getElementById("menorNumero").textContent = (numerosGenerados.length > 0) ? menorNumero : "-";
    document.getElementById("mayorNumero").textContent = (numerosGenerados.length > 0) ? mayorNumero : "-";
}