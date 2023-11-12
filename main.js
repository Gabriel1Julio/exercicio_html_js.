let form_validacao = document.getElementById('form-validacao');

function validarNumero(numero1, numero2){
    
    n1 = Number(numero1);
    n2 = Number(numero2);

    if (n1 >= n2){
        return false
    } else {
        return true
    }
}

form_validacao.addEventListener('submit', function(e){
    e.preventDefault();

    const erro = document.querySelector('.error');
    const sucesso = document.querySelector('.success');

    let number1 = document.getElementById('number1');
    let number2 = document.getElementById('number2');

    const menssageSuccess = "Correto! o número " + number2.value + " é maior que o número " + number1.value;
    const menssageFail = "Incorreto! o número " + number2.value + " não é maior que o número " + number1.value;

    let validacao = validarNumero(number1.value, number2.value)
    if (validacao){
        sucesso.innerHTML = menssageSuccess;
        sucesso.style.display = 'block';
        erro.style.display = 'none';
    } else {
        erro.innerHTML = menssageFail;
        erro.style.display = 'block';
        sucesso.style.display = 'none';
    }
})

console.log(form_validacao);