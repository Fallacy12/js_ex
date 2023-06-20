// printing the largest number in an array using while loop
function findLargestNumber(arr) {
    let i = 1;
    let largestNum = arr[0];
    while (i < arr.length) {
      if (arr[i] > largestNum) {
        largestNum = arr[i];
      }
      i++;
    }
    return largestNum;
}

const numbers = [12, 47, 34, 80, 58, 93, 26];
const largestNumber = findLargestNumber(numbers);
console.log(largestNumber); // prints 91