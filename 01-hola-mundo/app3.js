console.log('Inicio de programa'); // 1

setTimeout(() => { //5
    console.log('Primer timeout');
}, 3000);

setTimeout(() => { //3
    console.log('Segundo timeout');
}, 0);

setTimeout(() => {//4
    console.log('Tercer timeout');
}, 0);

console.log('Fin de programa'); //2


/*
La salida

Inicio de programa
Fin de programa
Segundo timeout
Tercer timeout
Primer timeout
*/