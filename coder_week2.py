# Letter Changes
def LetterChanges(strParam):
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  vowels = ['a', 'e', 'i', 'o', 'u']
  new_word = []

  for char in strParam:
    if char in alphabet:
      index_of_alphabet = alphabet.index(char)
      next_char = alphabet[index_of_alphabet + 1]
      if next_char in vowels:
        upper_case = next_char.upper()
        new_word.append(upper_case)
      else:
        new_word.append(next_char)
    else:
      new_word.append(char)
  # print(new_word, "new word")
  following_letters = "".join(new_word)
  # print(following_letters)
  return following_letters

# keep this function call here 
print(LetterChanges(input()))

#  Alphabet Soup
def AlphabetSoup(strParam):
  ordered_lst = []
  ascii_lst = []
  split_str = list(strParam)
  
  for i,letter in enumerate(split_str):
    ascii_lst.append(ord(split_str[i]))
  ascii_lst.sort()

  for num in ascii_lst:
    ordered_lst.append(chr(num))
  renewed_str = "".join(ordered_lst)
  # print(renewed_str)
  return renewed_str

# keep this function call here 
print(AlphabetSoup(input()))

# Fibonacci  Checker
def FibonacciChecker(num):
  first = 0    # 1
  next_num = 1 # 1
  sum_num = 0  # 1
  while sum_num <= num:
    sum_num = first + next_num
    first = next_num
    next_num = sum_num
    # print('sum', sum_num, 'first', first)
    if sum_num == num:
      # break
      return 'yes'
  return 'no'

# keep this function call here 
print(FibonacciChecker(input()))