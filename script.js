let playerResult = document.getElementById("current-result")
let playerFullTime = document.getElementById("entered-time")
let startButton = document.getElementById("start-button")
let counter = 0
let timeH = document.getElementById("all-time")
let timeSecond = 60

timeH.style.visibility = "hidden"

function startGame() {
    if (playerFullTime.value < 60 || playerFullTime.value > 300) {
        return alert("Time must be between 1 and 5 minutes !!!")
    }

    playerFullTime.disabled = true;
    startButton.disabled = true
    timeH.style.visibility = "visible"
    displayTime(playerFullTime.value)

    window.addEventListener("click", () => {
        counter++
        playerResult.textContent = counter
    })

    const countDown = setInterval(() => {
        playerFullTime.value--
        displayTime(playerFullTime.value)
        if (playerFullTime.value <= 0 || playerFullTime.value < 1) {
            clearInterval(countDown)
            playerFullTime.disabled = false
            startButton.disabled = false
            playerResult.textContent = 0
            if (alert(`Your result is ${counter}!!!`)) {
            } else {
                window.location.reload()
            }
        }
    }, 1000)
}

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = ` ${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}