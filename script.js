let roll = document.getElementById("roll");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let doubles = document.getElementById("doubles");
let triples = document.getElementById("triples");

let isOne = false;
let isTwo = false;
let isThree = true;

one.addEventListener("click", () => {
    doubles.style.display = "none";
    triples.style.display = "none";
    isOne = true;
    isTwo = isThree = false;
});

two.addEventListener("click", () => {
    doubles.style.display = "block";
    triples.style.display = "none";
    isTwo = true;
    isOne = isThree = false;
});

three.addEventListener("click", () => {
    doubles.style.display = "block";
    triples.style.display = "block";
    isThree = true;
    isOne = isTwo = false;
});

let numOnes = 0;
let numTwos = 0;
let numThrees = 0;
let numFours = 0;
let numFives = 0;
let numSixes = 0;
let lastRoll = 0;
let allRolls = [];

roll.addEventListener("click", display());

function rollDice() {
    let result = Math.floor(Math.random()*5+1);
    allRolls.push(result);
    if (result==1) {
        numOnes++;
        return "images/dice/one.png";
    }
    else if (result==2) {
        numTwos++;
        return "images/dice/two.png";
    }
    else if (result==3) {
        numThrees++;
        return "images/dice/three.png";
    }
    else if (result==4) {
        numFours++;
        return "images/dice/four.png";
    }
    else if (result==5) {
        numFives++;
        return "images/dice/five.png";  
    }
    else if (result==6) {
        numSixes++;
        return "images/dice/six.png";
    }
}

function display() {
    d1.src = rollDice();
    if (isTwo) {
        d2.src = rollDice();
        if (isThree) {
            d3.src = rollDice();
        }
    }
}
