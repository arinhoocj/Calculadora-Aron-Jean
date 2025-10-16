// script.js
let display = document.getElementById('display');

// Adiciona valores ao visor
function appendValue(value) {
    display.value += value;
}

// Limpa o visor
function clearDisplay() {
    display.value = '';
}

// Apaga o último caractere
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calcula o resultado da expressão
function calculate() {
    try {
        // Verificar se a expressão é válida
        let result = eval(display.value);
        
        // Verificação de erros, como divisão por zero
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            throw new Error("Resultado inválido");
        }

        // Atualiza o visor com o resultado
        display.value = result;
    } catch (e) {
        // Em caso de erro (ex: operação inválida), mostra "Erro"
        display.value = 'Erro';
    }
}
