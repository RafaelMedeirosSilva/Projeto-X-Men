const personagens = (document.querySelectorAll('.personagem'));

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        //Verificar se já existe um personagem seleciondo, se sim, devemos remover a seleção dele
        removerSelecaoDoPersongem();

        personagem.classList.add('selecionado');

        //Pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSeleciondo(personagem);

        //alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        //alterar a descrico do personagem grande  
        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSeleciondo(personagem) {
    
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersongem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}