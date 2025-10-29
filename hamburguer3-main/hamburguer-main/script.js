const lanches = [
  { id: "x_gaucho", nome: "🇨🇬​X-Gaúcho🇨🇬​ / preço: 29.99", preco: 29.99 },
  { id: "x-gaucho", nome: "🥬​X-Salada🥬​ / preço: 24.99", preco: 24.99 },
  { id: "x_pedrao", nome: "​🫃🏻​X​-Pedrão​🫃🏻​​ / preço: 27.99", preco: 27.99 },
  { id: "x_bacon", nome: "🥓​X-Bacon defumado🥓​ / preço: 30.99", preco: 30.99 },
  { id: "x_frango", nome: "🍗​X-Frango🍗​ / preço: 24.99", preco: 24.99 },
  { id: "x_tudo", nome: "🍔​X-Tudo🍔​​ / preço: 27.99", preco: 27.99 }
];

const bebidas = [
  { id: "jarra_uva", nome: "🍇​jarra de uva🍇​ / preço: 19.99", preco: 19.99 },
  { id: "jarra_maracuja", nome: "🍹​jarra de maracujá🍹​ / preço 21.99", preco: 21.99 },
  { id: "heineken", nome: "🍺​Heineken🍺​ / preço 19.99", preco: 19.99 },
  { id: "brahma", nome: "🍺​Brahma🍺​ / preço 18.99", preco: 18.99 }


 

];




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

function gerarRelatorio() {
    const emailclienteoId = document.getElementById("e-mail_cliente");
    const endereçoId = document.getElementById("endereço").value;   
    const numeroId = document.getElementById("numero").value;
    const enderecoId = document.getElementById("endereco").value;
    const lanchesId = document.getElementById("lanches").value;
    const bebidasId = document.getElementById("bebidas").value;

    var cardapioo = procurarPorId(cardapio_loja, cardapioId);
    var cardapioww = procurarPorId(cardapio_loja_2, cardapioId_2);
    var tamanhoo = procurarPorId(tamanho_loja, tamanhoId);
    var entregaa = procurarPorId(entrega_loja, entregaId);
    var acompanhantee = procurarPorId(acompanhante_loja, acompanhanteId);

    const total = (cardapioo.preco * qtdCardapio) + 
                  (cardapioww.preco * qtdCardapio2) + 
                  (acompanhantee.preco * qtdAcompanhante) +
                  tamanhoo.preco +  
                  entregaa.preco;

    const relatorioHTML =`
       <h2>Relatório do Pedido</h2>
       <p><strong>Comprador: </strong> ${nomeId} </p>
       <p><strong>CPF: </strong> ${cpfId} </p>
       <p><strong>Endereço: </strong> ${enderecoId} </p>
       <p><strong>Pastel: </strong> ${cardapioId} x${qtdCardapio} = R$ ${(cardapioo.preco * qtdCardapio).toFixed(2)}  </p>
       <p><strong>Outro Pastel: </strong> ${cardapioId_2} x${qtdCardapio2} = R$ ${(cardapioww.preco * qtdCardapio2).toFixed(2)}  </p>
       <p><strong>Acompanhante: </strong> ${acompanhanteId} x${qtdAcompanhante} = R$ ${(acompanhantee.preco * qtdAcompanhante).toFixed(2)}  </p>
       <p><strong>Tamanho: </strong> ${tamanhoId} = R$ ${tamanhoo.preco.toFixed(2)} </p>
       <p><strong>Modo de Recebimento: </strong> ${entregaId} = R$ ${entregaa.preco.toFixed(2)} </p>
       <p><strong>Preço Total: </strong> R$ ${total.toFixed(2)} </p>
       <p><strong>Modo de Pagamento: </strong> ${PagamentoId}</p>
       <p>Obrigado por usar o relatório da Lá Casa de Pastel!</p>
    `;
    
    document.getElementById("relatorio").innerHTML = relatorioHTML;
}
