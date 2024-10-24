class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        boolean_lst = []
        # find the highest integer in the array
        most_candies = max(candies)
        # loop through the array of integers
        for candy in candies:
        # add extra candies to each element and see if the sum is equal to or greater than the highest integer
            if (candy + extraCandies) >= most_candies:
        # if yes, then add true to the new array
                boolean_lst.append(True)
            else:
        # otherwise add false to the new array
                boolean_lst.append(False)
        print(most_candies)
        return boolean_lst