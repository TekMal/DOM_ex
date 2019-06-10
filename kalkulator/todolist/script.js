//przykladowe tw. h1
const title = document.createElement("h1")
title.innerText = "Hello"
const toDoInput = document.getElementById("todo-input")
toDoInput.before(title)



function createNewItem(input){
const todoItem = document.createElement("li")
todoItem.innerHTML = input + " <button>x</button>"
const toDoList = document.getElementById("todo-list")
toDoList.append(todoItem)
}


const addButton = document.getElementById("todo-add-button")

addButton.addEventListener('click', function(event) {
    createNewItem(toDoInput.value)
    toDoImput.value = ""
})