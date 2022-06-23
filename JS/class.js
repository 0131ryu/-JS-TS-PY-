class Car {
  constructor() {
    this.wheels = 4;
  }

  say() {
    console.log(1);
  }
}

class SmallCar extends Car {
  constructor() {
    super();
    this.doors = 2;
  }
}

const mySmallCar = new SmallCar();
console.log(mySmallCar);

class Aircarft {
  constructor() {
    this.isTakeOff = false;
  }
  takeOff() {
    this.isTakeOff = true;
    console.log("이륙완료");
    return true;
  }
}

class FighterAircarft extends Aircarft {
  fire() {
    if (!this.isTakeOff) {
      console.log("이륙 후 발사할 수 있습니다.");
      return false;
    }
    console.log("미사일을 발사했습니다.");
    return true;
  }
}

const myCraft = new FighterAircarft();
myCraft.takeOff();
myCraft.fire(); //myCraft.takeOff();  없으면 '이륙 후 발사할 수 있습니다.'로 호출
