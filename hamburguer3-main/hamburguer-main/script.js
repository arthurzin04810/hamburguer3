const lanches = [
  { id: "x_gaucho", nome: "🇨🇬​X-Gaúcho🇨🇬​ / preço: 29.99", preco: 27.99 },
  { id: "x-gaucho", nome: "🥬​X-Salada🥬​ / preço: 24.99", preco: 24.99 },
  { id: "x_pedrao", nome: "😋​X​-Pedrão da Casa🤩​​ / preço: 27.99", preco: 29.99 },
  { id: "x_bacon", nome: "🥓​X-Bacon defumado🥓​ / preço: 30.99", preco: 28.99 },
  { id: "x_frango", nome: "🍗​X-Frango🍗​ / preço: 24.99", preco: 24.99 },
  { id: "x_tudo", nome: "🍔​X-Tudo🍔​​ / preço: 27.99", preco: 27.99 }
];

const bebidas = [
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



// Preencher os selects com base nos vetores
function preencherOpcoes() {
  // 1) TRANSPORTE
  const  selectlanches= document.getElementById("lanches");
  for (let i = 0; i < lanches.length; i++) {
    const item = lanches[i];                 // pega o objeto atual do array
    const option = document.createElement("option"); // cria uma <option>
    option.value = item.id;                      // valor interno (ex.: "aviao")
    option.textContent = item.nome;              // texto visível (ex.: "Avião")
    selectlanches.appendChild(option);        // coloca no <select>
  }

  // 2) HOSPEDAGEM
  const selectbebidas = document.getElementById("bebidas");
  for (let i = 0; i < bebidas.length; i++) {
    const item = bebidas[i];
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nome;
    selectbebidas.appendChild(option);
  }
const selectpagamento = document.getElementById("pagamento");
  for (let i = 0; i < pagamento.length; i++) {
    const item = pagamento[i];
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nome;
    selectpagamento.appendChild(option);
  }




}

function procurarPorId(lista, idProcurado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === idProcurado) {
      return lista[i]; // devolve o objeto encontrado
    }
  }
  return null; // se não encontrou, devolve nulo
}
preencherOpcoes();


