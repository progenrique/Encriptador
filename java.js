
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const contenedorDiv = document.querySelector("[data-contenedor]")
const contenedor = document.querySelector("[data-section-muñeco]")


 function mostrarTexto  (mensaje) { 
    
    const codigoMensaje = `<textarea cols="15" rows="14" class="textoMensaje"  data-mostrar-texto> ${mensaje} </textarea>                     
    <button type="button" onclick="copiar()" class="copiar"> Copiar </button>`

    contenedorDiv.remove()    

    contenedor.innerHTML=codigoMensaje
}


const mostrarTextoDesencriptado = (mensaje) =>{

    const codigoMensaje = `<textarea cols="15" rows="14" class="textoMensaje"  data-mostrar-texto> ${mensaje} </textarea>                     
        <h5 class="mensaje3">El texto se descodifico correctamente</h5>`

    contenedorDiv.remove()    

    contenedor.innerHTML=codigoMensaje

}


const copiar = () =>{
 const btnCopiar = document.querySelector(".copiar")
 const textArea = document.querySelector(".textoMensaje")

 textArea.focus()
 document.execCommand("selectAll")
 document.execCommand("copy")

 alert("texto copiado")
 
} 
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
     
     mostrarTexto(textoEncriptado)
   
}


const desencriptar = () => {
    console.log(nuevoTexto)
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
    
    mostrarTextoDesencriptado(textoDesencriptado)



}