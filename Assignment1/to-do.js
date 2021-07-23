const todoTitle = document.querySelector('.todo-title');
const addTodoButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');

function removeTodo(event) {
  event.target.parentNode.remove();
}

/*let count = 0;
function likeTodo() {
  count += 1;
  //document.querySelector('.like-todo').innerHTML = like;*/
function addTodo() {
  // todo
  const todo = document.createElement('div');
  todo.classList.add('todo');
  //const inputs = document.querySelectorAll('input');
  //inputs.forEach(input => input.value = '');
  
  // text
  const text = document.createElement('line-todo');
  text.classList.add('line-todo')
  text.innerHTML = todoTitle.value;

  // button
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('remove-todo');
  button.innerHTML = 'ลบ';
  button.addEventListener('click', removeTodo);
  
  /*const button2 = document.createElement('input');
  button2.type = 'checkbox';
  button2.classList.add('line-todo');
  button2.addEventListener('click', checkTodo);
  // text, button => todo*/

  const button2 = document.createElement('button');
  button2.type = 'button';
  button2.classList.add('like-todo');
  button2.innerText = 'Like ' ;
  count = 0;
  button2.onclick = function() {
    count += 1;
  button2.innerHTML = 'Like '+ count;
  }
  

  //button2.addEventListener('click', likeTodo);
  
  todo.append(text, button, button2);

  // todo => todo list
  todoList.prepend(todo);

}

addTodoButton.addEventListener('click', addTodo)
//const inputs = document.querySelectorAll('input');
//inputs.forEach(input => input.value = '');
//addTodoButton.addEventListener(input => input.value = "");