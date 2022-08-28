const inputText = document.querySelector(".input-texto");
const textEnd = document.querySelector(".texto-end");

function btnEncrypt(){
    let textEncrypt = encryptText(inputText.value);
    textEnd.value = textEncrypt;
    textEnd.style.backgroundImage = "none";
    inputText.value = "";
}

function btnDescrypt(){
    let textEncrypt = decryptText(inputText.value);
    textEnd.value = textEncrypt;
    textEnd.style.backgroundImage = "none";
    inputText.value = "";
}

function encryptText(stringEncrypt) {

    let rulesEnc = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncrypt = stringEncrypt.toLowerCase();

    for (let i = 0; i < rulesEnc.length; i++){

        if (stringEncrypt.includes(rulesEnc[i] [0])) {
            stringEncrypt = stringEncrypt.replaceAll(rulesEnc[i][0], rulesEnc[i][1]);
        }

    }

    return  stringEncrypt;
}


function decryptText(stringEncrypt) {

    let rulesEnc = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncrypt = stringEncrypt.toLowerCase();

    for (let i = 0; i < rulesEnc.length; i++){

        if (stringEncrypt.includes(rulesEnc[i] [0])) {
            stringEncrypt = stringEncrypt.replaceAll(rulesEnc[i][1], rulesEnc[i][0]);
        }

    }

    return  stringEncrypt;
}

function btncopy() {
    textEnd.select();
    navigator.clipboard.writeText(textEnd.value);
}