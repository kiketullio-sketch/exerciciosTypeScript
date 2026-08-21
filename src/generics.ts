function identity<T>(arg: T): T {
    return arg;
}
const resultado1 = identity<string>("Hello!");
const resultado2 = identity<number>(12345);

console.log(resultado1);
console.log(resultado2);