// function first(next) {
//   setTimeout(() => {
//     console.log("first");
//     next();
//   }, 2000);
// }

// function second() {
//   console.log("second");
// }

// first(second);
function hell() {
  setTimeout(
    (name) => {
      let checkList = name;
      console.log(checkList);
      hellTwo(checkList);
    },
    500,
    "one"
  );
}

function hellTwo(checkList) {
  setTimeout(
    (name) => {
      checkList += ", " + name;
      console.log(checkList);
      hellThree(checkList);
    },
    500,
    "two"
  );
}

function hellThree(checkList) {
  setTimeout(
    (name) => {
      checkList += ", " + name;
      console.log(checkList);
      hellFour(checkList);
    },
    500,
    "three"
  );
}

function hellFour(checkList) {
  setTimeout(
    (name) => {
      checkList += ", " + name;
      console.log(checkList);
    },
    500,
    "four"
  );
}

hell();
