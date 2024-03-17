// Após salvar a opinião (dentro do evento de submit do formulário)
function displaySuccessMessage() {
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.style.display = 'block'; // Exibe a mensagem de sucesso
}

const opiniaoForm = document.getElementById('opiniao-form');
opiniaoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const opiniao = document.getElementById('opiniao-text').value;

    // Salve a opinião (pode ser no localStorage ou enviar para um servidor)
    // Exiba a opinião na seção de opiniões anteriores
    const opiniaoElement = document.createElement('p');
    opiniaoElement.textContent = opiniao;
    document.getElementById('opinioes-anteriores').appendChild(opiniaoElement);

    // Limpe o campo de texto
    document.getElementById('opiniao-text').value = '';

    // Exiba a mensagem de sucesso
    displaySuccessMessage();
});