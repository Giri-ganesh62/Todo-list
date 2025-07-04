const todoList = [{
    name:'make dinner',
    dueDate:'2025-6-16'
 },{
    name:'wash dishes',
    dueDate:'2025-6-17'
 } ]; 

renderTodoList();

function renderTodoList(){
        let todoListHtml = '';

        todoList.forEach((todoObject, index) => {
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate
        const { name, dueDate} = todoObject;// this is destructuring of object
        const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
       
        `;
        todoListHtml += html;

        });
   

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach( (deleteButton , index) => {
          deleteButton.addEventListener('click', () => {
             todoList.splice(index,1);
        renderTodoList();
          })

        })

}

 
document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
  addToDo();
})

function addToDo(){
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

//   console.log(name);

  todoList.push({
  //  name: name,
   //  dueDate: dueDate,
   name,
   dueDate
});
  

  inputElement.value = '';

  renderTodoList();
}