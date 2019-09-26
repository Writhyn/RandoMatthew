var button = document.querySelector("#getRandom");
var text = document.querySelector("#matthew").innerHTML;
var displayDiv = document.querySelector("#displayText");

// Finds the ends of sentences and questions (including dialogue), and adds "@" for easy splitting.
text = text.replace(/\. /g, ".@").replace(/” /g, '”@').replace(/’ /g, "’@").replace(/\? /g, "?@");
var textArray = text.split("@");

var limit = textArray.length


// When button is clicked, generate random number based on how many array elements.
// Then displays the sentence in the window.
button.addEventListener("click", function() {
    var randomNumber = Math.floor(Math.random() * limit);
    var randomSentence = textArray[randomNumber];
    displayDiv.innerHTML = randomSentence;
})

// var button = document.querySelector("#getRandom");
// var text = document.querySelector("#testText").innerHTML;
// var displayDiv = document.querySelector("#displayText");

// text = text.replace(/\. /g, ". @").replace(/" /g, '" @');
// alert(text);

// var textArray = text.split("@");
// var limit = textArray.length

// alert(textArray);

// button.addEventListener("click", function() {
//     var randomNumber = Math.floor(Math.random() * limit);
//     var randomSentence = textArray[randomNumber];
//     displayDiv.innerHTML = randomSentence;
// })