setTimeout(() => {
  //이 부분이 강제(여기서는 1초가 강제 = 바로 실행)
  //결과를 바로 받고 싶지 않아도 받아야 함
  console.log("a");
}, 1000);

function calculator(callback, a, b) {
  return callback(a, b);
}

calculator(
  //동기
  function (x, y) {
    return x + y;
  },
  3,
  5
);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

promise.then(() => {
  //Promise {<fulfilled>: undefined}
  console.log("A");
});

//promise 나중에 결과를 받을 수 있음
const p1 = axios.get("서버주소1");
const p2 = axios.get("서버주소2");
const p3 = axios.get("서버주소3");
const p4 = axios.get("서버주소4");
const p5 = axios.get("서버주소5");

Promise.all([p1, p2, p3, p4, p5])
  .then((results) => {})
  .catch((error) => {});
//catch : Promise.all([p1, p2, p3, p4, p5]).then((results) => {})
//then에서 일어난 에러도 catch에서
