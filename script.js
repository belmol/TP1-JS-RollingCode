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

// Ejercicio 10
function ejercicio10() {
    let numero = parseInt(prompt("Por favor, ingresa un número"));
    let divisible = "";
    if (numero % 2 === 0) {
        divisible += "2, ";
    }
    if (numero % 3 === 0) {
        divisible += "3, ";
    }
    if (numero % 5 === 0) {
        divisible += "5, ";
    }
    if (numero % 7 === 0) {
        divisible += "7, ";
    }
    let esDivisiblePorAlguno = divisible === "" ? `El ${numero} no es divisible por 2, 3, 5 o 7.` : `El ${numero} es divisible por ${divisible.slice(0, -2)}.`;
    document.write(esDivisiblePorAlguno);
}


// Ejercicio 11
function ejercicio11() {
    let numero2 = parseInt(prompt("Por favor, ingresa un número"));
    let divisibles = "";
    if (numero2 % 2 === 0) {
        divisibles += "2, ";
    }
    if (numero2 % 3 === 0) {
        divisibles += "3, ";
    }
    if (numero2 % 5 === 0) {
        divisibles += "5, ";
    }
    if (numero2 % 7 === 0) {
        divisibles += "7, ";
    }
    let esDivisiblePorAlguno2 = divisibles === "" ? `El ${numero2} no es divisible por 2, 3, 5 o 7.` : `El ${numero2} es divisible por ${divisibles.slice(0, -2)}.`;
    document.write(esDivisiblePorAlguno2);
}
