interface Array<T> {//T자리에 뭐가 올지 모름(자리만 만듦)
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg? :any): void
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg? :any): U[]
    filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
}

//forEach
[1,2,3].forEach((item) => {console.log(item)}); //1 2 3

[1,2,3].forEach((item) => {console.log(item)});
['1','2','3'].forEach((item) => {console.log(item)});
[true,false,true].forEach((item) => {console.log(item)})

//map
const strings = [1, 2, 3].map((item) => item.toString())

//filter
const filtered = [1, 2, 3, 4, 5].filter((value) => value %2);

const predicate = (value: string | number): value is string => typeof value === "string"; 
const filtered3 = ['1', 2, '3', 4, '5'].filter(predicate);

const checkNum = (value: string | number): value is number => typeof value === "number";
const filtered4 = ['1', 2, '3', 4, '5'].filter(checkNum);