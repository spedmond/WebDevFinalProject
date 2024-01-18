const roll = document.getElementById("roll");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const doubles = document.getElementById("doubles");
const triples = document.getElementById("triples");

let isOne = false;
let isTwo = false;
let isThree = true;

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");

one.addEventListener("click", () => {
    doubles.style.display = "none";
    triples.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    isOne = true;
    isTwo = isThree = false;
});

two.addEventListener("click", () => {
    doubles.style.display = "block";
    triples.style.display = "none";
    d2.style.display = "inline";
    d3.style.display = "none";
    isTwo = true;
    isOne = isThree = false;
});

three.addEventListener("click", () => {
    doubles.style.display = "block";
    triples.style.display = "block";
    d2.style.display = "inline";
    d3.style.display = "inline";
    isThree = true;
    isOne = isTwo = false;
});

let numOnes = 0;
let numTwos = 0;
let numThrees = 0;
let numFours = 0;
let numFives = 0;
let numSixes = 0;
let lastSet = [];
let allRolls = [];

//https://stackoverflow.com/questions/16310423/addeventlistener-calls-the-function-without-me-even-asking-it-to
roll.addEventListener("click", display.bind());

function rollDice() {
    let result = Math.floor(Math.random()*5+1);
    allRolls.push(result);
    lastSet.push(result); //After rolling dice, use reset() to clear array.
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

const diceRolled = document.getElementById("dice-rolled");
const doublesRolled = document.getElementById("doubles-rolled");
const triplesRolled = document.getElementById("triples-rolled");
const mean = document.getElementById("mean");
function display() {
    d1.src = rollDice();
    if (isTwo) {
        d2.src = rollDice();
        if (doubleFound()) {
            numDoubles++;
            doublesRolled.textContent = numDoubles;
        }                                      
    }
    if (isThree) {
        d2.src = rollDice();
        d3.src = rollDice();
        if (tripleFound()) {
            numTriples++;
            doublesRolled.textContent = numDoubles;
            triplesRolled.textContent = numTriples;
        }
    }
    lastSet = [];
    diceRolled.textContent = numOnes+numTwos+numThrees+numFours+numFives+numSixes;
    median.textContent = findMedian();
    mean.textContent = (allRolls.reduce((total,currentValue)=>total+currentValue,0)/allRolls.length).toFixed(3);
}

function findMedian() {
    allRolls.sort();
    if (allRolls.length%2==0) {
        return (allRolls[allRolls.length/2]+allRolls[allRolls.length/2-1])/2;
    }
    return allRolls[Math.floor(allRolls.length/2)];
}

let numDoubles = 0;
//https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
function doubleFound() {
    let valuesSoFar = [];
    for (let i = 0; i < lastSet.length; i++) {
        let value = lastSet[i];
        if (valuesSoFar.indexOf(value) !== -1) {
            numDoubles++;
            return true;
        }
        valuesSoFar.push(value);
    }
}

let numTriples = 0;
function tripleFound() {
    if (doubleFound()) {
        numDoubles++;
    }
    if (lastSet[0]==lastSet[1] && lastSet[1]==lastSet[2]) {
        return true;
    }
}
