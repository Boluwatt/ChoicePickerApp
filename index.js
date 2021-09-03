const list = document.querySelector("#list");
const choice = document.getElementById("choice");
const message = document.querySelector(".msg");
const button = document.getElementById("btn");
const choicebutton = document.getElementById("choicebtn")

button.addEventListener("click", addChoice);

function addChoice(e) {
  const choiceInput = choice.value;
  console.log(choiceInput);

  if (choiceInput === "") {
    message.classList.add("error");
    message.innerHTML = "Please enter a Choice";

    setTimeout(() => message.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${choiceInput}`));

    list.appendChild(li);

    choice.value = "";

    // console.log(typeof (list))
    // const hello = Object.entries(list)
    // console.log(hello)


  }
}
const choiceList = ["eat rice", "eat beans", "eat noodles"]

const pickChoice = () => `${choiceList[Math.floor(Math.random() * choiceList.length)]}`;

// pickChoice("eat rice", "eat beans", "eat noodles")

// choicebutton.addEventListener("click", pickChoice);

console.log(pickChoice)