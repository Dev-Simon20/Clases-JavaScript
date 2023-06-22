//METODOS PARA LOS STRING

//Iremos viendo todo los metodos de cadenas
//viendo video de dalto 
//Resaltando  en el libro
//Probando en la terminal los codigos       recuerda: para probar se coloca =====>  node "nombre del archivo"
//   Cadena==String

//  1- Concat: Jumta dos Cadenas
// let saludo="Hola";
// let persona=" Jeampierk"
// let resultado= saludo.concat(persona);
// console.log(resultado);


// 2-StarsWith: Compara si el texto que esta en "persona" se encuentra al inicio  del texto "saludo". Si esta devuelve true, Sino false.
// let saludo="Hola Juan Jeampierk";
// let persona="Hola Juan"
// let resultado= saludo.startsWith(persona);
// console.log(resultado);


// 3-endsWith: Compara si el texto que esta en "persona" se encuentra al final  del texto "saludo". Si esta devuelve true, Sino false.
// let saludo="Jeampierk Hola Juan";
// let persona="Hola Juan"
// let resultado= saludo.endsWith(persona);
// console.log(resultado);




// 4-Includes(buscar,posicion) Busca al valor del atributo "buscar" y devuelve true o false. Si se incluye la posicion comienza a buscar desde alli, sino buscara desde el inicio hasta el final de la cadena.
// let saludo="Jeampierk Hola Juan que tal como te va ";
// let persona="Hola Juan"
// let resultado= saludo.includes(persona,10); en este caso se buscara desde la posicion 10
// console.log(resultado);


// 5- indexof(buscar,posicion): Devuelve el indice en el que se encuentra por primera vez el atributo buscar,sino lo encuentra en la cadena devolvera -1  .El atributo posicion funiona igual que en includes.
// let saludo="Jeampierk Hola Juan que tal como te va ";
// let persona="Hola Juan"
//Buscara==> " Hola Juan " y nos devolvera la posicion de la " H " en la cadena Saludo
// let resultado= saludo.indexOf(persona,5); 
// console.log(resultado);//10


// 6- lastIndexof(buscar,posicion): Hara una busaqueda de atras hacia adelante y devolvera el indice en el que se encuentre por primera vez el atributo valor,sino lo encuentra en la cadena devolvera -1  .El atributo posicion funiona igual que en includes.
// let saludo="Jeampierk Hola Juan Hola Juan";
// let persona="Hola Juan"
// //Buscara==> " Hola Juan " y nos devolvera la posicion de la " H " en la cadena Saludo
// let resultado= saludo.lastIndexOf(persona); 
// //Encuentra el primer " Hola Juan " y nos da la posicion de la "H"
// console.log(resultado);//20


// 7- padStart(tamaño,valor) :La cadena tendra el tamaño que coloquemos, y lo rellenara  al principio con el valor que coloquemos 
//    let cadena="abc"; //cadena de 3 posicones
//    let cadena2="";
//    let resultado=cadena.padStart(6,"zk");//Se alarga a 6 y se rellena con  zk y repetira la Z  para completar las 6 posciciones
//    console.log(resultado);


// 8- padEnd(tamaño,valor) :La cadena tendra el tamaño que coloquemos, y lo rellenara  al Final con el valor que coloquemos 
//    let cadena="abc"; //cadena de 3 posicones
//    let cadena2="";
//    let resultado=cadena.padEnd(6,"zk");//Se alarga a 6 y se rellena con  zk y repetira la Z  para completar las 6 posciciones
//    console.log(resultado);

// 8- repeat(valor) :Repetira la cadena las veces que tenga la propiedad valor
//    let cadena="abc "; //cadena de 3 posicones
//    let cadena2="";
//    let resultado=cadena.repeat(6);//Se repetira 6 veces
//    console.log(resultado);




//Metodos que sivren mas para convertir cadenas 

//  9- split(" valor  ") ===> convertira la cadena en un arreglo y cada que encuentre la propiedad valor lo eliminara y partira la cadena
//    let cadena="Hola * como * estas";
//    let resultado=cadena.split("*");
//    console.log(resultado); //      resultado sera ['Hola','como','estas']


//  10- substring(inicio,final) == Extraera los caracteres de la cadena, desde la posicion de la propiedad inicio hasta la posicion de la propiedad final que coloquemos
//    let cadena="Hola como estas";
//    let resultado=cadena.substring(5,9);//Extrae de la posicion 5 al 8 
//    //No cuenta la posicion 9,  siempre extrae hasta la posicion antrior de la que hallamos colocado.
//    console.log(resultado); // resultado==> como


//11-  toLowerCase() :  Convierte la cadena en minuscula
//    let cadena="HOLA COMO ESTAS";
//    let resultado=cadena.toLowerCase();
//    console.log(resultado); 

//12-  toUpperCase() :  Convierte la cadena en mayuscula
// let cadena = "hola como estas";
// let resultado = cadena.toUpperCase();
// console.log(resultado);


// 13- toString()   : convierte un Numero o Arrelgo  a un CADENA DE TEXTO  
//let cadena = 550;
// let cadena =["pedro","Juan","Jean"]
// let resultado = cadena.toString();
// console.log(resultado); 


//14 Trim()  : Elimina los espacios de la Cadena al inicio y al final
//Tabien esta el trimEnd() que elimina el epsacio al final
//y   trimStart()  elimina el espacio al inicio


let cadena="   HOLA  ";
console.log(cadena);
let resultado= cadena.trim();
console.log(resultado);