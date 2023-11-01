// Ejercicio 1
function ejercicio1() {alert("un mensaje");}

// Ejercicio 2
function ejercicio2() {document.write("Hello World");}

// Ejercicio 3
function ejercicio3() {
    let resultado = 3 + 5;
    document.write(resultado);
}
// Ejercicio 4
function ejercicio4() {
    const nombreUsuario = prompt("Por favor, ingresa tu nombre");
    let saludo = `Hola ${nombreUsuario}`;
    document.write(saludo);
}
// Ejercicio 5
function ejercicio5() {
    let numero1 = parseInt(prompt("Por favor, ingresa el primer número"));
    let numero2 = parseInt(prompt("Por favor, ingresa el segundo número"));
    const suma = numero1 + numero2;
    document.write(suma);
}
// Ejercicio 6
function ejercicio6() {
    let numero1 = parseInt(prompt("Por favor, ingresa el primer número"));
    let numero2 = parseInt(prompt("Por favor, ingresa el segundo número"));
    let mayor;
    if (numero1 > numero2) {
        mayor = numero1;
    } else {
        mayor = numero2;
    }
    document.write(mayor);
}

