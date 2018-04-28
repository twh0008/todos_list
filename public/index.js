$(document).ready(() => {

    $.getJSON(`/api/todos`)
    .then(addTodos)
    .catch(err => {
        console.log(err);
    });


});
function addTodos(todos) {
  todos.forEach(todo => {
    let newTodo = $('<li>' + todo.name + '</li>');
    $(".list").append(newTodo);
    console.log(todo.name);
  });
}
