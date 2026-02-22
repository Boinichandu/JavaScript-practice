let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
  {
    text: "Learn HTML",
    unique:1
  },
  {
    text: "Learn CSS",
    unique:2
  },
  {
    text: "Learn JavaScript",
    unique:3
  }
];
let totalvalue=todoList.length;

function createAndAppendTodo(todo) {
    let checkId="check"+todo.unique;
    let labelId="label"+todo.unique;
    let ListId="delete"+todo.unique;
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id=ListId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick=function(){
      changedecoration(labelId);
  };
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkId);
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.id=labelId;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick=function(){
      deleteList(ListId);
  };
  deleteIconContainer.appendChild(deleteIcon);
  
}


function AddingFromHtml(labelItem,idValue) {
    let checkId="check"+idValue;
    let labelId="label"+idValue;
    let ListId="delete"+idValue;
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id=ListId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick=function(){
      changedecoration(labelId);
  };
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkId);
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = labelItem;
  labelContainer.id=labelId;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick=function(){
      deleteList(ListId);
  };
  deleteIconContainer.appendChild(deleteIcon);
  
}


for (let todo of todoList) {
  createAndAppendTodo(todo);
}
function changedecoration(labelId){
    let labeltoremove=document.getElementById(labelId);
    labeltoremove.classList.toggle("through")
}
function deleteList(ListId){
    let Listtoremove=document.getElementById(ListId);
    todoItemsContainer.removeChild(Listtoremove);
}
function AddnewItem(){
    totalvalue=totalvalue+1;
    let newlist=document.getElementById("todoUserInput");
    let newitem=newlist.value;
    newlist.value=""
    AddingFromHtml(newitem,totalvalue);
    
    
}
