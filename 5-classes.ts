//* class
// class property can be declare as public(default), private, protected
// public prop can access from the outside of class
// private prop can access from only inside class
// protected prop can access from inside class/child class

class Person1 {
    id = 1 // same as public id = 1
    private name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    info(): string {
        return `Name is ${this.name} and age is ${this.age} years`
    }
}

const person1 = new Person1('john', 45)

// console.log(person1.id) // => 1
// console.log(person1.name) // => Error
// console.log(person1.age) // => Error

//* class with interface
// class props and methods can map with interface
// for use interface in class we should use implements keyword
interface Person2Interface {
    name: string
    age: number
    info(): string
}

class Person2 implements Person2Interface {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    info() {
        return `Name is ${this.name} and age is ${this.age} years`
    }
}

const person2 = new Person2('emma', 30)

console.log(person2)

//* class as type declaration
// personsArray can store only Person2's instances

const personsArray: Person2[] = []
const person3 = new Person2('name 1', 10)
const person4 = new Person2('name 1', 10)

personsArray.push(person3)
personsArray.push(person4)
