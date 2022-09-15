type A = {hello: "world"} & {zero: "cho"}
type B = {hello: "world"} | {zero: "cho"}

const a2: A = {hello: "world", zero: "cho"} //intersection : 모든 속성이 다 있어햐 함
const b2: B = {hello: "world"} //여러 개 중에 하나만 있으면 됨

type Animal = {breath: true};
type Poyouryu = Animal & {breed: true}
type Human = Poyouryu & {think: true}

const zerocho: Human = {breath: true, breed: true, think: true}

interface A2 {
    talk: () => void
}
interface A2 {
    eat: () => void
}
interface A2 {
    shit: () => void
}

const a3: A2 = {talk() {}, eat() {}, shit() {}, sleep() {}}
interface A2 {
    sleep: () => void
}