const numberButtons = document.querySelectorAll('.numbers')
const operationButtons = document.querySelectorAll('.operations')
const equalsButton = document.querySelector('#equals')
const allClearButton = document.querySelector('#clear')
// const deleteButton = document.querySelector('#delete')

const display = document.querySelector("#calculation-window")

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}
// clear() {
//     this.currentOperand = ' '
//     this.previousOperand = ' '
//     this.operation = undefined
// }
// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
// // delete() {
    
// // }

//     numberButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             calculator.appendNumber(button.innerText)
//             calculator.updateDisplay()
//         })
//     })

// appendNumber(number) {
//     if (number === '.' && this.currentOperand.includes('.')) return
// }

// chooseOperation(operation) {

// }

// getComputedStyle() {

// }

// updateDisplay() {

// }



let buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener("click", (event) => {
        console.log(button.innerText)
        let newElement = document.createElement('div')
        let text1 = document.createTextNode(button.innerText)
        newElement.appendChild(text1)
        display.appendChild(newElement)
        console.log(eval('text1'))
        


  });
}
