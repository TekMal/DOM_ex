let display = document.getElementById("display")
display.disabled = true

let operators = document.getElementsByClassName("operator")
operators = Array.from(operators)

let buttons = Array.from(document.getElementsByTagName("button"))
numbers = buttons.filter((button) => {
    let number = Number(button.textContent)
    if (!isNaN(number)){
        return true
    }
    else{
        return false
    }
})
console.log(numbers)


// Create AC button
let acButton = document.createElement('button')
acButton.innerText = 'AC'

let displayParent = display.parentElement
displayParent.append(acButton)

//Create dot

/*let dotButton = document.createElement("button")
dotButton.innerText = "."

let divs = Array.from(document.firstElementChild.children[1].children)
  .filter(element => element.tagName === 'DIV')

let lastRowButtons = divs[4]
let zeroButton = lastRowButtons.firstElementChild
let plusButton = zeroButton.nextElementSibling
lastRowButtons.insertBefore(dotButton, plusButton)
*/

numbers.forEach((button) => {
    button.addEventListener("click", (event) => {
        const number = event.target.innerText
        display.value = display.value + number
    })
});
