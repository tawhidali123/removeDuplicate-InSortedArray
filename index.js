// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.

// GAMEPLAN
// have two pointers
// first pointer swaps with second pointer if numbers are different
// return the length of first pointer

function removeDuplicate(arr){
  let p1 = 0
  let p2 = 1

  while(p2 <= arr.length - 1){
    if(arr[p1] == arr[p2]){
      p2++
    } else if(arr[p1] !== arr[p2]){
      p1++
      temp = arr[p1]
      arr[p1] = arr[p2]
      arr[p2] = temp 
      p2++
    }
  }

  let newArr = arr.splice(0,(p1 + 1))
  return newArr.length
}

// removeDuplicate([0,0,1,1,1,2,2,3,3,4])
removeDuplicate([1,1,2])