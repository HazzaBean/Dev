// create secretNumber

var secretNumber = 4

//ask user to Guessing

var guess = Number(prompt("Pick A Number"));
while (isNaN(guess)) {
  guess = Number(prompt("Please use a valid number"))
}
// check gueess vs number

if (guess > secretNumber) {
  alert("Lower")
  var guess = prompt("Pick A Number")
}

else (guess < secretNumber) {
  alert("Higher")
  var guess = prompt("Pick A Number")
}

if (guess === secretNumber) {
  alert("Correct!!!")
}
