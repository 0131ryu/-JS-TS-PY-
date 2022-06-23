function basic(num1, num2) {
  return num1 + num2;
}

let result = basic(1, 3);
console.log(result);

// let basic = function (num1, num2) {
//   console.log(num1 + num2);
// };

// basic(1, 3);

// let basic = (num1, num2) => {
//   console.log(num1 + num2);
// };

// basic(1, 3);

// - BMI 지수를 계산하고 반환하는 함수를 만들어봅시다.
// - 함수명은 BMI으로 합니다.
// - 파라미터로 키, 몸무게를 가집니다.
// - 계산된 BMI지수를 반환합니다.
let BMI = (weight, height) => {
  const meterHeight = height / 100;
  const bmiIndex = weight / (meterHeight * meterHeight);

  return bmiIndex;
};
console.log(BMI(180, 60));
