# String Scramble
def StringScramble(str1,str2):
  match = []
  for i, letter in enumerate(str2):
      if str1[i] in str2:
        match.append(str2[i])
        # print(len(match),len(str2))
  if len(match) == len(str2):
    return True
  else:
    return False


# keep this function call here 
print(StringScramble(input()))

# Palindrome
def PalindromeTwo(strParam):
  match = False
  strContainer = []
  for letter in strParam:
    if letter.isalpha():
      strContainer.append(letter)
  newStr = "".join(strContainer)

  reversed_string = newStr[::-1].lower()
  lower_string = newStr.lower()
  print(reversed_string, "r", lower_string, "l")
  for i, char in enumerate(lower_string):
    if lower_string[i] == reversed_string[i]:
      match = True
    else:
     return False
  return match

# keep this function call here 
print(PalindromeTwo(input()))

# Counting Minutes