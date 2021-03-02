const cipher = {
    decode: (offset, string) => {
        if (!string)
            return '';
        const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        offset = (offset % 26 - 26) % 26;
        return string.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - offset) % 26]);
    }
};

export default cipher;