const nomeProduto: string = "Desktop";
const precoProduto: number = 4499;
const emEstoque: boolean = true;


const categorias: string[] = ["Eletronicos", "Informatica", "Eletrodomesticos"];


const coordenada: [number, number] = [-25.0995, -50.1583];


enum statusPedido {
    Pendente = "Pendente",
    Processando = "Processando",
    Entregue = "Entregue",
    Cancelado = "Cancelado",

}

const statusAtual: statusPedido = statusPedido.Processando
function formatarProduto(nome: String, preco: Number) {
    return `O produto ${nome} custa ${preco}`;
}

console.log(formatarProduto(nomeProduto, precoProduto));