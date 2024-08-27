function criptografar(){
    let texto = document.getElementById('texto_normal').value;
    let enviar = document.getElementById('texto_encriptado'); 
    
    enviar.value = executar_criptografia(texto);




}

function criptografa1(){
    
    let texto = document.getElementById('texto_normal');
    texto.value = executar_criptografia(texto.value);


}


function descriptografar(){
    let texto = document.getElementById('texto_normal').value;
    let enviar = document.getElementById('texto_encriptado'); 

    
    enviar.value = executar_descriptografia(texto);


}

function executar_criptografia(txt){
    let texto='';
    for(var i=0; i<txt.length; i++){

        texto+= (txt.charAt(i) == 'a') ? "ai" :
                (txt.charAt(i) == 'e') ? "enter" :
                (txt.charAt(i) == 'i') ? "imes" :
                (txt.charAt(i) == 'o') ? "ober" :
                (txt.charAt(i) == 'u') ? "ufat" : txt.charAt(i);

    }
    console.log("funcionando")
    return texto;

}

function executar_descriptografia(txt) {
    let texto = '';
    let i = 0;

    while (i < txt.length) {
        texto += (txt.substring(i, i + 2) === "ai") ? (i += 2, 'a') :
                 (txt.substring(i, i + 5) === "enter") ? (i += 5, 'e') :
                 (txt.substring(i, i + 4) === "imes") ? (i += 4, 'i') :
                 (txt.substring(i, i + 4) === "ober") ? (i += 4, 'o') :
                 (txt.substring(i, i + 4) === "ufat") ? (i += 4, 'u') :
                 txt.charAt(i++);
    }

    return texto;
}


/*
As "chaves" de criptografia que utilizaremos são:
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/