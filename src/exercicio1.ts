interface Produto {
    nome: string;
    preco: number;
    emEstoque: boolean;
}

const meuProduto: Produto = {
    nome: "Notebook",
    preco: 5999,
    emEstoque: true
}

console.log("Produto cadastrado: ", meuProduto);