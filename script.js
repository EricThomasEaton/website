let count = 0
let counter = document.getElementByID("counter")
counter.textContent = count

function subtract() {
    count -= 1
    counter.innerText = count
}

function add() {
    count += 1
    counter.textContent = count
}