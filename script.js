var button = document.querySelector("#getRandom");
var text = document.querySelector("#matthew").innerHTML;
var displayDiv = document.querySelector("#displayText");

// Finds the ends of sentences and questions (including dialogue), and adds "@" for easy splitting.
text = text.replace(/\. /g, ".@").replace(/” /g, '”@').replace(/\.’ /g, ".’@").replace(/\? /g, "?@");
var textArray = text.split("@");
var limit = textArray.length

function deliverRandom() {
    var randomNumber = Math.floor(Math.random() * limit);
    var randomSentence = textArray[randomNumber];
    if (randomSentence.includes("“") && !randomSentence.includes("”")) {
        randomSentence = randomSentence + " ...”";
    } else if (!randomSentence.includes("“") && randomSentence.includes("”")) {
        randomSentence = "“... " + randomSentence;
    }
    displayDiv.innerHTML = randomSentence;
    displayDiv.classList.add("textEnter");
    setTimeout ( function() {
        displayDiv.classList.remove("textEnter");
    }, 1000);
}

// When button is clicked, generate random number based on how many array elements.
// Then displays the sentence in the window.
button.addEventListener("click", deliverRandom);

document.addEventListener("keypress", function(e) {
    if (e.which === 32) {
        deliverRandom();
    }
})
