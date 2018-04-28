$(document).ready(() => {

    $.getJSON(`/api/todos`)
    .then(addTodos)
    .catch(err => {
        console.log(err);
    });

    $('#todoInput').keypress(event => {
      if (event.which === 13) {
        createTodo();
      }
    })


});
function addTodos(todos) {
  todos.forEach(todo => {
    addTodo(todo);
  });
}
function createTodo() {
  let userInput = $('#todoInput').val();
  let createdTodo = {name: userInput};
  $.post('api/todos', createdTodo)
  .then(newTodo => {
    addTodo(newTodo);
  })
  .catch(err => {
    console.log(err);
  })
}

function addTodo(todo){
    let newTodo = $("<li>" + todo.name + "</li>");
    if (todo.completed) {newTodo.addClass("done");}
    newTodo.addClass("task");
    $(".list").append(newTodo);
}