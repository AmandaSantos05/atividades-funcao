const numeros = [3, 4, 1, 15, 11, 7, 5];

const encontrandoMaior = (array) => {
    let maior = array[0];

    for (let i of array) {
        if (i > maior) {
            maior = i;
        }
    }

    console.log(maior);
}

encontrandoMaior(numeros);