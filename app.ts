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

// ------------------------------------------------
// 👉TS: Interfaces
// interface Transaction {
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }

// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transactions: Transaction[];
// }

// const transaction1: Transaction = {
//     payerAccountNumber: 232445533,
//     payeeAccountNumber: 342334234
// }

// const bankAccount: BankAccount = {
//     accountNumber: 124354553,
//     accountHolder: "Amit Sharma",
//     balance: 2000,
//     isActive: true,
//     transactions: [transaction1]
// }
// ------------------------------------------------

// ------------------------------------------------
// 👉TS: Interfaces (Extend)
// interface Book {
//     name: string;
//     price: number;
// }

// interface EBook extends Book {
//     // name: string;
//     // price: number;
//     fileSize: number;
//     format: string;
// }

// interface AudioBook extends EBook {
//     // name: string;
//     // price: number;
//     // fileSize: number;
//     // format: string;
//     duration: number;
// }

// const book: AudioBook = {
//     name: 'Atomic Habits',
//     price: 1200,
//     fileSize: 300,
//     format: 'pdf',
//     duration: 4
// }
// ------------------------------------------------

// ------------------------------------------------
// 👉TS: Interfaces (Merge)
// interface Book {
//     name: string;
//     price: number;
// }
// interface Book {
//     size: number;
// }

// const book: Book = {
//     name: 'Atomic Habbits',
//     price: 1200,
//     size: 45
// }
// ------------------------------------------------