let a = 2;

const p = new Promise((resolve, reject) => {
  //동기
  console.log("제일 먼저") //여기가 먼저 호출됨
  setTimeout(() => {
    a = 6;
    console.log(a); //6
    resolve(a);
  }, 0);
});

// console.log("딴짓");
// p.then((result) => {
//   console.log("result", result);
//   return 1
// }).then((result) => {
//   console.log(result) //1 
// }).then((result) => {
//   console.log(result) //undefined
// });
//프로미스 : 실행은 바로하나 결과값을 내가 원할 때 쓸 수 있는 것
//프로미스는 주로 then과 같이 있음
p.then((result) => {
  console.log("result", result);
  return Promise.resolve(1)
}).then((result) => {
  console.log(result) //1 
}).then((result) => {
  console.log(result) //undefined
});

//프로미스 return = 프로미스가 resolve된 값이 return 됨
//프로미스가 아닌 일반 값을 return = 그 값이 그대로 다음으로 넘어감
