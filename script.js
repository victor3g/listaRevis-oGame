// Gerando o número aleatório entre 1 e 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    //Pegando os numeros do seletor
    function verificarNum() {
        const userGuess = parseInt(document.getElementById('numEscolhido').value);
        const message = document.getElementById('msg');
        const message2 = document.getElementById('msg2');

        if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
            message.textContent = 'Por favor, insira um número válido entre 1 e 100.';
            return;
        }

        // Verificando se está correto
        if (userGuess === randomNumber) {
            message.textContent = `Você Acertou`;
            message.style.backgroundColor = "green";
        } else {
            message.textContent = 'Você Errou';
            message.style.backgroundColor = "red";
        }

        if (userGuess === randomNumber) {
            message2.textContent = `Parabéns!`;
        } else if (userGuess < randomNumber) {
            message2.textContent = 'O valor correto é maior';
        } else {
            message2.textContent = 'O valor correto é menor';
        }
    }

    //Recarregar o jogo
    function resetGame(){
        location.reload();
    }