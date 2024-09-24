let cantidad = document.getElementById("cantidad");
// document.getElementById = conecta con el Id que se encuentra en el HTML
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

let mensaje = document.getElementById("mensaje");

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// let texto = "texto";
// console.log(typeof cantidad);

function generar(){
    let numeroDigitado = parseInt (cantidad.value);
    // console.log(numeroDigitado);
    
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return; 
        // detenemos la ejecución si la cantidad es menor a 8
    }

    let password = "";
    for(let i = 0; i < numeroDigitado; i++){
    
    let caracterAleatorio = cadenaCaracteres [Math.floor (Math.random() * cadenaCaracteres.length)];
    console.log(caracterAleatorio);

    password+=caracterAleatorio;

    }

   contrasena.value = password;

    // validar la contraseña generada
    validarContrasena(password);
}

function validarContrasena(contrasena) {
    const tieneNumero = /\d/.test(contrasena);
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);
    const esLarga = contrasena.length >= 8;

    if (tieneNumero && tieneMayuscula && tieneMinuscula && tieneCaracterEspecial && esLarga) {
        mensaje.textContent = 'La contraseña es fuerte!';
        mensaje.style.color = '#9af00a';
    } else {
        mensaje.textContent = 'La contraseña es débil. Debe contener al menos: \n- Un número \n- Una letra mayúscula \n- Una letra minúscula \n- Un caracter especial \n- Mínimo 8 caracteres';
        mensaje.style.color = '#fc0727';
    }
}

document.getElementById("limpiar").addEventListener("click", function(){
    cantidad.value = "";
    contrasena.value = "";
    mensaje.textContent = ""; // Limpia mensaje al limpiar
});

boton.addEventListener("click", generar);












