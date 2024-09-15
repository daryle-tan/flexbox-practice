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
def CountingMinutes(strParam):
  time_holder = []
  add_numberStr = ''
  start_time = ''
  end_time = ''
  first_mins = 0
  second_mins = 0
 
  for i,char in enumerate(strParam):
    if char.isdigit():
      add_numberStr += char
    else:
      if add_numberStr:
        time_holder.append(int(add_numberStr))
        add_numberStr = ''
        if not start_time and char != ':':
          start_time += char
        elif not end_time and char != ':':
          end_time += char
  # print(start_time, end_time)  
  if add_numberStr:
    time_holder.append(int(add_numberStr))
  # print(time_holder)
  for i,time in enumerate(time_holder):
    if i == 0 and start_time == 'a' and end_time == 'p':
      first_mins += (time * 60) + time_holder[i+1]
    elif i == 2 and start_time == 'a' and end_time == 'p':
      second_mins += (time * 60) + time_holder[i+1] + 720
    elif i == 0 and start_time == 'p' and end_time == 'a':
      first_mins += (time * 60) + time_holder[i+1]
    elif i == 2 and start_time == 'p' and end_time == 'a':
      second_mins += (time * 60) + time_holder[i+1] + 720
    elif i == 0 and start_time == 'a' and end_time == 'a':
      if time_holder[0] < time_holder[2]:
        first_mins += (time * 60) + time_holder[i+1]
        second_mins += (time_holder[2] * 60) + time_holder[3]
      else:
        first_mins += (time * 60) + time_holder[i+1]
        second_mins += (time_holder[2] * 60) + time_holder[3] + 1440
    elif i == 0 and start_time == 'p' and end_time == 'p':
      if time_holder[0] < time_holder[2]:
        first_mins += (time * 60) + time_holder[i+1]
        second_mins += (time_holder[2]  * 60) + time_holder[3]
      elif time_holder[0] > time_holder[2]:
        first_mins += (time * 60) + time_holder[i+1]
        second_mins += (time_holder[2] * 60) + time_holder[3] + 1440
      else:
        first_mins += (time * 60) + time_holder[i+1]
        second_mins += (time_holder[2] * 60) + time_holder[3]
     
  total_minutes = abs(first_mins - second_mins)     
  # print(first_mins, second_mins, total_minutes)
  return total_minutes

# keep this function call here 
print(CountingMinutes(input()))