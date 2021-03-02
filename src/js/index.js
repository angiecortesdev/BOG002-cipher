import cipher from '../cipher.js';

let message=document.getElementById('message');
message.addEventListener('keyup',function(){
    message.value
    cipher.encode(3,message.value)
    let encrypted=document.getElementById('encrypted')
    encrypted.style.backgroundColor='white'
    encrypted.style.fontWeight='bold'
    encrypted.textContent=cipher.encode(3,message.value)
});

