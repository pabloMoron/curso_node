let nombre ='Pelusa';
console.log(nombre);

if(true){
  let  nombre='Otro'; 
  console.log(nombre);
}
//let limita los scopes de las variables.
//la palabra reservada var ya no se utiliza
console.log(nombre);

const nombre2='pablo'; //Si se sabe que la variable no va a cambiar se debe declarar como constante por cuestiones de performance
console.log(nombre2);

//nombre2 = 'otro nombre 2'; // las constantes no puede cambiar el valor