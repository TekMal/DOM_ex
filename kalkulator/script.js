let display = document.getElementById("display")
display.disabled = true

let operators = document.getElementsByClassName("operator")
operators = Array.from(operators)

let numbers = document.getElementsByTagName("button")
numbers = Array.from(numbers).filter((value) => {
    let number = Number(value.textContent)
    if (!isNaN(number)){
        return true
    }
    else{
        return false
    }
})
console.log(numbers)