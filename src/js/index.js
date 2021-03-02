import cipher from '../cipher';

window.addEventListener("load", inicio, true);


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