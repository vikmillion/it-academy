// let todos = [];

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  // .then((json) => console.log(json))
  .then((json) => {
    renderTodos(json);
  });

const renderTodos = (todos) => {
  const wrapper = document.getElementById("wrapper");
  todos.forEach((todo) => {
    const todo_title = document.createElement("p");
    todo_title.innerText = todo.title;
    wrapper.append(todo_title);
  });
};

