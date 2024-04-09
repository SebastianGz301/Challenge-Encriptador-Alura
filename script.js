var buttonEncriptar = document.querySelector(".btn-encriptar");
var buttonDesencriptar = document.querySelector(".btn-desencriptar");
var translateSection = document.querySelector(".translate-container");
var containerParrafo = document.querySelector(".container-parrafo");
var resultado = document.querySelector(".text-resultado");

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var boxText = recuperarTexto();
    resultado.textContent = encriptarTexto(boxText);

}

function desencriptar(){
    ocultarAdelante();
    var boxText = recuperarTexto();
    resultado.textContent = desencriptarTexto(boxText);

}



function recuperarTexto(){
    var boxText = document.querySelector(".box-text");
    return boxText.value;
}


function ocultarAdelante(){
    translateSection.classList.add("hide");
    containerParrafo.classList.add("hide");
}




function encriptarTexto(mensaje){
    var text = mensaje;
    var finalText = "";

    for( var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "ai"
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter"
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes"
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober"
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat"
        }
        else{
            finalText = finalText + text[i]
        }
    }
    return finalText;
}


function desencriptarTexto(mensaje){
    var text = mensaje;
    var finalText = "";


    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "a"
            i = i+1;
        }
        else if(text[i] == "e"){
            finalText = finalText + "e"
            i = i+4;
        }
        else if(text[i] == "i"){
            finalText = finalText + "i"
            i = i+3;
        }
        else if(text[i] == "o"){
            finalText = finalText + "o"
            i = i+3;
        }
        else if(text[i] == "u"){
            finalText = finalText + "u"
            i = i+3;
        }
        else{
            finalText = finalText + text[i];
        }
    }
    return finalText;
}


const btnCopiar = document.querySelector(".btn-copy");
    btnCopiar.addEventListener("click", copiar = () => {
        var content = document.querySelector(".text-resultado").textContent;
        navigator.clipboard.writeText(content);
        console.log("hola");
    });



document.querySelector('.box-text').addEventListener('click', function() {
    this.value = '';
});
    