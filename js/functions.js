const items = [
  {
    id: 0,
    nome: "camiseta",
    img: "../images/image.jpg",
    quantidade: 0
  },
]

inicializarLoja = () => {
  var containerProdutos = document.getElementById("produtos");
  items.map((val) => {
    containerProdutos.innerHTML += '<div class="produto-single"><img =src="'+ val.img +'" /><p>'+ val.nome +'</p><a key="'+ val.id +'" href="#">Adicionar ao carrinho!</a></div>';
  })
}

inicializarLoja();
