loading = true
loaded = false
loadDots = "................."
if (loading) {
    window.alert("Loading The Golden Cake (Online)...")
    console.log(loadDots)
} else {
    loaded = true
    console.log("Opened The Golden Cake!")
}

const inputName = document.createElement("input")
inputName.placeholder = "What is your username?"

const inputPassword = document.createElement("input")
inputPassword.placeholder = "What is your password?"

const welcomeExclamation = "Welcome `${inputName}`! You have just entered The Golden Cake. Let's play!"

console.log(welcomeExclamation)

const health = 20
const stars = 13

console.log(health, stars)


function ruin() {
  console.log("fejijewk krtkr fejijewk krtkr fejijewk krtkr fejijewk krtkr")
}
ruin()