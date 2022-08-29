// Oppgave 1
const text = document.getElementById("remove")
const button = document.getElementById("remove-btn")

button.addEventListener("click", function() {
    text.hidden = true;
})

// Oppgave 2
const originalText = document.getElementById("change")
const changeBtn = document.getElementById("change-btn")

changeBtn.addEventListener("click", function () {
    originalText.textContent = "Denne teksten har nå blitt endret";
})

// Oppgave 3
const textPrint = document.getElementById("input-text")
const textInput = document.querySelector("input")

textInput.addEventListener("keyup", function (e) {
    textPrint.textContent = e.target.value;
})

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const list = document.getElementById("ul")
const printList = document.getElementById("write-list")

const createListElements = () => {
    myList.forEach((word) => {
      const li = document.createElement('li');
      li.innerHTML = word;
      list.appendChild(li);
    });
  };

  printList.addEventListener("click", createListElements)


// Oppgave 5
const createBtn = document.getElementById("create")
const styleSelect = document.getElementById("select")
const printText = document.getElementById("placeholder")
const inputField = document.querySelector("#text")

const handleChange = () => {
  textStyle = styleSelect.value
  writtenText = inputField.value
}

const createSelectedElement = () => {
  const textTag = document.createElement(textStyle);
  textTag.innerHTML = writtenText;
  printText.appendChild(textTag)
}

inputField.addEventListener("keyup", handleChange)
styleSelect.addEventListener("change", handleChange)
createBtn.addEventListener("click", createSelectedElement)
handleChange()


// Oppgave 6


// Oppgave 7
// Oppgave 8
