function getData<T>(items: T[]): T[] {
    return items;
}
interface IUser {
    name: string,
    id: number,
}

const array1 = getData<string>(["Teste1", "Teste2", "Teste3"]);
const array2 = getData<number>([1,2,3,4,5]);
const array3: IUser[] = getData<IUser>([{name: "Caique",id: 1},
    {name: "Filipe", id: 2}
]);

console.log(array1);
console.log(array2);
console.log(array3);


interface IProduct {
    name: string,
    id: number,
}
function getById<T extends {id: number}>(items: T[], id: number): T | undefined {
    return items.find(items => items.id == id);
}

const array4: IUser | undefined = getById<IUser>([{
    name: "Maria",
    id: 1
},
{
    name: "Joao",
    id: 2
},
{
    name: "Gabriel",
    id: 3
}], 3);


const array5: IProduct | undefined = getById<IProduct> ([
    {
        name: "Televisao",
        id: 10
    },
    {
        name: "Desktop",
        id: 20
    },
    {
        name: "Console",
        id: 30
    }
], 30);



console.log(array4);

console.log(array5);

