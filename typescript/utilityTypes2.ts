// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };

// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };

// type NonNullable<T> = T & {};

interface Profile2 {
    name?: string,
    age?: number,
    married: boolean
}

type Name = Profile['name']

const Molang: Required<Profile> = {
    name: "zerocho",
    age: 29,
    married: false,
}

//Required
type RE<T> = {
    //[Key in keyof T]는 name?, age?, married? 이렇게 가져옴
    //-는 옵셔널을 전부 제거
    [Key in keyof T]-?: T[Key];
}

const Molang2: RE<Profile> = {
    name: "Molang",
    age: 29,
    married: false,
}

//Readonly
const Molang3: Readonly<Profile> = { //프로필 수정 못함
    name: "Molang",
    age: 29,
    married: false,
}


type READ<T> = {
    readonly[Key in keyof T]: T[Key];
// -readonly[Key in keyof T]: T[Key]; //-도 붙일 수 있음
}

const Molang4: READ<Profile> = { //프로필 수정 못함
    name: "Molang",
    age: 29,
    married: false,
}


//Record
//1번 코드
interface Obj {
    [key: string]: number;
}
//2번 코드(1번과 2번은 서로 같은 코드)
const OBJ: Record<string, number> = {a: 3, b:5, c: 7}

type R<T extends keyof any, S> = { //T에 제한조건을 줌
    [Key in T]: number;
}
const MOLANG: R<string, number> = {a: 3, b:5, c: 7}