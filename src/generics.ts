function getAndSetState(x:number):number {
  let state = x
  return state
}

console.log(getAndSetState(3))

// Todo: make the function for string
// * for that we have to change above code type 'number' to 'string' then it will work

// Todo: Create two different state one that only allows numbers, and the other that only allows strings
// 1.first Attempt code:-
//  we can use using type 'number | string' but it is not what we want we want. it will allow both the number and string.

// Todo: Second attempt using Generics For number only and string only state code:-

// ! problem:- you can create boolean state also

// * solution we only want number or string type so we have to change <S extends number | string> in function this is called constraints

// Todo: Create default type for Number













