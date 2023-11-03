
//CLASE 1
/*var        //  variable con scope globalizada         permite ser modificada  (NO SE USA MAS)
let        //  variable con scope dentro de la funcion, scope local  permite ser modificada
const     //   con valor fijo sin poder modif   , ej: IVA

//estructura: */

let nombreVariable= "Hola JS"
console.log(nombreVariable);          //   me mostrara por consola =    Hola JS
// este objeto es de tipo JSON por eso lleva ","separando las propiedades
// la variable es "objetoUsuario" con las propiedades(grupo de datos)

let objetoUsuario1={
    nombre: "gisela",
    apellido:"garcia",
    edad:45
}
console.log ({objetoUsuario}); // de esta forma me muestra todos los datos del objeto
console.log(objetoUsuario.edad); // de esta forma me muestra la propiedad del objero, la edad

const PI= 3.14; // las constantes se escriben con MAYUSCULA, y no se puieden sobre escribir



// metodos de entrada y salida:  promt , alert
let dato= promt ("ingrese su edad");
let numeroEdad= parseInt (promt("ingrese su edead")); // para cambiar la edad de string a number
// me cuenta cuantos caracteres tengo: .length
letdato2= "hola como estas";
 console.log(dato2.lenght);   // el resultado sera 16
 console.log(dato2.toUpperCase()); // cambia el string de dato 2 a todo mayuscula
 console.log(dato2.repeat(2)); // repite 2 veces dato2
alert ("chau, hasta la proxima");// DE SALIDA:

//  CLASE 2

//en las variables dentro de un objeto puedo tener otro objeto y tb un array, ej: 
let objetoUsuario = {   
    nombre:"gisela",     
    apellido:"gomez",
    edad:41,
    familia:{
        madre:"maria",
        padre: "jose",
        hermanos: [ "juan", "ester"]
    },
};


//OPERADOPRES ARITMETICOS: 

let numero8=50 , numero9=2;

let suma= numero8 + numero9;
console.log(suma);   // el resultado sera:52

let resta= numero8 - numero9;
console.log(resta);   // el resultado sera:48

let multiplicacion= numero8 * numero9;
console.log(multiplicacion);   // el resultado sera:100

let dividir= numero8 / numero9;
console.log(dividir);   // el resultado sera:25

let resto= numero8 % numero9;
console.log(resto);   // el resultado sera:0


//OPERADORES DE ASIGNACION  

let asigMas=numero8;

//asigMas= asigMas+10;
asigMas+=10;   // el resultado sera: 60 = 50+10
asigMas -=10;  // el resultado sera 40 = 50-10
asigMas *=10;  // el resultado sera 500 = 50*10   etc.....

//OPERADORES DE COMPARACION  , SI SE CUMPLE DA TRUE, SI NO FALSE
// <     >     <=       >=   !=    == (esto considera los valores no el tipo de dato)
//   ===   ( son estrictamente iguales, tanto valor como tipo de dato)

let mayorQue= numero8>numero9;
console.log(mayorQue);   // esto dara true   ya que 50>2

// OPERADORES DE INCREMENTO Y DECREMENTO (contabilizan)

let numero10=20;

numero10++;
++numero10;  
// o decremento
numero10--;
--numero10;

//OPERADORES LOGICOS (COMO LOS CONJUNTOS) 
//   (&&) cumplen ambos criterios
let resultado= (numero8>3)&&(numero8<10) &&(numero8 !=5);  // si alguna no se cumple, entonces es false

//   (||) al menos 1 se cumpla
let resultado2= (numero8>3)||(numero8<10) ||(numero8 !=5); // al menos 1 cumpla es true

// necacion    !variable
!resultado;    // si antes era true al negarla pasa a false


// CLASE 3 CONDICIONALES  ( HACE 1 U OTRA ACCION , "CASITA" TRUE O FALSE )

let numero= parseInt(prompt("ingrese su edad: "));
// dentro del (va la condicion inicial)
if(numero<18){
    alert("No tenes permiso de ingreso");  // esta es la parte verdadera del if
} else{                                   // criterio que no accede a lo anterior
    if(numero <21){
        alert("tenes que pedir permiso");
    }else{                               // de lo contrario 
        alert("podes entrar");
    }
}

// esto mismo se puede hacer con el "else if"
//si tiene menos de 18 no ingresa,de 18 a 21 pide permiso,de 21 a 60 accede,mas de 60 no tiene permiso
if(numero<18){
    alert("No tenes permiso de ingreso");  
} else if(numero <21){                        // hago un else if directo
        alert("tenes que pedir permiso");
    }else if (numero>60){                               
        alert("no tenes acceso");
    }else{
        alert("podes entrar")
    }

// otro criterio: de lo anterior mas que si tiene 20 años no ingrese

