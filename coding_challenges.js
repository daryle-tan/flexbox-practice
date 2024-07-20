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

//#2
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
