const obj = {
  name: "test",
  sayName() {
    console.log(this.name); //test - 1
    function inner() {
      console.log(this.name); //window.name = undefined - 2
    }
    inner();
  },
};

obj.sayName(); //test
//1
//obj가 붙고 화살표 함수가 붙지 않음
//2
//함수 호출 할 때 this를 바꿔주는 동작이 없음, window

const obj2 = {
  name: "test",
  sayName: () => {
    console.log(this.name);
    function inner() {
      console.log(this.name); //sayName
    }
    inner();
  },
};

const obj3 = {
  name: "test",
  sayName() {
    console.log(this.name); //test
    const inner = () => {
      console.log(this.name); //test -2
    };
    inner();
  },
};

obj.sayName(); //test, test
//2 함수 호출 시 this
//inner() : 함수를 바꿔주는 행동 x
//화살표 함수 : 부모 함수(sayName)의 this를 그대로 가져옴
//함수를 호출하기 전까지는 뭔지 모름
