class ValorNaoSuportado extends Error {
  constructor(contentType) {
    super(`O Tipo de conteúdo '${contentType}' não é suportado.`);
    this.name = "ValorNaoSuportado";
    this.idErro = 3;
  }
}

module.exports = ValorNaoSuportado;
