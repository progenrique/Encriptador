
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

var textoEncriptado 
const nuevoTexto = []
const varDesencriptar = []


const encriptar = ()=>{
    let texto = document.querySelector("[data-text-area]").value;
    const longitud = texto.length
    
    for (let i = 0; i <longitud; i++) {        
        if (texto[i] == "a"){
            nuevoTexto.push("ai")
            
        } else if (texto[i] == "e") {
           nuevoTexto.push("enter")
           
        }else if (texto[i] == "i") {
            nuevoTexto.push("ai")  

        }else if (texto[i] == "o") {
            nuevoTexto.push("ober") 

        }else if (texto[i] == "u") {
            nuevoTexto.push("ufat")   
        }        
        else{
            nuevoTexto.push(texto[i])
        }             
    }
     textoEncriptado = nuevoTexto.join("")
     
     console.log(textoEncriptado)
}


const desencriptar = () => {
    for (let i = 0; i < nuevoTexto.length; i++) {
        if(nuevoTexto[i] == "ai"){
            varDesencriptar.push("a")

        }else if(nuevoTexto[i] == "enter"){
            varDesencriptar.push("e")

        }else if(nuevoTexto[i] == "imes"){
            varDesencriptar.push("i") 

        }else if(nuevoTexto[i] == "ober"){
            varDesencriptar.push("o")

        }else if(nuevoTexto[i] == "ufat"){
            varDesencriptar.push("u")

        }else{
            varDesencriptar.push(nuevoTexto[i])
        }       
    }
    
    const textoDesencriptado =varDesencriptar.join("")
    
    console.log(textoDesencriptado)

}