function alterarStatus(id) {
    let gameCLicado = document.getElementById(`game-${id}`);
    let imagem = gameCLicado.querySelector('.dashboard__item__img');
    let botao = gameCLicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm("Tem certeza que deseja devolver este jogo?")) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        if (confirm("Tem certeza que deseja alugar este jogo?")) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
        }
    }
}
