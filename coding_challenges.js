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

//#2 8/10
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

//#7 8/10
function ArrayChallenge(arr) {
  let spaces = 0
  let enemy = []
  let hero

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      hero = i
    } else if (arr[i] === 2) {
      enemy.push(i)
    }
  }

  for (let j = 0; j < enemy.length; j++) {
    if (enemy.length === 0) {
      return spaces
    } else if (Math.abs(enemy[j] - hero) > Math.abs(enemy[j + 1] - hero)) {
      enemy.splice(j, 1)
    } else if (Math.abs(enemy[j] - hero) < Math.abs(enemy[j - 1] - hero)) {
      enemy.splice(j - 1, 1)
    }
    spaces = Math.abs(enemy[0] - hero)
  }
  return spaces
}

//#8 9/10
function SearchingChallenge(str) {
  const userName = str.split("")

  for (let i = 0; i < userName.length; i++) {
    if (
      userName.length >= 4 &&
      userName.length <= 25 &&
      userName[0].match(/[a-z]/i) &&
      userName[i].match(/[a-zA-Z0-9_]$/) &&
      userName.length - 1 != "_"
    ) {
      return true
    } else {
      return false
    }
  }
}

//#9 8/10
function ArrayChallenge(arr) {
  let largest = 0
  let largestIndex
  let total = 0
  let equals
  // find the largest number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
      largestIndex = i
    }
    total += arr[i]
  }

  if (arr[largestIndex] === largest) {
    arr.splice(largestIndex, 1)
  }
  console.log(
    "largest",
    largest,
    "total",
    total,
    "arr",
    arr,
    "index",
    largestIndex,
  )
  // add up the other numbers to determine if any sum can equal the largest
  let sumTotal = total - largest
  console.log("total", total, "sumTotal", sumTotal)

  for (let j = 0; j < arr.length; j++) {
    if (sumTotal - arr[j] === largest) {
      equals = true
      break
    } else {
      equals = false
    }
  }
  return equals
}

//#10 9/10
function StringChallenge(strArr) {
  const firstEl = strArr[0].split("")
  const secondEl = parseInt(strArr[1])
  let newArr = new Array(secondEl)
  let down = true
  let row = 0

  if (firstEl.length < secondEl) {
    return strArr[0]
  }

  for (let i = 0; i < secondEl; i++) {
    newArr[i] = ""
  }

  let newStrReturn = ""

  for (let i = 0; i < firstEl.length; ++i) {
    newArr[row] += firstEl[i]

    if (row == secondEl - 1) {
      down = false
    } else if (row == 0) {
      down = true
    }

    if (down) {
      row++
    } else {
      row--
    }
  }

  for (let j = 0; j < newArr.length; j++) {
    newStrReturn += newArr[j]
  }
  return newStrReturn
}

//#11 7/10
function ArrayChallenge(arr) {
  // hunger level 0 - 5
  // sandwiches 1 -20
  let sandwiches = arr.shift()
  // determine how many sandwiches to feed which person based on their hunger
  function hungerLevelNotSame(arr) {
    let sorted = arr.slice().sort()
    return sorted[0] != sorted[arr.length - 1]
  }

  function largestDifference(arr) {
    let differences = []
    for (let i = 0; i < arr.length - 1; i++) {
      differences.push(Math.abs(arr[i] - arr[i + 1]))
    }
    return differences.sort(function (a, b) {
      return b - a
    })[0]
  }

  function whoToFeed(arr, num) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (Math.abs(arr[i] - arr[i + 1]) >= num) {
        arr[i] > arr[i + 1] ? arr[i]-- : arr[i + 1]--
        sandwiches--
      }
      if (sandwiches === 0 || !hungerLevelNotSame(arr)) break
    }
  }

  for (let i = sandwiches; i > 0 && hungerLevelNotSame(arr); i--) {
    if (largestDifference(arr) >= 3) {
      whoToFeed(arr, 3)
    } else if (largestDifference(arr) === 2) {
      whoToFeed(arr, 2)
    } else if (largestDifference(arr) === 1) {
      whoToFeed(arr, 1)
    }
  }

  return arr
    .map(function (x, i, arr) {
      return arr[i + 1] === undefined ? 0 : Math.abs(x - arr[i + 1])
    })
    .reduce(function (a, b) {
      return a + b
    })
}

