const mail = "Lauraaltamirano23@gmail.com";
const pass_comprador = "lau13983";


function  solicitarDatos(){

    let email = prompt("Ingrese su email");
    let pass = prompt ("Ingrese su contraseña");


    if (validarDatos (email,pass)){

        iniciarCarrito();


    }else{


        alert("Email o contraseña invalida");

    }

}



function validarDatos(email,pass){


    if (email ===  email && pass === pass_comprador ){


        return true ;

    }else {


        return false ;

    }

}

function iniciarCarrito(){


    let lista = "" ;

    let finalizar_carrito = false ;


    while (!finalizar_carrito){


        let cod = prompt("Ingrese codigo de producto");
        let producto = obtenerProducto(cod);


        if (producto){

            alert("producto agregado con exito :"+producto);
            lista += "\n"+producto;


        }else{

            if (cod === null){

                finalizar_carrito = true ;


            }else {


                alert("Ingrese un codigo de producto valido");
            
            }

        }

    }

    if (lista != ""){

        let resp = confirm ("Desea concretar la compra de :"+lista);
        if (resp){

            alert("Gracias por comprar en nuestra tienda online");


        }


    }

}

function obtenerProducto(cod){ 


    let producto  ;
    switch(cod){

        case "001" : 
                    producto = "Cartel lona front";
                    break;
        case "002" : 
                    producto = "Cartel backlight";
                    break;
        case "003" : 
                    producto = "Cartel tipo marquesina";
                    break;
        case "004" : 
                    producto = "Letras Corporeas de polyfan";
                    break;       
        case "005" : 
                    producto = "Letras Corporeas con led" ;
                    break;

        case "006" : 
                    producto = "Letras Corporeas de acero inoxidable" ;
                    break;
        case "007" : 
                    producto = "Vinilo de corte impreso";
                    break;
        case "008" : 
                    producto = "Vinilo microperforado";
                    break;                      
        

         default :
                    producto = false;           

    }


   return producto ;  



}




document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});




function consulta(nombre, celular, consulta) {
    this.nombre = nombre;
    this.celular = celular;
    this.consulta = consulta;
}

const consulta1 = new consulta("Laura, 3517707347, cuanto demora en hacerse 2 vinilos");
const consulta2 = new consulta ("Carina, 3516771957, realizan estructura de cartel");
const consulta3 = new consulta("Monica, 35166771965, las letras corporeas que tiempo de duracion tienen?");

alert("Ingresa tus datos y tu consulta");
 



class producto{
    constructor(nombre, precio){
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);
        this.vendido=false;
        
    }
}

const producto1 = new producto ("cartelFront", "25000");
const producto2 = new producto ("Vinilo", "7000");
const producto3 = new producto ("LetrasCorporeas", "30000");

console.log(producto.producto1);






let resultadoCompra= 0;

function sumar(producto1, producto2){
    resultadoCompra= producto1+producto2
}

function mostrar(mensaje){
    console.log(mensaje)
}

sumar(25000,30000);
mostrar(resultadoCompra);


