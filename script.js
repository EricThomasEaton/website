let everything = document.getElementById("columns")
let scanBtn = document.getElementById("scan-btn")
let caesar = document.getElementById("caesar")
let accessDenied = document.getElementById("access-denied")
let createProfile = document.getElementById("create-profile")

function scan() {
    createProfile.style.display = "block"
    accessDenied.style.display = "none"
    scanBtn.style.display = "none"
    caesar.style.display = "block"
    function scanComplete() {
        caesar.style.display = "none"
        everything.style.visibility = "visible"
        createProfile.style.display = "none"
    }
    setTimeout(scanComplete, 3000)
}

let glassOfWater = document.getElementById("glass-of-water")

function drinkWater() {
    glassOfWater.style.display = "block"
}

let weapons = document.getElementById("weapons")
let weaponsHeader = document.getElementById("weapons-header")

function manufactureWeapons() {
    weapons.style.display = "block"
    weaponsHeader.textContent = "//Protocol 'lock-n-load.exe' intializing..."
}

