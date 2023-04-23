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

// ------------------------------------------------
// 👉TS: Interfaces (Merge vs Type alias)
// Note: Merging can be worked with interfaces but can not be used with type alias.
// type Book = {
//     name: string;
//     price: number;
// }

// type Book = {
//     size: number;
// }

// Note: Interfaces are made for work with objects.
// type SanitizedString = string;
// type EvenNumber = number;

// interface SanitizedString extends string {

// }
// ------------------------------------------------

// ------------------------------------------------
// 👉TS: Interfaces (Unions)
// type ID = number | string;

// // Narrowing
// function printId(id: ID){
//     if(typeof id === 'string'){
//         console.log(id.toUpperCase());
//     }else{
//         console.log(id);
//     }
// }
// printId('1');

// Example 2
// function getFirstThree(x: string | number[]){
//     return x.slice(0, 3);
// }

// console.log(getFirstThree('hello'));
// console.log(getFirstThree([1, 2, 3, 4, 5]));
// ------------------------------------------------

// ------------------------------------------------
// 👉TS: Interfaces (Generics)
// function logString(arg: string){
//     console.log(arg);
//     return arg;
// }
// logString('Logged in');

// function logNumber(arg: number){
//     console.log(arg);
//     return arg;
// }
// logNumber(22);

// function logArray(arg: any[]){
//     console.log(arg);
//     return arg;
// }
// logArray([2, 3]);

// function logAnything(arg: any){
//     console.log(arg);
//     return arg;
// }
// logAnything([2, 3]);

// function logAny<T>(arg: T): T{
//     console.log(arg);
//     return arg;
// }
// logAny([2, 3]);
// logAny(['hello']);

// Example 2

// interface HasAge {
//     age: number;
// }

// // function getOldest(people: HasAge[]): HasAge{
// //     return people.sort((a, b) => b.age - a.age)[0];
// // }

// const people:HasAge[] = [{age: 30}, {age: 40}, {age: 10}];
// getOldest(people).age;

// function getOldest<T extends HasAge>(people: T[]): T{
//     return people.sort((a, b) => b.age - a.age)[0];
// }

// interface Player {
//     name: string;
//     age: number;
// }

// const players = [{name: 'John', age: 30}, {name: 'Jane', age: 35}, {name: 'Joe', age: 15}];
// getOldest(players).age;

// // Assertion
// // const person = getOldest(players) as Player;

// // Generics
// const person = getOldest(players);
// person.name

// Example 3

// interface IPost {
//     title: string;
//     id: number;
//     description: string;
// }

// interface IUser {
//     id: number;
//     name: string;
//     age: number;
// }

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com/${path}`);
//     return response.json();
// }

// const fetchUserData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com/${path}`);
//     return response.json();
// }

// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//     const response = await fetch(`http://example.com/${path}`);
//     return response.json();
// }

// (async()=> {
//     const posts = await fetchPostData('/posts');
//     posts[0].description;

//     const users = await fetchUserData('/users');
//     users[0].name;

//     const post = await fetchData<IPost[]>('/posts');
//     post[0].description;

//     const user = await fetchData<IUser[]>('/users');
//     user[0].name;
// })();