let dice = document.getElementById("dice")
let counter = document.getElementById("counter")
let numbersUser = []
function removeExistingChildren() {
  while (dice.firstChild) {
    dice.removeChild(dice.lastChild)
  }
}

function changeColorOfCounter() {}

counter.addEventListener("click", changeColorOfCounter)

function changeFaces() {
  let randomNumber = Math.floor(Math.random() * 6) + 1
  console.log(randomNumber)
  numbersUser.push(randomNumber)

  for (let i = 0; i < numbersUser.length; i++) {
    if (numbersUser[i] === numbersUser[i - 1]) {
      counter.innerText = `You got: ${numbersUser[i]} again!`
      counter.style.color = "red"
    } else {
      counter.innerText = `You got: ${numbersUser[i]}`
      counter.style.color = "black"
    }
  }

  let arrayOfDots = []

  if (randomNumber === 1) {
    //Puting the class for different styling
    dice.className = "dice first-face"

    //Eliminating the child elements that already exist
    removeExistingChildren()

    //Creating the new dot
    let newDot = document.createElement("span")
    newDot.className = "dot"

    //Appending the new dot to the DOM
    arrayOfDots.push(newDot)
    dice.append(arrayOfDots[0])

    //Reseting the arrayOfDots
    arrayOfDots.length = 0
  } else if (randomNumber === 2) {
    //Puting the class for different styling
    dice.className = "dice second-face"

    //Eliminating the child elements that already exist
    removeExistingChildren()

    for (let i = 0; i < 2; i++) {
      //Creating the new dot
      let newDot = document.createElement("span")
      newDot.className = "dot"

      //Appending the new dot to the DOM
      arrayOfDots.push(newDot)
      dice.append(arrayOfDots[i])
    }
    //Reseting the arrayOfDots
    arrayOfDots.length = 0
  } else if (randomNumber === 3) {
    //Puting the class for different styling
    dice.className = "dice third-face"

    //Eliminating the child elements that already exist
    removeExistingChildren()

    for (let i = 0; i < 3; i++) {
      //Creating the new dot
      let newDot = document.createElement("span")
      newDot.className = "dot"

      //Appending the new dot to the DOM
      arrayOfDots.push(newDot)
      dice.append(arrayOfDots[i])
    }
    //Reseting the arrayOfDots
    arrayOfDots.length = 0
  } else if (randomNumber === 4) {
    //Puting the class for different styling
    dice.className = "dice fourth-face"

    //Eliminating the child elements that already exist
    removeExistingChildren()

    //Creating the column component and appending it to the DOM
    let firstColumn = document.createElement("div")
    firstColumn.className = "column"
    dice.append(firstColumn)

    for (let i = 0; i < 2; i++) {
      //Creating the newDot component
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)

      //Appending the arrayOfDots to the column component
      firstColumn.append(arrayOfDots[i])
    }
    //Reseting the arrayOfDots
    arrayOfDots.length = 0

    //Creating the column component and appending it to the DOM
    let secondColumn = document.createElement("div")
    secondColumn.className = "column"
    dice.append(secondColumn)

    for (let i = 0; i < 2; i++) {
      //Creating the newDot component
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)

      //Appending the arrayOfDots to the column component
      secondColumn.append(arrayOfDots[i])
    }
  } else if (randomNumber === 5) {
    //Puting the class for different styling
    dice.className = "dice fifth-face"

    //Eliminating the child elements that already exist
    removeExistingChildren()

    //Creating the column component and appending it to the DOM
    let firstColumn = document.createElement("div")
    firstColumn.className = "column"
    dice.append(firstColumn)

    for (let i = 0; i < 2; i++) {
      //Creating the newDot component
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)

      //Appending the arrayOfDots to the column component
      firstColumn.append(arrayOfDots[i])
    }
    //Reseting the arrayOfDots
    arrayOfDots.length = 0

    //Creating a single column and a single dot
    let secondColumn = document.createElement("div")
    secondColumn.className = "column"
    dice.append(secondColumn)

    let newDot = document.createElement("span")
    newDot.className = "dot"
    secondColumn.append(newDot)

    //Creating the column component and appending it to the DOM
    let thirdColumn = document.createElement("div")
    thirdColumn.className = "column"
    dice.append(thirdColumn)

    for (let i = 0; i < 2; i++) {
      //Creating the newDot component
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)

      //Appending the arrayOfDots to the column component
      thirdColumn.append(arrayOfDots[i])
    }
  } else if (randomNumber === 6) {
    //Puting the class for different styling
    dice.className = "dice sixth-face"

    //Eliminating the child elements that already exist
    removeExistingChildren()

    //Creating the column component and appending it to the DOM
    let firstColumn = document.createElement("div")
    firstColumn.className = "column"
    dice.append(firstColumn)

    for (let i = 0; i < 3; i++) {
      //Creating the newDot component
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)

      //Appending the arrayOfDots to the column component
      firstColumn.append(arrayOfDots[i])
    }
    //Reseting the arrayOfDots
    arrayOfDots.length = 0

    //Creating the column component and appending it to the DOM
    let secondColumn = document.createElement("div")
    secondColumn.className = "column"
    dice.append(secondColumn)

    for (let i = 0; i < 3; i++) {
      //Creating the newDot component
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)

      //Appending the arrayOfDots to the column component
      secondColumn.append(arrayOfDots[i])
    }
  }
}

dice.addEventListener("click", changeFaces)
