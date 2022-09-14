// function delayP(ms) {
//   return new Promise((resolve, reject) => {
//     //동기부분
//     setTimeout(resolve, ms);
//     reject(err);
//   });
// }
// //async
async function a() {
  console.log("2"); //동기
  const a = await 1; //await을 then으로 생각, async가 끝나는 건 이 곳(동기)(첫 번째 await전에 끝남)
  //처음 나오는 await이 axios.get이면 Promose.resolve가 아니라 axios.get으로 쓰면 됨
  //나머지는 비동기
  console.log("4") //비동기
  console.log("a", a);
  console.log("hmm");
  await null;
  const b = await Promise.resolve(1);
  console.log("b", b);
  return a+b; //2
}//(비동기)

//Promise(async 함수를 promise로 바꿀 땐 await이 기준)
//편의상
const a = Promise.resolve(1) //프로미스화
  .then((a) => {
    //await이 붙이면 다 비동기
    //await에서 대입하는 변수를 then안에 적어둠
    //await과 await 사이에 전부를 넣을 것
    console.log("a", a);
    console.log("hmm");
    return null;
  })
  .then(() => {
    //대입한 값이 없으므로 비워둠
    return Promise.resolve(1);
  })
  .then((b) => {
    console.log("b", b);
    return b; //단 a+b를 하면 오류남(정확하게 async await과 promise가 연결된 건 아님)
  }).then((result) => {
    console.log(result);
  })
  .then((result2) => {
    console.log(result2);
  });
  
console.log("1")
a() //then 5개 있다
  .then((result) => {
    console.log("결과1", result);
  })
  .then((result2) => {
    console.log("결과2", result2);
  });
console.log("3")