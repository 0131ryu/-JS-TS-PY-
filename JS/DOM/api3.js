// const showBtn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.

// showBtn.addEventListener("click", function () {
//   document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
// }); // 선택한 요소에 click 이벤트 리스너를 등록함.

// const div = document.getElementById("container");
// const input = document.getElementById("input-tag");
// const button = document.getElementById("button-tag");

// div.addEventListener("click", function (event) {
//   console.log("div에서 클릭이벤트 감지");
// });
// input.addEventListener("click", function (event) {
//   console.log("input에서 클릭이벤트 감지");
// });
// button.addEventListener("click", function (event) {
//   console.log("button에서 클릭이벤트 감지");
// });
const itemList = document.querySelector(".itemList");
itemList.addEventListener("click", function (event) {
  alert("clicked");
});

const newItem = `
<li>
    <input type="checkbox" id="item3">
    <label for="item3">새로운 아이템</label>
</li>
`;

itemList.innerHTML = itemList.innerHTML + newItem;
