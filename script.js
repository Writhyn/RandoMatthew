const randButton = document.querySelector("#getRandom");
const text = document.querySelector("#matthew").textContent;
const displayDiv = document.querySelector("#displayText");
const contextCheck = document.querySelector("#contextCheck");
const greekButton = document.querySelector("#greek");
let number = 0;
let sentence = "";

// Finds the ends of sentences and questions (including dialogue), and adds "@" for easy splitting.
const textToSplit = text.replace(/\. /g, ".@").replace(/\! /g, "!@").replace(/” /g, '”@').replace(/\.’ /g, ".’@").replace(/\? /g, "?@");
const textArray = textToSplit.split("@");
const limit = textArray.length;

//generate random number, determine if start/end quotes are needed, then display sentence.


function checkForQuotes() {
    if (sentence.includes("“") && !sentence.includes("”")) {
        sentence = sentence + " ...”";
    } else if (!sentence.includes("“") && sentence.includes("”")) {
        sentence = "“... " + sentence;
    } 
}

function deliverRandomSentence() {
    number = Math.floor(Math.random() * limit);
    sentence = textArray[number];

    checkForQuotes();

    displayDiv.textContent = sentence;

    //Animation
    displayDiv.classList.add("textEnter");
    setTimeout ( function() {
        displayDiv.classList.remove("textEnter");
    }, 1000);
}

function checkContext() {
    number++;
    sentence = textArray[number];
    checkForQuotes();
    displayDiv.textContent = sentence;
    
}


//Event listeners for button and keypress
randButton.addEventListener("click", deliverRandomSentence);

contextCheck.addEventListener("click", checkContext);

document.addEventListener("keypress", function(e) {
    if (e.which === 32) {
        deliverRandomSentence();
    }
})
