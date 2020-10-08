interface User {
  name: string;
  age?: number;
  number: string | number;
  id: number | null;
}

const user: User = {
  name: "Aditya",
  age: 23,
  number: "8343438",
  id: null,
};

console.log(user);

const sort = (arr: any[]) => [arr[0], arr[arr.length - 1]];

console.log(sort([1233, 434, "kdfkd", true, false]));

const names: string[] = ["A", "B", "C", "D"];

const nameStartsWithC: string[] = [...names, "E", "F"];

console.log(nameStartsWithC);

const showUser = (user: User): any => {
  console.log(`User is ${user.name} , ${user.number > 8}`);
};

showUser({ id: 1, name: "Raj", number: "88884343" });

type myBool = true | false;

type LaptopStatus = "open" | "shutDown" | "sleep";

const laptopsStatus: LaptopStatus = "shutDown";

console.log(laptopsStatus);

console.log(laptopsStatus.toUpperCase());

const showGreetting = () => {
  console.log("Good Morning");
};

// console.log(showGreetting())

// optional Chaining and Nullish coalescing

const obj = JSON.parse(JSON.stringify(
  {
    system: {
      user: {
        name: 'Aditya',
        age: 21
      }
    }
  }
))

// it will return undefined because there is no firstName property is present in name.
// console.log(obj.system.user.name.firstName)

// so we have to check that property is present then access it is very good idea so how we can do this using &&(and operator)
// if obj.system.user exist then access obj.system.user.name else return false
// console.log(obj.system.user && obj.system.user.name )

// using optional chaining 
console.log(obj.system?.user?.name && 'Object doesnt exist')


// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const foo = null ?? 'default string';
console.log(foo);

const baz = 0 ?? 42;
console.log(baz);

// falsy value that return false
// All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN)

0 && "dog"

// The value null represents the intentional absence of any object value.

// && and || operator return true value






  