//#12 5/5
function SearchingChallenge(strArr) {
  let strArrSize = strArr.length
  let rowSize
  let holes = 0
  let innerArr = []
  let combineArr = []
  console.log("strArrSize", strArrSize)
  for (let i = 0; i < strArr.length; i++) {
    innerArr.push(strArr[i].split(""))
  }
  strArrSize = strArrSize * innerArr[0].length
  rowSize = innerArr[0].length

  for (let i = 0; i < innerArr.length; i++) {
    for (let j = 0; j < innerArr[i].length; j++) {
      combineArr.push(innerArr[i][j])
    }
  }
  console.log(combineArr, "combined")
  console.log("innerArr", innerArr, strArrSize, rowSize)
  for (let i = 0; i < combineArr.length; i++) {
    if (
      combineArr[i] == 0 &&
      combineArr[i + 1] == 0 &&
      combineArr[i - 1] != 0
    ) {
      holes++

      console.log("next el", combineArr[i], "holepostion")
    } else if (combineArr[i] == 0 && combineArr[i + rowSize] == 0) {
      holes++

      console.log("bottomMatch", i, i + rowSize, combineArr[i])
    }

    console.log("holes", holes)
  }

  return holes
}

// Looping a  triangle
function loopingTriangle() {
  let hash

  for (let i = 0; i < 7; i++) {
    hash += "#"
    print(hash)
  }
}

// FizzBuzz
function fizzBuzz() {
  let num = 1

  while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz")
    } else if (num % 3 === 0) {
      console.log("Fizz")
    } else if (num % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(num)
    }
    num++
  }
}

// Chessboard
function chessBoard(size) {
  let hash = ""

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        hash += " "
      } else {
        hash += "#"
      }
    }
    hash += "\n"
  }
  console.log(hash)
}

// Minimum
function min(num1, num2) {
  if (num1 < num2) {
    return num1
  } else {
    return num2
  }
}

console.log(min(0, 10))
// → 0
console.log(min(0, -10))
// → -10

// Recursion
function isEven(num) {
  if (num % 2 === 0) {
    return true
  } else if (num % 2 === 1) {
    return false
  } else {
    return isEven(Math.abs(num))
  }
}
console.log(isEven(50))
// → true
console.log(isEven(75))
// → false
console.log(isEven(-1))
// → false

// Bean Counting
function countBs(word) {
  let count = 0

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "B") {
      count++
    }
  }
  return count
}

function countChar(word, char) {
  let count = 0

  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++
    }
  }
  return count
}
console.log(countBs("BOB"))
// → 2
console.log(countChar("kakkerlak", "k"))
// → 4

// Sum of a range
const range = (num1, num2, step = 1) => {
  let rangeHolder = []
  let index = num1

  if (step < 0) {
    for (let i = index; i >= num2; i += step) {
      rangeHolder.push(i)
    }
  } else {
    for (let i = index; i <= num2; i += step) {
      rangeHolder.push(i)
    }
  }
  console.log(num1, rangeHolder)
  return rangeHolder
}

const sum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55

// Reversing an array
function reverseArray(arr) {
  let newArr = []
  let moved_char
  while (arr.length > 0) {
    moved_char = arr.pop()
    newArr.push(moved_char)
  }
  // console.log(newArr)
  return newArr
}

function reverseArrayInPlace(arr) {
  let first
  let last
  let halfLength = Math.floor(arr.length / 2)
  console.log(halfLength)
  for (let i = 0; i < halfLength; i++) {
    first = arr[arr.length - 1 - i]
    last = arr[i]
    arr[i] = first
    arr[arr.length - 1 - i] = last
    console.log(first, "here", arr[arr.length - 1])
  }
}

let myArray = ["A", "B", "C"]
console.log(reverseArray(myArray))
// → ["C", "B", "A"];
console.log(myArray)
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]

// A list
function arrayToList(arr) {
  list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list }
  }
  // console.log(list)
  return list
}

// Converts list to array
function listToArray(list) {
  let arr = []
  let node = list
  while (node) {
    // Traverse the linked list
    arr.push(node.value) // Add the value to the array
    node = node.rest // Move to the next node
  }
  return arr
}

// Adds an element to the front of the list
function prepend(element, list) {
  return { value: element, rest: list } // New list node where value is the element and rest is the original list
}

// Returns the element at the given position
function nth(list, n) {
  if (!list) return undefined // If the list is empty, return undefined
  else if (n === 0) return list.value // If n is 0, return the current value
  else return nth(list.rest, n - 1) // Recur on the rest of the list, reducing n
}

console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])))
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1))
// → 20

// Deep comparison
function deepEqual(a, b) {
  if (a === b) return true

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false

  let keysA = Object.keys(a),
    keysB = Object.keys(b)

  if (keysA.length != keysB.length) return false

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
  }

  return true
}
