// let age = 17;

// if (age >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }
// console.log(age >= 18)
// switch (true) {
//   case age >= 18:
//     console.log("Eres mayor de edad");
//     break;

//   default:
//     console.log("Eres menor de edad");
//     break;
// }

// let person = {
//   age: 17,
//   sonOfBoss: true,
//   dressCode: false,
// };
// let mensaje;
// switch (true) {
//   case person.age >= 18 && person.dressCode == true:
//     mensaje="Eres mayor de edad"
//     break;
//   case person.sonOfBoss == true:
//     mensaje="No eres mayor de edad pero eres el hijo del jefe";
//     break;
//   default:
//     mensaje="Eres menor de edad";
// }
// console.log(mensaje)
// if (person.age >= 18 && person.dressCode == true) {
//   console.log("Eres mayor de edad");
// } else if (person.sonOfBoss == true) {
//   console.log("No eres mayor de edad pero eres el hijo del jefe");
// } else {
//   console.log("Eres menor de edad");
// }

let diaActual = new Date();
const dia_de_la_semana = diaActual.getDay();

// switch (dia_de_la_semana) {
//   case 1:
//     console.log("Es Lunes");
//     break;
//   case 2:
//     console.log("Es Martes");
//     break;
//   case 3:
//     console.log("Es Miércoles");
//     break;
//   case 4:
//     console.log("Es Jueves");
//     break;
//   case 5:
//     console.log("Es viernes");
//     break;
//   case 6:
//   case 7:
//     console.log("Es fin de semana");
//     break;
//   default:
//     console.log("Ese día no existe");
// }

let a = "1";

let b = 2;

let suma = a + b;

// console.log("string",suma)
// console.log("number",+suma)
let resta = b - a;
// a += 3

// console.log(a)

// if(a === "1"){
//     console.log("Si")
// }

// if (age <= 17) console.log('Eres muy joven para beber alcohol')

const age = 17;

let firstName;

// if (age <= 17 || firstName === "Iván") console.log('Eres menor de edad o te llamas '+ firstName)

// if (age <= 17 && firstName === "Iván") console.log('Eres menor de edad y te llamas '+ firstName)
// console.log(!firstName)
// if (!firstName) console.log( firstName + ' no está definido')

const eresMayorDeEdad =
  age >= 18 ? "Eres mayor de edad" : "No eres mayor de edad";

// console.log(eresMayorDeEdad)

const vueltas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < vueltas.length; i+= 2) {
//        console.log('Vuelta nº ' + vueltas[i]);
// }

// for (let i = 0; i < vueltas.length; i++) {
//     console.log('Vuelta nº ' + vueltas[i]);
// }

// let i = 0;

// while (i < vueltas.length) {
//        console.log("Vuelta nº " + vueltas[i]);
//        i++;
// }

// for (let vuelta of vueltas) {
//        console.log("Vuelta nº " + vuelta);
// }

// const person = { fname: "John", lname: "Doe", age: 25 };

// for (let x in person) {
//        console.log(x)
// }

// for (const vuelta in vueltas) {
//    console.log(vueltas[vuelta])
// }

//PRÁCTICA

//código

// const obj = {
//   a: {
//     b: true,
//     c: ["hola", 2],
//   },
//   d: 5,
//   f: "hola",
// };
// //condiciones
// if (typeof obj === "object") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// if (typeof obj.a.b === "boolean") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// if (typeof obj.a.c[1] === "number") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// if (typeof obj.d === "number") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// if (obj.d > 4 && obj.d < 8) {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

// if (typeof obj.f === "string") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

// if (obj.f.length === 4) {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola. Utiliza el bucle for of.
// console.log(gente[0].nombre)
// console.log(gente[1].nombre)
// console.log(gente[2].nombre)
// for (const persona of gente) {
//     console.log(persona.nombre)
// }
let genteMayor25 = [];
for (const persona of gente) {
  if (persona.edad > 25) {
    genteMayor25.push(persona);
  }
}

// console.log(genteMayor25);

// Crea un array con la gente que empieza por J. Utiliza el bucle for of y muéstralo por consola.

let genteJ = []

for (const persona of gente) {
    if(persona.nombre[0] ==="J"){
        genteJ.push(persona)
    }
}

console.log(genteJ)