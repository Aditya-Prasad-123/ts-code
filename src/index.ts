// Advanced Types

/*

Javascript    TypeScript
-Variables    -Generics
-Loop         -Mapped Types
-Lists        -Union Types
-If/Else      -Conditiona Types
Object.keys   -keyof

*/

type StringLiteralUnion = "hello" | "world";

const hello: StringLiteralUnion = "hello";
const world: StringLiteralUnion = "world";

// keyof

interface System {
  name: string;
  generation: string;
  model: number;
  size?: string;
}

type UserKeys = keyof User;
type SystemModel = keyof System;

const id: UserKeys = "age";
const systemInfo: SystemModel = "name";

// generics are typed parameter to your function

declare function arrify<T>(args: T): T[];

// const sevenArray: number[] = arrify(7);
// const stringArray: string[] = arrify("hello");

// conditiona types
declare function greet<T extends "hello" | "world">(
  arg: T
): T extends "hello" ? "mello" : "i dont know that word";

// console.log(greet("hello"));

// 1.Generics Practice

interface WrappedValue<X> {
  value: X;
}

let val: WrappedValue<string> = { value: "" };
val.value;

//2. Type parameters can have default types just like funtion parameters can have default values

interface FilterFunction<T = any> {
  (val: T): boolean;
}

const stringFilter: FilterFunction<string> = (val) => typeof val === "string";
// stringFilter(0);
stringFilter("abc");

// can be used with any value
const truthyFilter: FilterFunction = (val) => val;
truthyFilter(0); // False
truthyFilter(1); // true

// 3.You don't have to use exactly your type parameter as an arguement thing that are based on yo type parameter are fine too.
// It infers what T is by pulking out from What Promise is
function resolveOrTimeout<T>(promise: Promise<T>, timeout: number) {
  return new Promise<T>((res, rej) => {
    // start the timeout resolve when it triggers
    const task = setTimeout(() => rej("time up!"), timeout);

    promise.then((val) => {
      // cancel the timout
      clearTimeout(task);

      // resove with the value
      res(val);
    });
  });
}

resolveOrTimeout(fetch(""), 3000);

// 4. Type parameters can have constraints

function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {
  const out: { [k: string]: T } = {};
  console.log(array)
  array.forEach((val) => {
    // val.id && (out[val.id] = val);
    out[val.id] = val
  });
  return out;
}

const myDict = arrayToDict([
  { id: "foo", value: "first", list: "Hung" },
  { id: "b", value: "second" },
  {id: '', value: 'something'}
]);

console.log(myDict);

// 5. Type arguements are associated with scopes, just like function

function startTuple<T>(a: T) {
  return function finishTuple<U>(b: U) {
    return [a, b] as [T, U];
  };
}

const myTuple = startTuple(["first"])(42);
