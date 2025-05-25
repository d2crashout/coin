function getRandomZeroOrOne() {
  return Math.round(Math.random());
}

function coinFlip() {
    const result = document.getElementById('result');

    let randomNumber = getRandomZeroOrOne();

    if (randomNumber === 1) {
        result.innerHTML = "<h1>Heads</h1>"
    } if (randomNumber === 0) {
        result.innerHTML = "<h1>Tails</h1>"
    } else {
        result.innerHTML = "error"
        alert("error getting coin result")
    }
}