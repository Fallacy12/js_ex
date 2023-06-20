 finding the largest number in an array
 function findLargestNumber(arr) {
    let largestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
         if (arr[i] > largestNum) {
        largestNum = arr[i];
       }
     }
    return largestNum;
   }
  
   const numbers = [12, 47, 34, 80, 58, 93, 26];
 const largestNumber = findLargestNumber(numbers);
   console.log(largestNumber); // prints 91