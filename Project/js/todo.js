readTodo();

async function readTodo() {
  //토큰이 없으면 return;
  const token = localStorage.getItem("x-access-token");
  if (!token) {
    return;
  }

  //일정 조회 API 호출하기
  const config = {
    method: "get",
    url: url + "/todos",
    headers: { "x-access-token": token },
  };
  try {
    const res = await axios(config);
    console.log(res);
    if (res.data.code !== 200) {
      alert(res.data.message);
      return false;
    }
    const todoDataSet = res.data.result;
    console.log(todoDataSet);

    for (let section in todoDataSet) {
      console.log(section);
      console.log("hello", document.querySelector(`#${section} ul`));
      //각 세션에 해당하는 url 태그
      const sectionUl = document.querySelector(`#${section} ul`);
      //각 세션에 해당하는 데이터
      const arrayForEachSection = todoDataSet[section];
      console.log(arrayForEachSection);

      let result = "";
      for (let todo of arrayForEachSection) {
        let element = `
        <li class="list-item" id=${todo.todoIdx}>
  <div class="done-text-container">
    <input type="checkbox" class="todo-done" ${
      todo.status === "C" ? "checked" : ""
    } />
    <p class="todo-text">${todo.contents}</p>
  </div>
  <div class="update-delete-container">
    <i class="todo-update fa-solid fa-pencil"></i>
    <i class="todo-delete fa-solid fa-trash-can"></i>
  </div>
</li>;
        `;
        result += element;
      }
      sectionUl.innerHTML = result;
    }
  } catch (error) {
    console.log(error);
  }
}

{
  /* <li class="list-item">
  <div class="done-text-container">
    <input type="checkbox" class="todo-done" />
    <p class="todo-text">산책가기</p>
  </div>
  <div class="update-delete-container">
    <i class="todo-update fa-solid fa-pencil"></i>
    <i class="todo-delete fa-solid fa-trash-can"></i>
  </div>
</li>; */
}
