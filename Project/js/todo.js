readTodo();

async function readTodo() {
  //토큰이 없으면 return
  const token = localStorage.getItem("x-access-token");
  if (!token) {
    return;
  }
  //일정 조회 API
  const config = {
    method: "get",
    url: url + "/todos",
    headers: { "x-access-token": token },
  };
  try {
    const res = await axios(config);
    const todoDataSet = res.data.result;
    //console.log(todoDataSet);

    for (let section in todoDataSet) {
      //console.log(section);

      //각 섹션에 해당하는 ul 태그 선택
      const sectionUl = document.querySelector(`#${section} ul`);
      //각 섹션에 해당하는 데이터
      const arrayForEachSection = todoDataSet[section];
      //console.log(arrayForEachSection);

      let result = "";
      for (let todo of arrayForEachSection) {
        let element = `   <li class="list-item" id="${todo.todoIdx}">
      <div class="done-text-container">
          <input type="checkbox" class="todo-done" ${
            todo.status === "C" ? "checked" : ""
          }/>
          <p class="todo-text">${todo.contents}</p>
      </div>
      <div class="update-delete-container">
      <i class="todo-update fa-solid fa-pencil"></i>
          <i class="todo-delete fa-solid fa-trash-can"></i>
      </div>
  </li>`;
        result += element;
      }
      sectionUl.innerHTML = result;
    }

    if (res.data.code !== 200) {
      alert(res.data.message);
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}

//일정 CUD
const matrixContainer = document.querySelector(".matrix-container");
matrixContainer.addEventListener("keypress", cudController);

function cudController(event) {
  const token = localStorage.getItem("x-access-token");
  if (!token) {
    return;
  }
  const target = event.target;
  const targetTagName = target.tagName;
  const eventType = event.type;
  const key = event.key;
  console.log(target, targetTagName, eventType, key);

  if (targetTagName === "INPUT" && key === "Enter") {
    createdTodo(event, token);
  }
}

async function createdTodo(event, token) {
  const contents = event.target.value;
  //matrix-item의 id값
  const type = event.target.closest(".matrix-item").id;
  console.log(type);
  if (!contents) {
    alert("내용을 입력해주세요");
    return false;
  }
  const config = {
    method: "post",
    url: url + "/todos",
    headers: { "x-access-token": token },
    data: {
      contents: contents,
      type: type,
    },
  };
  try {
    const res = await axios(config);
    if (res.data.code !== 200) {
      alert(res.data.message);
      return false;
    }
    //DOM 업데이트
    readTodo();
    event.target.value = "";
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
