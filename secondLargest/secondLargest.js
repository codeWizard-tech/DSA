// [Naive Approach] Using Sorting - O(n*logn) Time and O(1) Space
// The idea is to sort the array in non-decreasing order. Now, we know that the largest element will be at index n - 1.
// So, starting from index (n - 2), traverse the remaining array in reverse order. 
// As soon as we encounter an element which is not equal to the largest element, 
// return it as the second largest element in the array. If all the elements are equal to the largest element, return -1.

//using sorting

function getSecondLargest(arr){
    let n = arr.length;
    
    //sort the array in non-decreasing/ascending order
    arr.sort((a,b) => a-b);
    
    // start from second last element as last element is the largest
    for(let i=n-2; i>=0; i++){
      
      // return the first element which is not equal to the 
      // largest element
      if(arr[i] !== arr[n-1]){
        return arr[i];
      }
    }
  }
  
  console.log(getSecondLargest([12, 35, 1, 10, 34, 1])) 

// Time Complexity: O(n*logn), as sorting the array takes O(n*logn) time and traversing the array can take O(n) time in the worst case, so total time complexity = (n*logn + n) = O(n*logn).
// Auxiliary space: O(1), as no extra space is required.

// [Better Approach] Two Pass Search - O(n) Time and O(1) Space
// The approach is to traverse the array twice. In the first traversal, find the maximum element. 
// In the second traversal, find the maximum element ignoring the one we found in the first traversal.

//using two traversals

function getSecondLargest(arr){
    let n = arr.length;
    
    let largest = -1, secondLargest = -1;
      
    // Finding the largest element
    for(let i=0; i<n; i++){
      if(arr[i] > largest){
        largest = arr[i];
      }
    }
    
    // Finding the second largest element
    for(let i=0; i<n; i++){
      // Update second largest if the current element is greater than other but less than largest
      if(arr[i]>secondLargest && arr[i]<largest){
        secondLargest = arr[i];
      }
    }
    return secondLargest;
    
  }

  console.log(getSecondLargest([10, 5, 10]))

// Time Complexity: O(2*n) = O(n), as we are traversing the array only once.
// Auxiliary space: O(1), as no extra space is required.

// [Expected Approach] One Pass Search - O(n) Time and O(1) Space
// The idea is to keep track of the largest and second largest element while traversing the array. 
// Initialize largest and second largest with -1. Now, for any index i,

// If arr[i] > largest, update second largest with largest and largest with arr[i].
// Else If arr[i] < largest and arr[i] > second largest, update second largest with arr[i].

// using one traversal

function getSecondLargest(arr){
    let n = arr.length;
    
    if (n < 2) {
      return -1; // Not enough elements to determine the second largest
    }
    
    let largest = -Infinity, secondLargest = -Infinity;
      
    // finding the second largest element
    for(let i=0; i<n; i++){
      // If arr[i] > largest, update second largest with
      // largest and largest with arr[i]
      if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i];
      }
      else if(arr[i]>secondLargest && arr[i]!==largest){
        secondLargest = arr[i];
      }
    }
    
    // If no valid secondLargest is found, return -1
    return secondLargest === -Infinity ? -1 : secondLargest;
  }

  console.log(getSecondLargest([10, 10, 10]))

// Time Complexity: O(n), as we are traversing the array only once.
// Auxiliary space: O(1)