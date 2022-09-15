// const a = 5;
// const b: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: any = true;

function add(x: number, y: number) {return x + y}

// type Add = (x: number, y: number) => number
// const add: Add = (x,y) => x + y;

// interface Add {
//     (x: number, y: number): number
// }
// const add: Add = (x, y) =>  x+y;

const obj = {lat: 37.5, lon: 127.5};

const arr = ['123', '456']
const arr2 = [123, 456]
const arr3: [number, number, string] = [123, 456, 'hello']

// function add2(x: number, y: number): number;
// function add2(x, y) {
//     return x + y
// }

try {
    const array: string[] = [];
    array.push("hello");
} catch (error) {
    error;
    
}

const head = document.querySelector("#head")
if(head) {
    head.innerHTML = "hello world"
    console.log(head)
}

type World = "world" | "hell";
const a: World = "world";
type Greeting = `hello ${World}`;
const c: Greeting = 'hello hell'

function rest(...args: string[]) {
    console.log(args)
}

rest("1", "2", "3")