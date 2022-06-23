// const userInfo = {
//   name: "홍길동",
//   birth: "2020-10-10",
//   getName: function () {
//     return this.name; //userInfo의미
//   },
// };

// console.log(userInfo.name);

// const obj = {
//   nickname: "하하",
//   age: 22,
//   say: function () {
//     console.log(this); //익명함수로 변경 시 undeifned로 변경
//     console.log(`제 이름은 ${this.nickname}, 나이는 ${this.age}살 입니다.`);
//   },
// };

// obj.say();

const obj = {
  setNumbers: function (num1, num2) {
    (this.num1 = num1), (this.num2 = num2);
  },
  sum: function () {
    return this.num1 + this.num2;
  },
  multiply: function () {
    return this.num1 * this.num2;
  },
};

obj.setNumbers(6, 10);
console.log(obj.sum());
console.log(obj.multiply());
