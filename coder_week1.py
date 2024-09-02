def FirstReverse(strParam):

  newStr = ""
  for string in strParam:
    newStr = strParam[::-1]
  # print(newStr)
  return newStr

# keep this function call here 
print(FirstReverse(input()))

def FirstFactorial(num):
  factorial = 1
  
  while num > 1:
    factorial *= num 
    # print('factorial', factorial)
    num -= 1 
    # print('num', num)
  return factorial

# keep this function call here 
print(FirstFactorial(input()))

def LongestWord(sen):
  longest = ""
  compare = ""
  
  for char in sen:
    if char.isalpha() or char.isdigit():
      longest += char
      # print("longest first time:", longest)
    elif (not char.isalpha() or not char.isdigit()) and len(longest) > len(compare):
      compare = longest
      longest = ""
      # print("compare and longest", compare, longest)
    elif (not char.isalpha() or not char.isdigit()) and len(longest) < len(compare):
      longest = ""
      # print("longest second time", longest)
    elif (not char.isalpha() or not char.isdigit()) and len(longest) == len(compare):
      longest = ""
      # print("longest third time", longest)
  if len(longest) > len(compare):
    return longest
  elif len(longest) == len(compare):
    return compare
  else:
    return compare     

# keep this function call here 
print(LongestWord(input()))