// Q1: Write a function that will take an array as input, sort, and return the array in descending
function bubbleSortApp(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
}
const arry = [3, 2, 7, 4, 6, 9];
const sorted = bubbleSortApp(arry);
console.log(sorted);

//Q2. Write a function that will take a string as input, check and return if it is palindrome or not.
function palindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  // Compare the original string with the reversed string
  return str === reversedStr;
}
console.log(palindrome("madam"));
console.log(palindrome("doctor"));
console.log(palindrome("dad"));
console.log(palindrome("mom"));

// Q3: Write a function that will take an array as input and return the sum of the two largest numbers in a n array.
function largestNumbers(arr) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current > firstMax) {
      secondMax = firstMax;
      firstMax = current;
    } else if (current > secondMax) {
      secondMax = current;
    }
  }

  return firstMax + secondMax;
}
console.log(largestNumbers([1, 7, 19, 51, 10, 2])); //70
console.log(largestNumbers([10, 20, 30, 10, 50])); //80

//Q4: Write a function that will take an array as input and return an array with every missing element from 0 to the highest entry.
function findMissingNumbers(arr) {
  // Determine the maximum value in the array
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let elementsSet = new Set(arr);
  let missingNumbers = [];
  for (let i = 0; i <= max; i++) {
    if (!elementsSet.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}
console.log(findMissingNumbers([3, 4, 9, 1, 7, 3, 2, 6])); // Output: [0, 5, 8]
console.log(findMissingNumbers([0, 1, 2, 3, 4, 5])); // Output: []

//Q5: Write a function that will take an array of numbers and return the number most repeated in the array with how many times it was repeated.
function findMostRepeatedNum(arr) {
  let mostRepeatedNum;
  let maxFrequency = 0;
  const freqMap = new Map();

  arr.forEach((num) => {
    const frequency = (freqMap.get(num) || 0) + 1;
    freqMap.set(num, frequency);

    if (frequency > maxFrequency) {
      mostRepeatedNum = num;
      maxFrequency = frequency;
    }
  });

  return `${mostRepeatedNum} is repeated ${maxFrequency} times`;
}
console.log(
  findMostRepeatedNum([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5])
);

//Q6. Write a function that will take an array as input, it will rotate the array to the right 1 time and return the rotated array. Rotation of the array means that each element is shifted right by one index.
function rotateArrayRight(arr) {
  const last = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]; // Shift elements to the right by one position
  }

  arr[0] = last; // Place the last element at the beginning

  return arr;
}

console.log(rotateArrayRight([3, 8, 9, 7, 6])); // Output: [6, 3, 8, 9, 7]
