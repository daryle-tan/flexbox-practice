//#1
function StringChallenge(str) {
  let x = 0
  let o = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x += 1
    } else if (str[i] === "o") {
      o += 1
    }
  }

  if (x === o) {
    return true
  } else {
    return false
  }
}

//#2 (2 wrong)
function StringChallenge(str) {
  let indexA = 1
  let indexB = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      indexA = i
    } else if (str[i] === "b") {
      indexB += i - 1
    }
  }
  let exactlyThree = Math.abs(indexA - indexB)

  if (exactlyThree === 3) {
    return true
  } else {
    return false
  }
}

//#3
function ArrayChallenge(arr) {
  let sequenceChange = 0
  let increase = false
  let decrease = false
  let change = false

  if (arr.length < 3) {
    return -1
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && !decrease) {
      change = true
      decrease = true
      sequenceChange += i
    } else if (arr[i] < arr[i + 1] && !increase) {
      change = true
      increase = true
      sequenceChange += i
    }
  }

  if (change && decrease && increase) {
    return sequenceChange
  } else {
    return -1
  }
}

//#4
function ArrayChallenge(arr) {
  if (meanHelper(arr) === modeHelper(arr)) {
    return 1
  } else {
    return 0
  }
}

function meanHelper(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

function modeHelper(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count = arr[i]
    } else if (arr[i] === arr[i - 1]) {
      count = arr[i]
    }
  }
  return count
}

//#5
//#1
function StringChallenge(str) {
  let x = 0
  let o = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x += 1
    } else if (str[i] === "o") {
      o += 1
    }
  }

  if (x === o) {
    return true
  } else {
    return false
  }
}

//#2 (2 wrong)
function StringChallenge(str) {
  let indexA = 1
  let indexB = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      indexA = i
    } else if (str[i] === "b") {
      indexB += i - 1
    }
  }
  let exactlyThree = Math.abs(indexA - indexB)

  if (exactlyThree === 3) {
    return true
  } else {
    return false
  }
}

//#3
function ArrayChallenge(arr) {
  let sequenceChange = 0
  let increase = false
  let decrease = false
  let change = false

  if (arr.length < 3) {
    return -1
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && !decrease) {
      change = true
      decrease = true
      sequenceChange += i
    } else if (arr[i] < arr[i + 1] && !increase) {
      change = true
      increase = true
      sequenceChange += i
    }
  }

  if (change && decrease && increase) {
    return sequenceChange
  } else {
    return -1
  }
}

//#4
function ArrayChallenge(arr) {
  if (meanHelper(arr) === modeHelper(arr)) {
    return 1
  } else {
    return 0
  }
}

function meanHelper(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

function modeHelper(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count = arr[i]
    } else if (arr[i] === arr[i - 1]) {
      count = arr[i]
    }
  }
  return count
}

//#5
function ArrayChallenge(arr) {
  let x
  let rangeA = []
  let rangeB = []

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i === 1) {
      rangeA.push(arr[i])
    } else if (i === 2 || i === 3) {
      rangeB.push(arr[i])
    } else {
      x = arr[i]
    }
  }

  let rangeADifference = Math.abs(rangeA[0] - rangeA[1]) + 1
  let rangeBDifference = Math.abs(rangeB[0] - rangeB[1]) + 1

  while (x < rangeADifference && rangeA[0] < rangeA.at(-1)) {
    rangeA.unshift(rangeA[0] + 1)
  }
  rangeA.pop()

  while (x < rangeBDifference && rangeB[0] < rangeB.at(-1)) {
    rangeB.unshift(rangeB[0] + 1)
  }
  rangeB.pop()
  let newArray = []

  for (let j = 0; j < rangeA.length; j++) {
    for (let k = 0; k < rangeB.length; k++) {
      if (rangeA[j] === rangeB[k]) {
        newArray.push(rangeA[j])
      }
    }
  }

  if (x <= newArray.length) {
    return true
  } else {
    return false
  }
}

//#6
function MathChallenge(num) {
  let count = 0
  // turn num into a string
  let numToString = num.toString().split("")
  // let newNum = 1;

  if (numToString.length === 1) {
    return count
  }
  console.log(num)
  while (numToString.length > 1) {
    num = 1
    numToString.forEach((numString) => {
      num *= Number(numString)
      // num = newNum;
      numToString = num.toString().split("")

      console.log("newArray", num, count, numToString)
      return num
    })
    count++
  }
  console.log("Here", count, numToString)
  return count
}

//#7
