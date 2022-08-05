//* interfaces
// interface is as like as type alias
// type alias works with both primitive and object types but interface works with only object type
//? advance: interface can extend another interface

interface PersonInterface {
    readonly id: number
    name: string
    age?: number
}

const p1: PersonInterface = { id: 1, name: 'emma joe' }

// p1.id = 2 // => Error

//* interface with function
// interface can be used as function schema

interface SumInterface {
    (x: number, b: number): number
}

const sum: SumInterface = (a, b) => a + b

// console.log(sum(10, 20)) // => 30
// console.log(sum('test', 20)) // => Error
