// ------------------------------------------------
// 👉JS
// let num1 = "1";
// function calculate(num1, num2) {
//     return num1 + num2;
// }
// console.log(calculate(num1, 3));

// 👉TS
// let num1: number = 1;
// function calculate(num1: number, num2: number) {
//     return num1 + num2;
// }
// console.log(calculate(num1, 3));
// ------------------------------------------------


// ------------------------------------------------
// 👉JS
// function getTotal(numbers) {
//     return number.reduce((acc, item) => {
//         return acc + item;
//     }, 0)
// }
// console.log(getTotal([3, 3, 2]));

// 👉TS
// function getTotal(numbers: Array<number>) {
//     return numbers.reduce((acc, item) => {
//         return acc + item;
//     }, 0)
// }
// console.log(getTotal([3, 3, 2]));
// ------------------------------------------------

// ------------------------------------------------
// 👉JS
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 'Professor'
// }
// console.log(user.firstName);

// 👉TS
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 'Professor'
// }
// console.log(user.firstName);
// ------------------------------------------------

// ------------------------------------------------
// 👉TS: Type alias or Custom Types
// type User = {
//     name: string;
//     id: number | string;
//     age?: number; // (optional)
// }

// const user: User = {
//     name: "Amit",
//     id: 1,
//     age: 23
// }

// function login(userData: User): User {
//     return userData;
// }

// console.log(login({name: "A", id: "2", age: 23}))
// ------------------------------------------------