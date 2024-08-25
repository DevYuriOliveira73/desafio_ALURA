function criptografar(){
    let texto = document.getElementById('texto_normal').value;
    let enviar = document.getElementById('texto_encriptado'); 
    console.log(texto)
    enviar.value = executar_criptografia(texto)




}

function criptografa1(){
    
    let texto = document.getElementById('texto_normal');
    texto.value = executar_criptografia(texto.value);


}


function descriptografar(){
    let texto = document.getElementById('texto_encriptado').value;
    let enviar = document.getElementById('texto_normal');

    enviar.value = texto


}
//método charAt() conseguimos acessar um caractere de uma string
//substr()
//replace()     será util
//meu nome e yuri
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

function executar_descriptografia(){
    
}

/*
As "chaves" de criptografia que utilizaremos são:
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/