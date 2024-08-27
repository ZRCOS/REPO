document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt');
    const decryptBtn = document.getElementById('decrypt');
    const copyInputBtn = document.getElementById('copy-input');
    const pasteInputBtn = document.getElementById('paste-input');
    const copyOutputBtn = document.getElementById('copy-output');

    function validateInput(input) {
        return /^[a-z\s]*$/.test(input);
    }

    function encrypt(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function decrypt(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    encryptBtn.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        if (validateInput(text)) {
            outputText.value = encrypt(text);
        } else {
            alert('Por favor, ingrese solo letras minúsculas sin caracteres especiales.');
        }
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        if (validateInput(text)) {
            outputText.value = decrypt(text);
        } else {
            alert('Por favor, ingrese solo letras minúsculas sin caracteres especiales.');
        }
    });

    copyInputBtn.addEventListener('click', () => {
        inputText.select();
        document.execCommand('copy');
    });

    pasteInputBtn.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            inputText.value = text;
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    });

    copyOutputBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
    });

    inputText.addEventListener('input', () => {
        if (!validateInput(inputText.value)) {
            inputText.value = inputText.value.replace(/[^a-z\s]/g, '');
        }
    });
});
