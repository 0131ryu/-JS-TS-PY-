interface Arr<T> {
   //forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;
   forEach(callback: (item: T) => void): void
   //map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
    map<U>(callback: (v: T, index: number) => U): U[]
    //filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
    filter<S extends T>(callback: (v: T) => v is S): S[]
}

//forEach
const lime: Arr<number> = [1, 2, 3];
lime.forEach((item) => {
    console.log(item);
})
lime.forEach((item) => {
    console.log(item)
    return '3';
})

const lime2: Arr<string> = ['1', '2', '3'];
lime2.forEach((item) => {
    console.log(item);
})

//map
const lemon: Arr<number> = [1, 2, 3];
const citrus = lemon.map((v, i) => v+1); //결과는 [2, 3, 4]

//const c = string[]이 나와야 함
const citrus2 = lemon.map((v, i) => v.toString()); //오류 (결과는 ['2', '3', '4'])

//const d = boolean[]이 나와야 함
const citrus3 = lemon.map((v, i) => v % 2 === 0) //오류

const grapefruit : Array<string> = ['1', '2', '3']
//const f = number[]
const citrus4 = grapefruit.map((v) => +v)


//filter
const drink = lemon.filter((v): v is number => v % 2 === 0) //결과 [2] number[]

const mandarin: Arr<number | string> = [1, '2', 3, '4', 5];

//const d = string[]
const drink2 = mandarin.filter((v): v is string => typeof v === "string");  //결과 ['2', '4'] string[]

const predicate2 = (v: string | number) : v is number => typeof v === 'number';
//const e = number[]
const drink3 = mandarin.filter(predicate2); //결과 : [1, 3, 5] number[]