$(document).ready(function() {

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

    $('.list').on('click', 'span', function(e) {
        removeTodo($(this).parent());
    });


});
function addTodos(todos) {
  todos.forEach(todo => {
    addTodo(todo);
  });
}
function createTodo() {
  let userInput = $('#todoInput').val();
  let createdTodo = {name: userInput};
  $("#todoInput").val('');
  $.post('api/todos', createdTodo)
  .then(newTodo => {
    addTodo(newTodo);
  })
  .catch(err => {
    console.log(err);
  })
}

function addTodo(todo){
    let newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
    newTodo.data('id', todo._id);
    if (todo.completed) {newTodo.addClass("done");}
    newTodo.addClass("task");
    $(".list").append(newTodo);
}

function removeTodo(todo) {
    let id = todo.data('id');
    let deleteUrl = `api/todos/${id}`;
     $.ajax({ 
       method: "DELETE", 
       url: deleteUrl 
      })
       .done(data => {
         todo.remove();
       })
       .catch(err => {
         console.log(err);
       });
}
