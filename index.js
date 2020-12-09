let dice = document.getElementById("dice")

function changeFaces() {
  let randomNumber = Math.floor(Math.random() * 6) + 1
  let arrayOfDots = []
  console.log(randomNumber)

  if (randomNumber === 1) {
    //Puting the class for different styling
    dice.className = "dice first-face"
    //Eliminating the child elements that already exist
    while (dice.firstChild) {
      dice.removeChild(dice.lastChild)
    }
    //Creating the new dot
    let newDot = document.createElement("span")
    newDot.className = "dot"
    //Appending the new dot to the DOM
    arrayOfDots.push(newDot)
    dice.append(arrayOfDots[0])
    arrayOfDots.length = 0
  } else if (randomNumber === 2) {
    //Puting the class for different styling
    dice.className = "dice second-face"
    while (dice.firstChild) {
      dice.removeChild(dice.lastChild)
    }
    for (let i = 0; i < 2; i++) {
      let newDot = document.createElement("span")
      newDot.className = "dot"

      arrayOfDots.push(newDot)
      console.log(arrayOfDots)
      dice.append(arrayOfDots[i])
    }
  } else if (randomNumber === 3) {
    //Puting the class for different styling
    dice.className = "dice third-face"
    //Eliminating the child elements that already exist
    while (dice.firstChild) {
      dice.removeChild(dice.lastChild)
    }
    for (let i = 0; i < 3; i++) {
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)
      console.log(arrayOfDots)
      dice.append(arrayOfDots[i])
    }
  } else if (randomNumber === 4) {
    //Puting the class for different styling
    dice.className = "dice fourth-face"
    //Eliminating the child elements that already exist
    while (dice.firstChild) {
      dice.removeChild(dice.lastChild)
    }
    let firstColumn = document.createElement("div")
    firstColumn.className = "column"
    dice.append(firstColumn)
    for (let i = 0; i < 2; i++) {
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)
      console.log(arrayOfDots)
      firstColumn.append(arrayOfDots[i])
    }
    arrayOfDots.length = 0
    let thirdColumn = document.createElement("div")
    thirdColumn.className = "column"
    dice.append(thirdColumn)
    for (let i = 0; i < 2; i++) {
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)
      console.log(arrayOfDots)
      thirdColumn.append(arrayOfDots[i])
    }
  } else if (randomNumber === 5) {
    //Puting the class for different styling
    dice.className = "dice fifth-face"
    //Eliminating the child elements that already exist
    while (dice.firstChild) {
      dice.removeChild(dice.lastChild)
    }
    let firstColumn = document.createElement("div")
    firstColumn.className = "column"
    dice.append(firstColumn)
    for (let i = 0; i < 2; i++) {
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)
      console.log(arrayOfDots)
      firstColumn.append(arrayOfDots[i])
    }
    arrayOfDots.length = 0

    let secondColumn = document.createElement("div")
    secondColumn.className = "column"
    dice.append(secondColumn)
    let newDot = document.createElement("span")
    newDot.className = "dot"
    secondColumn.append(newDot)

    let thirdColumn = document.createElement("div")
    thirdColumn.className = "column"
    dice.append(thirdColumn)
    for (let i = 0; i < 2; i++) {
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)
      console.log(arrayOfDots)
      thirdColumn.append(arrayOfDots[i])
    }
  } else if (randomNumber === 6) {
    //Puting the class for different styling
    dice.className = "dice sixth-face"
    //Eliminating the child elements that already exist
    while (dice.firstChild) {
      dice.removeChild(dice.lastChild)
    }
    let firstColumn = document.createElement("div")
    firstColumn.className = "column"
    dice.append(firstColumn)
    for (let i = 0; i < 3; i++) {
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)
      console.log(arrayOfDots)
      firstColumn.append(arrayOfDots[i])
    }
    arrayOfDots.length = 0
    let thirdColumn = document.createElement("div")
    thirdColumn.className = "column"
    dice.append(thirdColumn)
    for (let i = 0; i < 3; i++) {
      let newDot = document.createElement("span")
      newDot.className = "dot"
      arrayOfDots.push(newDot)
      console.log(arrayOfDots)
      thirdColumn.append(arrayOfDots[i])
    }
  }
}

dice.addEventListener("click", changeFaces)

// Write your code here 👇

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate span
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
