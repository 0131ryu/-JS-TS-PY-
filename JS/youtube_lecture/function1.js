const add = (a, b) => a + b;

//객체 리턴 시 ({})
//괄호 없으면 함수의 리턴이 아닌 함수의 body라고 생각함

//리턴 생략가능
// const add = (a, b) => {
//   return a + b; 
// }

//함수 선언
function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); //8
calculator(add, 3, 5) //8
//calculator(add(), 3, 5) //calculator((undefined, undefined), 3, 5)
//add 자리에서 함수 자리에 함수가 아닌 함수 호출을 넣는 경우

//예시(오류)
//document.querySelector(".div").addEventListener("click", add());
//예시 맞는 것
document.querySelector(".div").addEventListener("click", add);

//함수 뒤에 호출 add() = return 값으로 대체(a+b) = (undefined, undefined))


//예시(오류)
//const onclick = () => {
//  console.log("hello");
//}

//틀림
//document.querySelector(".div").addEventListener("click", onclick());

//예시(옳음)
const onclick = () => (event) => {
  console.log("hello");
}
//같음
// const onclick = () =>  {
//  return () => {
//   console.log("hello");
//  }
// }
//올바름
document.querySelector(".div").addEventListener("click", onclick());
//같음
document.querySelector(".div").addEventListener("click", (event) => {
  console.log("hello");
});