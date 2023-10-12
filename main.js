let totalString = ''; //displayed on screen

const screenElement = document.getElementById('screen');
//buttons
const one = document.getElementById('n1');
const two = document.getElementById('n2');
const three = document.getElementById('n3');
const four = document.getElementById('n4');
const five = document.getElementById('n5');
const six = document.getElementById('n6');
const seven = document.getElementById('n7');
const eight = document.getElementById('n8');
const nine = document.getElementById('n9');
const clear = document.getElementById('clear');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const result = document.getElementById('result'); //result

//number pad eventListeners
one.addEventListener("click", function() {
    totalString = totalString.concat('1');
    screenElement.innerHTML = totalString;
});

two.addEventListener("click", function() {
    totalString = totalString.concat('2');
    screenElement.innerHTML = totalString;
});

three.addEventListener("click", function() {
    totalString = totalString.concat('3');
    screenElement.innerHTML = totalString;
});

four.addEventListener("click", function() {
    totalString = totalString.concat('4');
    screenElement.innerHTML = totalString;
});

five.addEventListener("click", function() {
    totalString = totalString.concat('5');
    screenElement.innerHTML = totalString;
});

six.addEventListener("click", function() {
    totalString = totalString.concat('6');
    screenElement.innerHTML = totalString;
});

seven.addEventListener("click", function() {
    totalString = totalString.concat('7');
    screenElement.innerHTML = totalString;
});

eight.addEventListener("click", function() {
    totalString = totalString.concat('8');
    screenElement.innerHTML = totalString;
});

nine.addEventListener("click", function() {
    totalString = totalString.concat('9');
    screenElement.innerHTML = totalString;
});

clear.addEventListener("click", function() {
    totalString = '';
    screenElement.innerHTML = totalString;
});

addition.addEventListener("click", function() {
    totalString = totalString.concat(' + ');
    screenElement.innerHTML = totalString;
});

subtraction.addEventListener("click", function() {
    totalString = totalString.concat(' - ');
    screenElement.innerHTML = totalString;
});

division.addEventListener("click", function() {
    totalString = totalString.concat(' / ');
    screenElement.innerHTML = totalString;
});

multiplication.addEventListener("click", function() {
    totalString = totalString.concat(' * ');
    screenElement.innerHTML = totalString;
});

result.addEventListener("click", function() {
    totalString = eval(totalString).toString();
    screenElement.innerHTML = totalString;
});
