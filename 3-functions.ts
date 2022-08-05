//* function explicit type
// fn(arg: type): returned type {}

function addNum(a: number, b: number): number {
    return a + b
}

// console.log(addNum(2, 'test')) // Error

// when a function doesn't return anything it's return type is void
function logger(msg: string): void {
    console.log(msg)
}
