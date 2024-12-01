// [Naive Approach] Using a temporary array - O(n) Time and O(n) Space
// The idea is to use a temporary array to store the reverse of the array.

// 1) Create a temporary array of same size as the original array.
// 2) Now, copy all elements from original array to the temporary array in reverse order.
// 3) Finally, copy all the elements from temporary array back to the original array.

// JavaScript Program to reverse an array using temporary array

// function to reverse an array
function reverseArray(arr){
  
    let n = arr.length;
    
    // Temporary array to store elements in reversed order
    let temp = new Array(n);
    
    // Copy elements from original array to temp in reverse order
    for(let i=0; i<n; i++){
      temp[i] = arr[n-i-1]
    }
    
    // Copy elements back to original array
    for(let i=0; i<n; i++){
      arr[i] = temp[i];
    }
    return arr;
    
  }
  
  console.log(reverseArray([1, 4, 3, 2, 6, 5]));
  console.log(reverseArray([4, 5, 2]));
  console.log(reverseArray([1]));

//   Time Complexity: O(n), Copying elements to a new array is a linear operation.
//   Auxiliary Space: O(n), as we are using an extra array to store the reversed array.

// [Expected Approach - 1] Using Two Pointers - O(n) Time and O(1) Space
// The idea is to maintain two pointers: left and right, such that left points at the beginning of the array and 
// right points to the end of the array.

// While left pointer is less than the right pointer, swap the elements at these two positions. 
// After each swap, increment the left pointer and decrement the right pointer to move towards the center of array. 
// This will swap all the elements in the first half with their corresponding element in the second half.

// JavaScript Program to reverse an array using Two Pointers

// function to reverse an array
function reverseArray(arr){
  
    // Initialize left to the beginning and right to the end
    let left=0, right=arr.length-1;
    
    // Iterate till left is less than right
    let temp;
    while(left < right){
      // Swap the elements at left and right position
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      
      // Increment the left pointer
      left++;
      
      // Decrement the right pointer
      right--;
    }
    
    return arr;
    
  }
  
  console.log(reverseArray([1, 4, 3, 2, 6, 5]));
  console.log(reverseArray([4, 5, 2]));
  console.log(reverseArray([1]));

// Time Complexity: O(n), as we are visiting each element exactly once.
// Auxiliary Space: O(1)

// [Expected Approach - 2] By Swapping Elements - O(n) Time and O(1) Space
// The idea is to iterate over the first half of the array and swap each element with its corresponding element from the end. 
// So, while iterating over the first half, any element at index i is swapped with the element at index (n - i - 1).

// JavaScript Program to reverse an array by swapping elements

// function to reverse an array
function reverseArray(arr){
  
    let n = arr.length;
    
    // Iterate over the first half and for every index i,
    // swap arr[i] with arr[n - i - 1]
    for(let i=0; i<n/2; i++){
      let temp = arr[i];
      arr[i] = arr[n-i-1];
      arr[n-i-1] = temp;
    }
    
    return arr;
    
  }
  
  console.log(reverseArray([1, 4, 3, 2, 6, 5]));
  console.log(reverseArray([4, 5, 2]));
  console.log(reverseArray([1]));

// Time Complexity: O(n), the loop runs through half of the array, so it's linear with respect to the array size.
// Auxiliary Space: O(1), no extra space is required, therefore we are reversing the array in-place.

// [Alternate Approach] Using Recursion - O(n) Time and O(n) Space
// The idea is to use recursion and define a recursive function that takes a range of array elements as input and reverses it. 
// Inside the recursive function,

// 1) Swap the first and last element.
// 2) Recursively call the function with the remaining subarray.

// JavaScript Program to reverse an array using Recursion

// recursive function to reverse an array from l to r
function reverseArrayRec(arr, l, r){
    if(l >= r)
      return;
    
    // Swap the elements at the ends
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    
    // Recur for the remaining array
    reverseArrayRec(arr, l + 1, r - 1);
  }
  
  // function to reverse an array
  function reverseArray(arr){
    
    let n = arr.length;
    
    //call recursive function
    reverseArrayRec(arr, 0, n - 1);
    return arr;
    
  }
  
  console.log(reverseArray([1, 4, 3, 2, 6, 5]));
  console.log(reverseArray([4, 5, 2]));
  console.log(reverseArray([1]));

// Time Complexity: O(n), the recurrence relation will be T(n) = T(n - 2) + O(1), which can be simplified to O(n).
// Auxiliary Space: O(n), as we are using recursion stack.

// Using Inbuilt Methods - O(n) Time and O(1) Space
// The idea is to use inbuilt reverse methods available across different languages.

// JavaScript Program to reverse an array using inbuilt methods

// function to reverse an array
function reverseArray(arr){
    arr.reverse();
    return arr;
    
  }
  
  console.log(reverseArray([1, 4, 3, 2, 6, 5]));
  console.log(reverseArray([4, 5, 2]));
  console.log(reverseArray([1]));

// Time Complexity: O(n), the reverse method has linear time complexity.
// Auxiliary Space: O(1) Additional space is not used to store the reversed array, as the in-built array method 
// swaps the values in-place.
