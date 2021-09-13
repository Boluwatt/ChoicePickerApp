const list = document.querySelector("#list");
const choice = document.getElementById("choice");
const message = document.querySelector(".msg");
const button = document.getElementById("btn");
const choicebutton = document.getElementById("choicebtn")

button.addEventListener("click", addChoice);

let choiceList = []

function addChoice(e) {
  const choiceInput = choice.value;
  console.log(choiceInput);

  if (choiceInput === "") {
    message.classList.add("error");
    message.innerHTML = "Please enter a Choice";

    setTimeout(() => message.remove(), 3000);
  } else {
    const li = document.createElement("li");
    
    choiceList.push(choiceInput)
    
    li.appendChild(document.createTextNode(`${choiceInput}`));

    list.appendChild(li);

    choice.value = "";

  }
}

function getRandomIndex(arr){
var length = arr.length;
return Math.floor(Math.random() * (length - 0))
}

console.log(getRandomIndex(choiceList))

console.log(choiceList[getRandomIndex(choiceList)])