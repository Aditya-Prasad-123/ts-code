// * number[] === Array<number> (I am saying i want array of number means inside angle bracket where we just have to pass 'what type')
// * string[] === Array<string>

// Type Alias and Interfaces
// Type Alias Allow us to give a type a nanme
type StringOrNumber = string | number;

// This is the only time you'wll see a type on the RHS of assignment
type HasName = { name: string };

// self-referencing types don't work

type NumVal = 1 | 2 | 3 | 4;
interface NumArr extends Array<NumVal> {}

const x: NumArr = [1, 2, 3];

// ! Type alias can also used to descripbe call signature
type ContactMessager1 = (name: string, work: string) => string;

// Interface

interface HasPhoneNumber {
  name: string;
  phone: number;
}

// ! Interface can be extends
interface HasInterNationalPhoneNumber extends HasPhoneNumber {
  countryCode: string;
}

// ! Interface can also used to discribe call signature

interface ContactMessager2 {
  contact(name: string, num: number): string;
  (greet: string): any;
  game: (name: string, work: string) => string
}

const workDetails = (name: string, work: string) =>
  `${name} ${work}`;

const detail = workDetails("adi", "Front End Developer");

console.log(detail);

// !constructor signature can be described as well

interface ContactConstructor {
  new (...args: any[]): HasName
}

// !index signature
// what do you mean by undefined in typescript
// i undefined means you haven't given value so pass undefined

// interface PhoneNumberDict {
//   [name: string]: undefined | {
//     areaCode: number
//     num: number
//   }
// }

const phoneDic:PhoneNumberDict = {
  home: { areaCode: 344, num: 343434938}, office: { areaCode: 3444, num: 34347347397}
}

// at most, a type may have one string and one number index signature

// they may be use in combination with other types
// augment the existing PhoneNumberObject
// i.e., imported it from a library, and adding stuff to it

interface PhoneNumberDict {
  home: {
      areaCode: number,
      num: number
  }, 
  office: {
      areaCode: number,
      num: number
  }
}

// ! we can use interfaces with object, function, array and type alias can use with all primitive types