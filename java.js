


function validarTexto(){
    var textoRevisar = document.querySelector(".ingresarTexto").value;
    let validador = textoRevisar.match(/[^a-z\s]/g) //match revisa en toda la cadena de datos si hay letras mayusculas si quiero que me las muestre tengo que poner una g (/["A-Z"]/g) si no encuentra ninguna el valor es null si quiero que identifique las minusculas solo cambio la a y la z a minusculas
    
    if (validador != null) {
        alert("Solo son permitidas letras minúsculas y sin acentos ni caracteres especiales")
        location.reload(); // funcion para recargar la pagina
                
     }
console.log(validador)

}

// la funcion validarTexto solo revisa si hay mayusculas esa funcion la meti en la funcion encriptar con un if estudiar porque si es true hace funcionar el mensaje de letras mayusculas 

function encriptar(){
    if (!validarTexto()) {
        var texto = document.querySelector(".ingresarTexto").value;
        var textoExport;
        var nuevoTexto = [];
        
        for (let i = 0; i < texto.length; i++) {
                if(texto[i] == "a"){
                nuevoTexto.push("ai")
                              
                    
                } else if(texto[i] == "e"){
                    nuevoTexto.push("enter")
                    
                } else if(texto[i] == "i"){
                    nuevoTexto.push("imes")
                    
                } else if(texto[i] == "o"){
                    nuevoTexto.push("ober")
                    
                } else if(texto[i] == "u"){
                    nuevoTexto.push("ufat")
                    
                } else{
                    nuevoTexto.push(texto[i]);
                    console.log(nuevoTexto);
                    
                }
                
                
                
        }
        textoExport = nuevoTexto.join(""); //convierte un array en un string
        console.log(textoExport);
        

        let etiqueta = document.createElement("p") //crear una etiqueta
                let lugarNuevoTexto = document.querySelector(".nuevoTexto") //la ubicacion donde se pondra la etiqueta
                lugarNuevoTexto.append(etiqueta);//añade una etiqueta al lugar de la clase
                etiqueta.append(textoExport); //añadir el texto a la etiqueta
                return textoExport
        
    }
    

   
}


function desencriptar(){          
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    var texto = document.querySelector(".ingresarTexto").value;
    if (!validarTexto()){        
        for (i=0; i<5; i++){
        texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
         }         
    }       
    console.log(texto) 
}

function copiar(){
    var texCopiar = document.querySelector(".texmuñeco").value
    navigator.clipboard.writeText(texCopiar);
}

function devolverTexto(){
    //document.querySelector(".imgmuñeco") = encriptar();
}





/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


