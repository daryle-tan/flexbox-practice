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
