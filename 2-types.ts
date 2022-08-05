//* implicit types (recommended)

let name1 = 'john doe'

// Error bcz ts auto set name1 type to string
// name1 = 1

//* explicit types (string, number, boolean, Function, any)

let age: number = 20

// Error bcz we declare name2 as type number
// age = 'foobar'

//* array of single type

const fruits: string[] = ['apple', 'banana', 'mango']

// Error cz array of string
// fruits.push(1)

//* array of mixed type

const dataset: any[] = [true, 'hello', true, 20]
const dataset2: (string | number | boolean)[] = [20, true, 'hello']

//* tuple
// array of mixed defined types
// should be positioned as types

const johnData: [string, number, boolean] = ['john doe', 20, false]

// types are not rotating
johnData.push(true) // => ['john doe', 20, false, true]

// can contain only declare types
// johnData.push(null) // => Error

//* array of tuple
// multidimensional array tuple

const employees: [number, string][] = [
    [1, 'ema'],
    [2, 'john'],
    [3, 'doe']
]

//* union

let id: number | string = 1

id = 'one' // => 'one'

//* union of array

const uArray: (string | number | boolean)[] = [20, true, 'hello']

//* enum
// enum is like a object
// enum props should be uppercase (convention)
// when we read it return 0 base number
// we can explicitly set enum prop value as number, string, boolean

enum Role {
    Admin,
    Editor,
    User
}

console.log(Role.Admin) // => 0
console.log(Role.Editor) // => 1

// enum can auto increment number
enum Direction {
    Up,
    Right = 10,
    Down,
    Left
}

console.log(Direction.Up) // => 0
console.log(Direction.Right) // => 10
console.log(Direction.Left) // => 11
console.log(Direction.Down) // => 1

//* object
// we declare explicit types for object props
// single line object props should have semicolon(not comma) at last
// multiple line object props can be declare without semicolon

const user: { id: number; name: string } = { id: 1, name: 'john doe' }

// user[age] = 20 // => Error

//* type alias
// type alias helps to more readable
// it is like a variable
// it can be use multiple times
// optional field can be declare with ?
// readonly prop can be declare with readonly keyword

type User = {
    readonly id: number
    fullName: string
    email: string
    age?: number
}

const user2: User = { id: 10, fullName: 'john doe', email: 'johndoe123@john.com' }

// user2.id = 11 // => Error cz id is readonly property

//* type assertion
//? note: misuse of type assertion can break ts type checking

// <input type="text" id="testInp" />
const inputEl = document.getElementById('testInp')

// console.log(inputEl.value) // => Error cz HTMLElement as no value attr

// In there we need more specific type (HTMLInputElement) of HTMLElement
const inputEl2 = document.getElementById('testInp') as HTMLInputElement
// or
const inputEl3 = <HTMLInputElement>document.getElementById('testInp')

console.log(inputEl2.value) // => no error
