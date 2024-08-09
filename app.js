function calcular() {
    let entradaDaConta = document.getElementById('entrada').value

    let exibir = document.querySelector('h3');

    exibir.innerHTML = `O resultado da conta é: ${eval(entradaDaConta)}`
}