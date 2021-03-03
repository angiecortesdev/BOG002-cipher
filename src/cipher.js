const cipher = {
    decode: (offset, string) => {
        if (!string)
            return '';
        const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        offset = (offset % 26 - 26) % 26;
        return string.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - offset) % 26]);
    },
    encode: (offset, string) => {
        const message = string.toUpperCase()
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        let encriptado = ''
        for (let i = 0; i < message.length; i++) {
            if (message[i] === ' ') {
                encriptado += ' '
            } else {
                for (let j = 0; j < alphabet.length; j++) {
                    if (alphabet[j] === message[i]) {
                        let posicion = j + offset
                        if (posicion >= alphabet.length) {
                            posicion = posicion % alphabet.length
                        }
                        encriptado += alphabet[posicion]
                    }
                }
            }
        }
        return encriptado
    }
};

export default cipher;