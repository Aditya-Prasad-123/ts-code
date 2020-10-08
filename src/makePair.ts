// F extends number | string = number,
//   S extends number | string = number

// F extends number | string,
// S extends boolean | F

// we can also use interface or type alias so types can be reused so let's try
interface Pair<A, B> {
  first: A;
  second: B;
}

function makePair<F, S>() {
  // Stores a pair of values
  let pair: Pair<F, S>;
  function getPair() {
    return pair;
  }
  // Stores x as first and y as second
  function setPair(x: F, y: S) {
    pair = {
      first: x,
      second: y,
    };
  }
  return { getPair, setPair };
}

const { getPair, setPair } = makePair<number, string>();

setPair(1, "hello");
console.log(getPair());

// Generic Class State
class State<S> {
  state: S;
  getState() {
    return this.state;
  }
  setState(x: S) {
    this.state = x;
  }
}

const numState = new State<number>();
numState.setState(1);
// Prints 1
console.log(numState.getState());

// Condition Type

type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

const IsNumber = (x) => (typeof x === "number" ? "number" : "other");

// Real Word Example Conditional Type
type TypeName<T> = 
  T extends string ? 'string':
  T extends number ? 'number' :
  T extends boolean ? 'boolean': 
  T extends undefined ? 'undefined':
  T extends Function ? 'function':
  'object'

function typeName<T>(t: T): TypeName<T> {
  return typeof t as TypeName<T>
}

const str = typeName('hello')
const num = typeName(123)
const bool = typeName(true)
const undef = typeName(undefined)
const func = typeName(function () { })
const object = typeName(null)

// infer keyword used in conditional name the types so that you can use that when condition is met.abs
type UnboxArray<T> = 
  T extends Array<infer Member>
  ? Member
  : T;

type UnboxedArray = UnboxArray<number[]>;
type AnythingElse = UnboxArray<string>;
