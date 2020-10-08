// An open-source typed, synthactic superset of Javascript, developed by Microsoft.
// commplies to readable Javascript
// comes in three parts: Languages, Language Server and Compiler
// work seamlessly with Babel 7

// ...but why add types
// Encode constraints andd assumptions, as part of developer intent
// Catch common mistakes(i.e. incomplete refectors)
// move some runtime errors to compile time
// Provide your consumer (including you) with great DX

// In this class, we'll learn about...
// Adding type information to varibles, functions and classes
// configuring the compiler
// A practical strategy for incrementally converting Js to Ts
// Paramerterizing interfaces and type aliases with generics
// Conditional, mapped adn branded types
// Ts Compiler API basics

// noImplicitAny: true means provide implicit any type
let a: string[] = ["h"];

console.log(a);

// !tuple
type Vetor2D = [number, number];
const vector: Vetor2D = [0, 4];

// !unknown instead of any
const v2: unknown = 0;

if (typeof v2 === "number") v2 + 0;

// !never use never type when function never return
function throwErrors(statusCode: number): never {
  if (statusCode === 0) {
    throw new Error("Status code Zero");
  }
  throw Error("Unknown status code");
}

const audioEl = document.querySelector("audio");

// strictNullCheks: true
audioEl?.play();

// it definitely be on web page
audioEl!.play();

// ! Immutables are so hip right now
// Readonly
// function useReducer(user: Readonly<User>, action: string):User {
//   if(action === 'clearName') {
//     return { ...user, name: ''}
//   }
//   return user
// }

// function useReducer(users: ReadonlyArray<User>, action: string):User {
//   if(action === 'addUser') {
//     return [...users, {id: 0, name: ''}]
//   }
//   return users;
// }

// ! if you have so this huge JSON responce use jsonascode.com for creating long interface

// ! any is your enemy (you know typescript infers so it don't tell you that you forgot return type so use eslint.json { "rules": {"typedef": [ ture, "call-signature"]}}
function add(...vals: number[]) {
  return vals.reduce((acc, item) => acc + item, 0);
}


// ! type guards are your friends use interface,type

// ! never usecase