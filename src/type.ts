// it will work because ts don't know what are property inside object there is no type of object
type Name = {};
const game: Name = { name: "adiy" };

// ! Abstract:- LHS === RHS
// ! Abstract:- if you are creating shape of object the typescript only care about property name their type. if you have given you are ready to go.

// ! array of never (you to provide some info so typescript can take resonable decision)
// let aa = []
// aa.push(8)
// aa.push('adi')

// * we can have even define a tuple, which has a fixed length
let bb: [number, string, string, number] = [
  123,
  "Fake Street",
  "NoWhere, USA",
  10101,
];

bb = [12, "k", "j", 0];

// Interface

export interface HasPhoneNumber {
  name: string;
  phone: number;
}

export interface HasEmail {
  name: string;
  email: string;
}

let contactInfo =
  Math.random() > 0.5
    ? {
        // we can assign it to HasPhoneNumber
        name: "aditya",
        phone: 834398848,
      }
    : {
        // we can assing it to HasEmail
        name: "adi",
        email: "adityaprasad20799@gmail.com",
      };

console.log(contactInfo);
// * we can only access the .name prop
console.log(contactInfo.name);

let otherContactInfo: HasEmail & HasPhoneNumber = {
  email: "adi@",
  name: "Aditya",
  phone: 3443438,
};

console.log(otherContactInfo);

// function arguments and return values can have type annotations
function sendEmail(to: HasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name} ${to.email}`,
    body: `you are good to go`,
  };
}

// using arrow function
const sendTextMessage = (
  to: HasPhoneNumber
): { recipient: string; body: string } => {
  return {
    recipient: `${to.name} ${to.phone}`,
    body: `you are good to go`,
  };
};

// return types can almost always be inferred
// any object that has name property
// function getNameParts(contact: { name: string }) {
//   const parts = contact.name.split(/\s/g);
//   if (parts.length < 2) {
//     throw new Error(`Can't calculate name parts from name ${contact.name}`);
//   }
//   return {
//     first: parts[0],
//     middle:
//       parts.length === 2
//         ? undefined
//         : // everything except first and last
//           parts.slice(1, parts.length - 2).join(" "),
//     last: parts[parts.length - 1],
//   };
// }

// console.log(getNameParts({name: 'Aditya Prasad'}))

// We can even provide multiple function signatures
function contactPeople(
  method: "email" | "phone",
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (method === "email") {
    (people as HasEmail[]).forEach(sendEmail);
  } else {
    (people as HasPhoneNumber[]).forEach(sendTextMessage);
  }
}

contactPeople("email", { name: "adi", email: "aity@34" });

contactPeople("phone", { name: "adi", phone: 3439849 });
