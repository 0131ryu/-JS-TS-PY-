async function asyncFunction() {
  console.log(1);
  //result가 promise의 then과 같음
  const result = await getResult();
  console.log(result);
  console.log(3);
}

function getResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2); //result에 전달
    }, 500);
  });
}

asyncFunction();

async function asyncFunction2() {
  try {
    console.log(1);
    const result = await getResult2();
    console.log(result);
    console.log(3);
  } catch (err) {
    console.log(err);
  }
}

function getResult2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("에러발생 예시"));
      //   resolve(2);
    }, 500);
  });
}

asyncFunction2();
