//Função que verifica se um número é ímpar ou par
function verificarParImpar(numero){
    function verificarParImpar(numero){
    if (numero % 2===0){
        return `O número ${numero} é par`;
    } else{
        return `O número ${numero} é ímpar`;
    }
}
}

//Função que calcula fatorial de um número
function calcularFatorial(n){
    let fatorial = 1;
    for (let i = 1; i <= n; i++){
        fatorial *= i;
    }
    return fatorial;
}

//Função para encontrar o maior número em um array
function encontrarMaiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}