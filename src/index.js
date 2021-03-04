import cipher from './cipher.js';

window.addEventListener("load", inicio, true);

let message=document.getElementById('message');
message.addEventListener('keyup',function(){
    message.value
    cipher.encode(3,message.value)
    let encrypted=document.getElementById('encrypted')
    encrypted.style.backgroundColor='white'
    encrypted.style.fontWeight='bold'
    encrypted.textContent=cipher.encode(3,message.value)
});

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function() {
        // eslint-disable-next-line no-undef
        mensaje.value = mensaje.value.toUpperCase();
    }, true);

    document.getElementById("descifrar").addEventListener("click", function() {
        let string = document.getElementById("mensaje").value;
        let offset = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cipher.decode(offset, string);
    }, true);
}