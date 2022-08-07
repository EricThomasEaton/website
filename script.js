let counter = document.getElementById("counter")
let count = 0
counter.textContent = count

function subtract() {
    count -= 1
    counter.textContent = count
}

function add() {
    count += 1
    counter.textContent = count
}