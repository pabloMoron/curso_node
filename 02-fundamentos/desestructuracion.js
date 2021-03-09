const deadpool={
    nombre:'Wade',
    apellido:'Winston',
    poder:'Regeneracion',
    edad:50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//let {nombre, apellido, poder} = deadpool; //Es mucho mas facil hacer esto que declarar variables para cada una de ellas
//console.log(nombre, apellido, poder); 

//Se puede agregar otras propiedades, si no las seteo, se establecen en undefined
//Si el objeto deadpool tiene establecido el valor edad lo establece con ese valor
let {nombre, apellido, poder, edad=0} = deadpool; 
console.log(nombre, apellido, poder, edad);

//Desestructurar arregos
const Heros=['Batman', 'Superman', 'ABC']
const [h1, h2, h3]= Heros; //Aqui van [], no {}
//Si quiero una posicion especifica no asigno nada a las otras
console.log(h1, h2, h3);
const[,,h4]=Heros;
console.log(h4);