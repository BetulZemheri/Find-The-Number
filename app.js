const number = document.getElementById("guess");
const button = document.getElementById("button");
const instruction = document.querySelector("#instruction");
let count = 0;
let result = "";

function randomnumber() {
  return Math.floor(Math.random() * 100 + 1);
}
const guess = randomnumber();

function findNumber() {
  if (Number(number.value) < 1 || Number(number.value) > 100) {
     // instruction.innerText = result;
    alert("Please Enter 1 to 100");
  } else {
    if (Number(number.value) < Number(guess)) {
      result = "Your guess is too low";
      instruction.innerText = result;
      count++;
      document.getElementById("counter").innerHTML = `${count}`;
    } else if (Number(number.value) > Number(guess)) {
      result = "Your guess is too high";
      instruction.innerText = result;
      count++;
      document.getElementById("counter").innerHTML = `${count}`;
    } else if (Number(number.value) === Number(guess)) {
      result = "Congratulations 🎉";
      instruction.innerText = result;
      count++;
      document.getElementById("counter").innerHTML = `${count}`;
      document.querySelector("#counter").textContent = "0";
    }
  }
}


button.addEventListener("click", () => {
    if (number.value !== "") {
        findNumber();
    } else {
        alert("Enter a number");
    }
});

