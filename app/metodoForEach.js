const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponivels = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros){
    elementoComValorTotalDeLivrosDisponivels.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
      let disponibilidade = verficicarDisponibilidadeDoLivro(livro)
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    });
}

function verficicarDisponibilidadeDoLivro(livro) {
 if (livro.quantidade > 0) {
   return 'livro_imagens'
  }else {
   return 'livro_imagens indisponivel'
  }
}