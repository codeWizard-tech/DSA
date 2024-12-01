// [Naive Approach] Using Temporary Array - O(n) Time and O(n) Space
// The idea is to create a temporary array of same size as the input array arr[].

// 1) First, copy all non-zero elements from arr[] to the temporary array.
// 2) Then, fill all the remaining positions in temporary array with 0.
// 3) Finally, copy all the elements from temporary array to arr[].

// JavaScript Program to move all zeros to end using temporary array

// function to move all zeros to the end
function pushZerosToEnd(arr){
  
    const n = arr.length;
    
    //create a temporary array of same size as the input array arr[]
    const temp = new Array(n);
    
    // to keep track of the index in temp[]
    let j = 0;
    
    // Copy non-zero elements to temp[]
    for(let i=0; i<n; i++){
      if(arr[i] !== 0) {
        temp[j++] = arr[i];
      }
    }
    
    // Fill remaining positions in temp[] with zeros
    while(j<n){
      temp[j++] = 0;
    }
    
    // Copy all the elements from temp[] to arr[]
    for(let i=0; i<n; i++) {
      arr[i] = temp[i]
    }
    return arr;
    
  }
  
  console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
  console.log(pushZerosToEnd([10, 20, 30]));
  console.log(pushZerosToEnd([0, 0]));

// Time complexity: O(n), as we are traversing the array three times.
// Auxiliary Space : O(n), as we are using a temp[] array to move all the zeros.

// [Better Approach] Two Traversals - O(n) Time and O(1) Space
// The idea is to move all the zeros by traversing the array twice.

// First Traversal: Shift non-zero elements

// 1) Traverse the array and maintain the count of non-zero elements. This count is initialized with 0 and keeps track of where the next non-zero element should be placed in the array.
// 2) If the element is non-zero, place it at arr[count] and increment count by 1.
// 3) After traversing all the elements, all non-zero elements will be shifted to the front while maintaining their original order.

// Second Traversal: Fill remaining positions with zeros

// 1) After the first traversal, all non-zero elements will be at the start of the array and count will store the index where the first zero should be placed.
// 2) Iterate from count to the end of array and fill all indices with 0.

// JavaScript Program to move all zeros to end using two traversals

// Function which pushes all zeros to end of an array
function pushZerosToEnd(arr){
  
    // Count of non-zero elements
    let count = 0;
    
    // If the element is non-zero, replace the element at
    // index 'count' with this element and increment count
    for(let i=0; i<arr.length; i++){
      if(arr[i] !== 0) {
        arr[count] = arr[i];
        count++;
      }
    }
    
    // Now all non-zero elements have been shifted to
    // the front. Make all elements 0 from count to end.
    while(count<arr.length){
      arr[count] = 0;
      count++; // Increment count to avoid infinite loop
    }
    return arr;
    
  }
  
  console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
  console.log(pushZerosToEnd([10, 20, 30]));
  console.log(pushZerosToEnd([0, 0]));

// Time Complexity: O(n), as we are traversing the array only twice.
// Auxiliary Space: O(1)

// [Expected Approach] One Traversal - O(n) Time and O(1) Space
// The idea is similar to the previous approach where we took a pointer, 
// say count to track where the next non-zero element should be placed. 
// However, on encountering a non-zero element, instead of directly placing the non-zero element at arr[count], 
// we will swap the non-zero element with arr[count]. 
// This will ensure that if there is any zero present at arr[count], it is pushed towards the end of array and is not overwritten.

// JavaScript Program to move all zeros to end using one traversal

// Function which pushes all zeros to end of array
function pushZerosToEnd(arr){
  
    // Pointer to track the position for next non-zero element
    let count = 0;
    
    for(let i=0; i<arr.length; i++){
         // If the current element is non-zero
         let temp;
         if(arr[i] !== 0){
           // Swap the current element with the 0 at index 'count'
           temp = arr[i];
           arr[i] = arr[count];
           arr[count] = temp;
           
           // Move 'count' pointer to the next position
           count++;
         }
    }
    
    return arr;
    
  }
  
  console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
  console.log(pushZerosToEnd([10, 20, 30]));
  console.log(pushZerosToEnd([0, 0]));

// Time Complexity: O(n), as we are traversing the array only once.
// Auxiliary Space: O(1)