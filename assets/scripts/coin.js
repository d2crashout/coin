function getRandomZeroOrOne() {
  return Math.round(Math.random());
}

function coinflip() {
    const result = document.getElementById('result');
    const coin = document.getElementById('coin');

    // Start flipping animation
    coin.classList.add('flipping');

    // Clear previous result
    result.innerHTML = "";

    // Wait for animation to complete (1s), then show result
    setTimeout(() => {
        coin.classList.remove('flipping');

        let randomNumber = getRandomZeroOrOne();
        console.log("Random number:", randomNumber); // optional debug

        if (randomNumber === 1) {
            result.innerHTML = "<h1>Heads</h1>";
            coin.src = "assets/images/heads.jpg"; // update to show heads image
        } else if (randomNumber === 0) {
            result.innerHTML = "<h1>Tails</h1>";
            coin.src = "assets/images/tails.jpg"; // update to show tails image
        } else {
            result.innerHTML = "error";
            alert("error getting coin result");
        }
    }, 1000); // match animation duration
}
