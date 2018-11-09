// if
//
// else if
//
// else
//
// if you are younger than 18
//   you cannot enter the venue
//
// if you are between 18 and 21
//   you ncan enter but cannot drink
//
// otherwise
//   you can enter and drink
//

var age = Number(prompt("How old are you?"))
while (isNaN(age)) {
  age = Number(prompt("How old are you?"))
}

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue.")
} else if (age < 21) {
  console.log("You can enter, but cannot drink")
} else {
  console.log("You can enter and drink")
}

if (age < 0) {
  console.log("Error, you cannot be negative years old....")
}

if (age === 21) {
  console.log("Happy 21st birthday!!!")
}

if (age % 2 !== 0) {
  console.log("Your Age is odd.....")
}

if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
