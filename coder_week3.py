# Letter Changes
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