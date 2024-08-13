const ingresoTexto = document.querySelector(".ingreso_texto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");
const botonCopiar = document.getElementById("botonCopiar");
const muñeco = document.querySelector(".muñeco");
const textoInfo = document.querySelector(".texto_info");
const right = document.getElementById("right");


let reemplazar = [
["e", "enter"],
["i", "imes"],
["a", "ai"],
["o", "ober"],
["u", "ufat"],
]

// function reajuste(condicion)
const reajuste = (condicion) => {
    mensajeFinal.innerHTML = condicion;
    muñeco.classList.add("oculto");
    textoInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    botonDesencriptar.classList.add("transparente");
    ingresoTexto.value = "";
}

const reset = () => {
    muñeco.classList.remove("oculto");
    textoInfo.style.display = "block";
    botonCopiar.style.display = "none";
    
    
    mensajeFinal.innerHTML = "";
    ingresoTexto.value = "";
    ingresoTexto.focus();

    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    botonDesencriptar.classList.remove("transparente");
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    
    if (texto != "") {
        function encriptar(textoUsuario) {
            for (let i = 0; i < reemplazar.length; i++) {
                if (textoUsuario.includes(reemplazar[i][0])) {
                    textoUsuario = textoUsuario.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                }            
            }
            return textoUsuario;
        }
        reajuste(encriptar(texto));
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }   
})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    
    if (texto != "") {
        function desencriptar(textoUsuario) {
            for (let i = 0; i < reemplazar.length; i++) {
                if (textoUsuario.includes(reemplazar[i][1])) {
                    textoUsuario = textoUsuario.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                }            
            }
            return textoUsuario;
        }
        reajuste(desencriptar(texto));
    } else {
        alert("Ingrese texto a desencriptar");
        reset();
    }    
})


botonCopiar.addEventListener("click", () => {
    
    // navigator.clipboard.writeText(mensajeFinal.value);
    mensajeFinal.select();
    document.execCommand('copy');
    alert("Mensaje copiado");
   
    reset();
})
