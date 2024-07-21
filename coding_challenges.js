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
