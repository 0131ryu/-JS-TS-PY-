const x: {} = "123"
const y: Object = "hi" //{}, Object 모든 타입(null과 undefined 제외)
const xx: Object = "hi"
const yy: Object = {hello: "world"}
const z: unknown = "hi";

if(z) {
    z; //const z = {}(모든타입을 의미)
}