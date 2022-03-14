const num = document.querySelector(".number");

document.querySelector(".press").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/" + num.value)
    .then((response) => response.json())
    // .then((json) => console.log(json))
    .then((json) => {
      renderTodos(json);
    });

  const renderTodos = (todos) => {
    console.log("todos :>> ", todos);
    const outValue = document.getElementById("outValue");
    const todo = document.createElement("div");
    outValue.innerText = "";
    if (todos.id > 0 || todos.id < 200) {
      if (!todos.completed === false) {
        delete todos.completed;
        todos.state = "completed";
      } else {
        delete todos.completed;
        todos.state = "in progress";
      }
    } else {
      return (outValue.innerHTML = "Error<br/>Number 1 - 200  only");
    }
    console.log("entries 2:>> ", todos);

    for (let key in todos) {
      todo.innerHTML += " " + key + ": " + todos[key] + "<br/>";
    }

    outValue.append(todo);
  };
});
