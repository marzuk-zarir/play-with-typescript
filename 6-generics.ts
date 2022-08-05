//* generics
// generics is like a type placeholder
// generics used for as declared type can contain only this type
// most confusing concept in ts world

// works like func getArray( arr: number[] ): number[] {}
// 2nd example works like func getArray( arr: (number|string)[] ): (number|string)[] {}
function getArray<T>(arr: T[]): T[] {
    return [...arr]
}

//* implicit generic type declaration
const arrOfNum = getArray([1, 2, 3, 4])

// arrOfNum.push('foo') // => Error

//* explicit generic type declaration
const arrOfNumOrStr = getArray<number | string>([1, 2, 3, 4, 5])

arrOfNumOrStr.push('foobar')

console.log(arrOfNumOrStr) // => [1,2,3,4,'foobar']
