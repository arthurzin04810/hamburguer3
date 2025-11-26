const lanches = [
  { id: "nada", nome: " Nada / preço: 0.00", preco: 0.00},
  { id: "x_gaucho", nome: "🇨🇬​X-Gaúcho🇨🇬​ / preço: 29.99", preco: 29.99 },
  { id: "x-gaucho", nome: "🥬​X-Salada🥬​ / preço: 24.99", preco: 24.99 },
  { id: "x_pedrao", nome: "😋​X​-Pedrão da Casa🤩​​ / preço: 27.99", preco: 27.99 },
  { id: "x_bacon", nome: "🥓​X-Bacon defumado🥓​ / preço: 30.99", preco: 30.99 },
  { id: "x_frango", nome: "🍗​X-Frango🍗​ / preço: 24.99", preco: 24.99 },
  { id: "x_tudo", nome: "🍔​X-Tudo🍔​​ / preço: 27.99", preco: 27.99 },
  { id: "batatafrita", nome: "💦​🍟​Batata-frita ao molho🍟💦​​ / preço: 19.99", preco: 19.99 }
];

const bebidas = [
  { id: "nada", nome: " Nada / preço: 0.00", preco: 0.00},
  { id: "jarra_uva", nome: "🍇​jarra de uva🍇​ / preço: 19.99", preco: 19.99 },
  { id: "jarra_maracuja", nome: "🍹​jarra de maracujá🍹​ / preço 21.99", preco: 21.99 },
  { id: "heineken", nome: "🍺​Heineken🍺​ / preço 19.99", preco: 19.99 },
  { id: "brahma", nome: "🍺​Brahma🍺​ / preço 18.99", preco: 18.99 }
];

const pagamento = [

{ id: "dinheiro", nome: "Dinheiro"},
{ id: "cartao_de_credito", nome: "Cartão de crédito"},
{ id: "cartao_de_debito", nome: "Cartão de débito"},
{ id: "pix", nome: "Pix"},

]


function preencherOpcoes() {
  const selectLanches = document.getElementById("lanches");
  const selectBebidas = document.getElementById("bebidas");
  const selectPagamento = document.getElementById("pagamento");

  lanches.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nome;
    selectLanches.appendChild(option);
  });

  bebidas.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nome;
    selectBebidas.appendChild(option);
  });

  pagamento.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nome;
    selectPagamento.appendChild(option);
  });
}

function procurarPorId(lista, id) {
  return lista.find(item => item.id === id) || null;
}

function gerarRelatorio() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const endereco = document.getElementById("endereco").value;
  const numero = document.getElementById("numero").value;

  const idLanche = document.getElementById("lanches").value;
  const idBebida = document.getElementById("bebidas").value;
  const qtdLanches = Number(document.getElementById("numero_lanches").value);
  const qtdBebidas = Number(document.getElementById("numero_bebidas").value);
  const formaPag = document.getElementById("pagamento").value;

  const lanche = procurarPorId(lanches, idLanche);
  const bebida = procurarPorId(bebidas, idBebida);
  const pagamentoEscolhido = procurarPorId(pagamento, formaPag);

  const totalLanches = lanche.preco * qtdLanches;
  const totalBebidas = bebida.preco * qtdBebidas;
  const total = totalLanches + totalBebidas;

  const relatorio = `
    <p><b>Nome:</b> ${nome}</p>
    <p><b>E-mail:</b> ${email}</p>
    <p><b>Endereço:</b> ${endereco}</p>
    <p><b>Telefone:</b> ${numero}</p>
    <hr>
    <p><b>Lanche:</b> ${lanche.nome}</p>
    <p><b>Quantidade:</b> ${qtdLanches}</p>
    <p><b>Total Lanches:</b> R$ ${totalLanches.toFixed(2)}</p>
    <hr>
    <p><b>Bebida:</b> ${bebida.nome}</p>
    <p><b>Quantidade:</b> ${qtdBebidas}</p>
    <p><b>Total Bebidas:</b> R$ ${totalBebidas.toFixed(2)}</p>
    <hr>
    <p><b>Forma de pagamento:</b> ${pagamentoEscolhido.nome}</p>
    <h3>Total do Pedido: 💰 R$ ${total.toFixed(2)}</h3>
  `;

  document.getElementById("relatorio").innerHTML = relatorio;
}

window.addEventListener("DOMContentLoaded", () => {
  preencherOpcoes();
  document.getElementById("gerarRelatorio").addEventListener("click", gerarRelatorio);
});



