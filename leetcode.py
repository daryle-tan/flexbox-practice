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


class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        count = 0
        len_list = len(flowerbed)
        for i in range(len_list):
            if flowerbed[i] == 0:
                # Check if it's the first plot or if the previous plot is empty
                left_empty = (i == 0 or flowerbed[i-1] == 0)
                # Check if it's the last plot or if the next plot is empty
                right_empty = (i == len_list - 1 or flowerbed[i+1] == 0)
                
                if left_empty and right_empty:
                    flowerbed[i] = 1
                    count += 1
        return count >= n