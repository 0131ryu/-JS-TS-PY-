type A3 = string | number; //더 넓은 타입
type B3 = string; //상대적으로 좁은 타입

type C2 = string & number; //상대적으로 더더 좁음

type A4 = {name: string};
type B4 = {age: number}; 
type AB4 = A4 | B4
//객체는 상세할수록 좁은 타입
type C3 = {name: string , age: number}

const ab4: AB4 = {name: "zerocho"}
// const c: C2 = ab2; //오류
const ab5: AB4 = {name: "zerocho"}
//객체 리터럴 검사
const obj3 = {name: "zerocho", age: 29, married: false}
const c3: C3 = obj3;

interface A5 {a: string}
//잉여 속성 검사
const obj5 =  {a: 'hello', b: "wolrd"}
const obj6: A5 = obj5;