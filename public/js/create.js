const todoListForm = document.querySelector("#todolistform");

const setTodos = (e) => {
    const {author, title, content} = e.target;
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    if(!todos) return alert("게시글이 없습니다!");

    const todo = {
        author: author.value,
        title: title.value,
        content: content.value
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    window.location.href = "./public/views/list.html";
}
todoListForm.addEventListener("submit", setTodos)