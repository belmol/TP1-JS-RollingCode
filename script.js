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

// Ejercicio 7
function ejercicio7() {
    let numero1 = parseInt(prompt("Por favor, ingresa el primer número"));
    let numero2 = parseInt(prompt("Por favor, ingresa el segundo número"));
    let numero3 = parseInt(prompt("Por favor, ingresa el tercer número"));
    let max = Math.max(numero1, numero2, numero3);
    document.write(max);
}

// Ejercicio 8
function ejercicio8() {
    let numero = parseInt(prompt("Por favor, ingresa un número"));
    let esDivisible = numero % 2 === 0 ? `El ${numero} es divisible por 2.` : `El ${numero} no es divisible por 2.`;
    document.write(esDivisible);
}

// Ejercicio 9
function ejercicio9() {
    let frase = prompt("Por favor, ingresa una frase");
    let vocales = "";
    for (let i = 0; i < frase.length; i++) {
        if ("aeiou".includes(frase.charAt(i).toLowerCase())) {
            vocales += frase.charAt(i);
        }
    }
    document.write(vocales);
}
