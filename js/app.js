const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".mensaje");
const imagen = document.querySelector(".muñeco__imagen");
const botonCopiar = document.querySelector(".boton__copiar");
const textoInicial = document.querySelectorAll(".texto-inicial");   

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;

    // ocultar imagen y mostrar el resultado
    imagen.classList.add("oculto");
    mensaje.classList.remove("oculto");
    botonCopiar.classList.remove("oculto");

    // Ocultar el texto inicial
    textoInicial.forEach(element => element.classList.add("oculto"));    

}

function encriptar(texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringEncriptada = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    return stringEncriptada;
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    //alert("Texto copiado al portapapeles");
}


function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;

    // Mostrar el mensaje y el botón de copiar, ocultar la imagen
    imagen.classList.add("oculto");
    mensaje.classList.remove("oculto");
    botonCopiar.classList.remove("oculto");

}

function desencriptar(texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringDesencriptado = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
    return stringDesencriptado;
}

