const numeros = [35, 12, 7, 10];

const somaTotal = (array) => {
    let soma = 0;
    for (let i of array) {
        soma += i;
    }
    console.log(soma)
}

somaTotal(numeros)