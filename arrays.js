//METODOS PARA LOS Arrays

//Iremos viendo todo los metodos para los arrays
//viendo video de dalto 
//Resaltando  en el libro
//Probando en la terminal los codigos       recuerda: para probar se coloca =====>  node "nombre del archivo"
//  Array== arregllos

//1- pop():   Elmina el ultio valor del arreglo y devuelve lo que elimino
//    let nombres= ["Juan","Jose","Jorge"];
//    let resultado=nombres.pop();
//    console.log(nombres);
//    console.log(resultado);



//2- shift():   Elmina el primer valor del arreglo y devuelve lo que elimino
//    let nombres= ["Juan","Jose","Jorge"];
//    let resultado=nombres.shift();
//    console.log(nombres);
//    console.log(resultado);


//3- push( valores );   :  Este metodo agrega uno o mas valores al final del arreglo
// let nombres= ["Juan","Jose","Jorge"];
// let resultado=nombres.push("robert","alex","Julio");
// console.log(nombres);//Cuando imprimimos mobres no dara el arreglo con lo que hemos aumentado.
// console.log(resultado);//Nos dara el numero de eleimentos que hay en el arreglo despues de haber hecho el push.


// 4. Reverse();    : Invierte el orden de los valores del array  
// let nombres= ["Juan","Jose","Jorge"];
// nombres.reverse();
// console.log(nombres);


// 5- Sort( funcion );: Ordena los valores en un arrelgo
// let numeros=[4,8,5,6,9,2,8,3,6];
//  numeros.sort();
//  console.log(numeros);


//6- splice(indice, numeros de posiciones a liminar, elemento o elementos a agregar);
// let nombres= ["Juan","Jose","Jorge","robert","alex","Julio"];
// //Elimina los elementos de las posiciones
// nombres.splice(1,3,"Lima","Cañete","Sanluis","Coca cola");
// //Agrega todos los valores que se le da, desde la posicion del primer elemento eliminado

// //Si quisiermos agregar al principio iria splice(0,0,valores);

// //Para Agregar al final
// // let nombres= ["Juan","Jose","Jorge","robert","alex","Julio"];
// // let largo=nombres.length;
// // nombres.splice(largo,0,"Lima","Cañete","Sanluis","Coca cola");

// console.log(nombres);



//7  Join(separadpor):  Crea un cadena de todo el string, pero nos da la opcion de poder separarla cada elemento que hemos juntado con un caracter palbara o numero
// let nombres= ["Juan","Jose","Jorge","robert","alex","Julio"];
// let resultado=nombres.join("  20  ");
// console.log(resultado);


// 8- slice(inicio, final);  ==>  extrae los valores de un array, extrae las posicioes dadas por la propiedad inicio hasta la propiedad final -1 , creando un nuevo array. Ojo no modifica el array original
// let nombres= ["Juan","Jose","Jorge","robert","alex","Julio"];
// let resultado=nombres.slice(2,5);//si pones 5 te da hasta la posicion 4
// console.log(resultado);

//******************   ITERACIONES CON ARRAYS==ARREGLOS ***********************

//9- Filter(funcion(  valor  ){   })
// -Itera todas las posiciones del array
// -la variable valor dentro de la funcion tomara el valor de cada una de las posiciones del arreglo
// -Si ya aprendiste sobre las funciones flechas puedes reempplzar la funcion normal por una de flecha.
let numeros= ["Juan","Jose","Jorge","robert","alex","Julio"];
// var num=0;
// numeros.filter(function(numero){
//     console.log(numero+"\n");
//     console.log(num);
//     num++;
// })


//Tambien podemos  agregar todos los valores a otra funcion
//K tomara el valor de cada posicion del arreglo numeros y la retornara dandola al nuevo arrego resultado;

//Con funcion normal
// let resultado=numeros.filter(function(k){
//     return k;
// });

//Con funcion flecha
// let resultado=numeros.filter(k=>k);

//Tambien se le puede colocar un filtro
//cada valor del arreglo que sea mayor que 4, k.lenght nos da el numeros de caracteres en un entero
let resultado=numeros.filter(k=>k.length>4);
console.log(resultado);