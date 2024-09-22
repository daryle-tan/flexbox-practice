# Distinct List
def DistinctList(arr):
  og_num = []
  duplicate_count = 0

  for num in arr:
    if num not in og_num:
      og_num.append(num)
    else:
      duplicate_count += 1
  
  # print(duplicate_count)
  return duplicate_count

# keep this function call here 
print(DistinctList(input()))

# Third Greatest
def ThirdGreatest(strArr):
  smallest = strArr[0]
  third = strArr[0]
  largest = ''
  is_equal_len = False
  for i, word in enumerate(strArr):
    if len(word) < len(smallest):
        smallest = word
    elif len(word) == len(third) and i != 0:
      third = word
      is_equal_len = True
    elif len(word) < len(third):
      third = word
      is_equal_len = True
    elif len(word) > len(smallest) and len(word) == len(largest):
      is_equal_len = True
    else:
      largest = word
      
  # print(smallest, third, largest, is_equal_len)
  if is_equal_len:
    return third
  else:
    return smallest
# keep this function call here 
print(ThirdGreatest(input()))

# Caeser Cipher
def CaesarCipher(strParam,num):
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  current = ''

  for char in strParam:
    if char.lower() in alphabet and char.isupper() and char.isalpha():
      index_of_alpha = alphabet.index(char.lower())
      new_index = (index_of_alpha + num) % 26
      current += alphabet[new_index].upper()
      # print(index_of_alpha)
    elif char in alphabet and char.isalpha():
      index_of_alpha = alphabet.index(char)
      new_index = (index_of_alpha + num) % 26
      current += alphabet[new_index]   
    elif char in strParam:
      current += char   
    # print(current)
  return current

# keep this function call here 
print(CaesarCipher(input()))