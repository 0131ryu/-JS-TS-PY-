let exPromise = new Promise(function (resolve, reject) {
  //resolve, reject는 자바스크립트에서 자체 제공하는 콜백
  //신경쓰지 않고 {} 작성하면 됨
  //resolve(value) : 일이 겅공적으로 끝난 후 그 결과를 나타내는 value와 함께 호출
  //reject(error) : 에러 발생 시 에러 객체를 나타내는 error와 함께 호출
});

let promise1 = new Promise(function (resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 됩니다.
  setTimeout(() => resolve("완료"), 1000);
});

let promise2 = new Promise(function (resolve, reject) {
  // 일을 끝마치는 데 시간이 들지 않음
  resolve(123); // 결과(123)를 즉시 resolve에 전달함
});

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); //1이 출력(첫 번째 reject/resolve 호출만 고려대상)