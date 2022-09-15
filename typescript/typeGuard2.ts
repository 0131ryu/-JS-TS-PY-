interface a {
    readonly a: string;
    b: string
}
const aaa: a = {a: "hello", b: "world"}
// aaaa.a = '123' //값을 바꾸는 오류를 막아줌

//어떤 키든 다 string을 원함
//모든 속성이 다 number였으면 함 
type A7 = {[key: string]: number};
const aaaa: A7 = {a: 3, b: 1, c: 5}

type B7 = "Human" | "Mammal" | "Animal";
type A8 = {[key in B7]: number}
const aaaa2: A7 = {Human: 3, Mammal: 1, Animal: 5}