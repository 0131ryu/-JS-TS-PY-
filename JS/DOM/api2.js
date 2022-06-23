const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
  { title: "오잉", weight: 50 },
];

//div#app선택
const app = document.querySelector("#app");

let result = "";

for (item of productsData) {
  let element = `<div class="item">상품명 ${item.title}, 무게: ${item.weight}</div>`;

  result = result + element;
}

app.innerHTML = result;
