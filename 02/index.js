const alturaEmCm = 200;

const peneiraDeVolei = (altura) => {
    let mensagem = 'APROVADO';

    if (altura < 180) {
        mensagem = 'REPROVADO';
    }

    console.log(mensagem);
}

peneiraDeVolei(alturaEmCm);