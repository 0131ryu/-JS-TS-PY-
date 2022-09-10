const x = "x";
//선언
function c() {
  const y = "y";
  console.log("c");
  function b() {
    const z = "z";
    console.log(b);
    c();
  }
}
//선언
function a() {
  const x = "x";
  console.log("a");
  b();
}

a();
c();

//위에서 아래로 코드 실행(일반적)
//왼쪽에서 오른쪽으로 코드 실행(일반적)

//함수를 호출할 때마다 호출스택이 쌓임
