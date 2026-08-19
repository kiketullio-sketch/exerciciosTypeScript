interface IUser {
    name: String;
    id: Number;
    email: String;
    isActive: boolean;
}

interface IProduct {
    id: Number;
    price: Number;
    name: String;
    inStock: boolean;
    categories: string[];
}

type UserRole = 'admin' | 'user';

interface IAdminUser extends IUser {
    role: UserRole;
}

const admin: IAdminUser = {
    name: "Caique",
    id: 1,
    email: "kiketullio@gmail.com",
    isActive: true,
    role: 'admin',
}

const user: IAdminUser = {
    name: "Filipe",
    id: 2,
    email: "filipe@gmail.com",
    isActive: true,
    role: 'user',
}

const produto: IProduct = {
    id: 1,
    price: 1999,
    name: "Desktop",
    inStock: true,
    categories: ["Informatica", "Computadores"],
}
function infAdmin(admin: IAdminUser) {
  return `Informações sobre o admin: ${admin.name}, email: ${admin.email}, cargo: ${admin.role}`;
}

console.log(infAdmin(admin));

function infUser(user: IAdminUser) {
    return `Informacoes sobre o user: ${user.name}, email ${user.email}, cargo: ${user.role}`;
}

console.log(infUser(user));


function infProduto(produto: IProduct) {
    return `Informacoes sobre o produto: ${produto.name}, preco ${produto.price}, estoque ${produto.inStock}, categorias ${produto.categories}`;
}

console.log(infProduto(produto));