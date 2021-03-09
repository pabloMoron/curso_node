// const callback = () =>console.log("Soy el callback");
// setTimeout(callback, 1500);


const GetUsuario=(id,callback2 )=>{

    const usuario = {
        id, // En ECS6 es redundante poner id:id, entonces se deja solo
        nombre: 'Pelusa'
    }

    setTimeout(()=>callback2(usuario), 1500);
}

GetUsuario(10, (resultado)=>{
    console.log(resultado.id);
    console.log(resultado.nombre);
});