const todoTitle = document.querySelector('.todo-title');
const addTodoButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');

function removeTodo(event) {
  event.target.parentNode.remove();
}

function checkTodo(event) {
    if (event.target.checked == true){
        event.target.parentNode.style.color = "red";
    }
    else{
        event.target.parentNode.style.color = "black";
    }
  }
let count = 0;
function likeTodo() {
  count += 1;
  document.querySelector('.like-todo').innerHTML = like;  
}

function getLike() {
  likeTodo();
}

function addTodo() {
  // todo
  const todo = document.createElement('div');
  todo.classList.add('todo');

  // text
  const text = document.createElement('h1');
  text.classList.add('line-todo')
  text.innerHTML = todoTitle.value;

  // button
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('remove-todo');
  button.innerHTML = 'ลบ';
  button.addEventListener('click', removeTodo);
  
  const button2 = document.createElement('input');
  button2.type = 'checkbox';
  button2.classList.add('line-todo');
  button2.addEventListener('click', checkTodo);
  // text, button => todo

  const button3 = document.createElement('button');
  button3.type = 'button';
  button3.classList.add('like-todo');
  button3.innerHTML = 'like '+ count;
  button3.addEventListener('click', likeTodo);
  
  todo.append(text, button, button2, button3);

  // todo => todo list
  todoList.prepend(todo);

}

addTodoButton.addEventListener('click', addTodo);