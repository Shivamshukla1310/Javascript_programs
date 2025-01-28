function isPalindromeArray(arr) {
    // Reverse the array
    const reversedArray = [arr].reverse();

    // Compare the original array with the reversed array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedArray[i]) {
            return false; // Not a palindrome
        }
    }

    return true; // It's a palindrome
}

// Example usage
const testArray = [1, 2, 3, 2, 1];

if (isPalindromeArray(testArray)) {
    console.log(`[${testArray}] is a palindrome.`);
} else {
    console.log(`[${testArray}] is not a palindrome.`);
}
