// wait for the DOM to finish loading before running the game
//get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit"){
                alert("clicked Submit")
            }  else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
            }
        })
    }
})

/** The main game 'loop', called when the script is first laded
 * and after the user's answer has been processed
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}



function checkAnswer(){

}

function calculateCorrectAnswer() {

}

function incrementScore(){



}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(){

}

function displaySubstractQuestion() {

}

function displayMultiplyQuestion() {

}