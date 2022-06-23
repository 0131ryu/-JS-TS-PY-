console.log(document.getElementsByTagName("div"));
console.log(document.getElementById("hi"));
console.log(document.getElementsByClassName("welcome")[0]);
console.log(document.querySelector("div.welcome"));
console.log(document.querySelectorAll("div"));

const divTag = document.querySelector("div");

divTag.innerHTML = "<h1>잘가</h1>";

const container = document.querySelector(".container");
console.log(container);

//부모태그
console.log(container.parentElement);
//자식태그
// console.log(container.children[0].children);
//인접 형제 태그
console.log(container.nextElementSibling);