if(numero<18 || numero >60 || numero ==20){
    alert("sin acceso");
}else{
    alert("puede ingresar");
}


// OTRO CONDICIONAL EL "SWITCH" los valores que ingresan ya se que estan dentro de un rango
//se clasifican "case" y cierra con "break" saliendo del condicional, si no sigue al proximo.
//tenemos los codigos de productos 100 200 
let producto= parseInt(prompt("ingrese el codigo de producto: "));

switch (producto){
    case 100:
        alert(" el producto es el codigo 100");
        break;

    case 200:
        alert(" el producto es el codigo 200");
        break;

    case 300:
        alert(" el producto es el codigo 300");
        break;
        
    case 100:
        alert(" el producto es el codigo 100");
        break;
        
    default:         // para cualquier codigo de los que no cargamos en los case
        alert(" re ingresa tu codigo");
        break;
}

// VARIANTE DE CONDICIONALES, TERNARIOS
// condicion ? "parte verdadera": "parte falsa";  puedo guardar el result en una variable
// de esta forma se hace la misma estructura del IF pero en una sola linea

let resultado1 = numero >= 18 ? alert("Es mayor de edad") : alert("Es menor de edad");


// ITERAR   BUCLES  (tierne principio y tiene fin, cuando termina sale del bucle y corta)

// FOR      WHILE    DO WHILE
// FOR  ES UN CIRCULO FINITA, CON PRINCIPIO NY FIN, DESDE DONDE)
// for( creo la variable , indico desde donde inicia, hasta que valor, y desde cuanto suma o resta)
for(let i=0; i<11; i++) {
    console.log("numero " + i);
}

// WHILE    DO WHILE  la diferencia que 1 valida antes y ajecuta, el otro ejecuta y luego valida
// primero ejecuto y despues consulto
while(producto ==100){
    console.log("repetir producto");
    producto= parseInt(prompt("ingrese el codigo de producto: "));
}


// DO WHILE   primero consulto y despues ejecuto 
do{
    console.log("repetir producto");
    producto= parseInt(prompt("ingrese el codigo de producto: "));
} while(producto ==100)


// CLASE 4   FUNCIONES
// declaracion
function sumar() {
    console.log("esto es para sumar")
    let v1=parseInt(prompt("ingresa el primer numero")); // preg valor de variable
    let v2=parseInt(prompt("ingresa el segundo numero"));

    let resultado = v1 +v2;

    return resultado;  // me puede devolver lo que yo quiera
}

// llamado   (algunas tienen return y otras no) para que devuelva debe decir return
let suma1 =sumar(10,5);// de esta forma le puedo indicar los valores de las variables como parametros
let suma2 =sumar();
alert(suma);       // muestra el valor en alert
console.log(suma); // muestra el valor por consula 

//ARROW FUNCTION  es con          const nombre=(param)=>{}   

const sumar2=(a,b)=> {
    let resultado2=a+b;
    console.log("el resultado de la suma es : "+ resultado2);
    return resultado2;
}

// otra opcion como callbacks  (esto sirve para el metodo map) sentencia unica
const sumar3= (a,b)=>a+b;

let suma3= sumar2(numero, 20);
console.log(suma3);

// CLASE 5    ARRAYS  (vectores,arreglos,matrices,colecciones de datos dentro de una misma variable)
// puede guardar cualquier tipod e elementos, string, objetos, numeros.. etc
const frutas=["Manzana", "Pera", "Frutillas", "kiwi"]; // los arrays inician desde la posicion 0,1...
console.log(frutas.length); // me arroja la cantidad de posiciones del array= 4
console.log(frutas[2]); // me va a decir lo que tiene la posicion 2 = frutillas
const frutas2=["Manzana", 56, "Frutillas", "kiwi", ["papa", "tomate"]];
console.log(frutas2[4][1]); // me arrojara tomate  

frutas.push("anana"); // AGREGA AL FINAL al array
frutas.pop(); // ELIMINA EL ULTIMO
frutas.unshift("anana"); // AGREGO AL PRINCIPIO
frutas.shift(); // ELIMINA EL PRIMERO

const verduras = ["zapallo", "Espinaca", "Brocoli", "papa", "tomate"];

// CONCATENAR ARRAYS

const verduleria= frutas.concat(verduras);
console.log(verduleria); // me arroja 1 array con todos los elementos juntos del 0 al 10
// el array, va a pasar una cadena de string separados por lo que qiuiera ej:(",")
console.log(verduleria.join(","));
console.log(verduleria.sort()); // ordena de forma alfabeticamente

const numerosNuevos=[10,5,95,250,25];
console.log(numerosNuevos.sort()); // asi los acomoda segun el primer digito[10,25,250,5,95]
console.log(numerosNuevos.sort((a,b)=>a-b));// asi los acomoda ok [5,10,25,95,250] con callback


// CLASE 6     DOM