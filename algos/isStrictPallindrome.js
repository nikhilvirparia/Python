// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isStrictPallindrome(str) {
    // your code here

    let pallindrome = "";

    for(var i = str.length-1; i > -1; i--) {
        pallindrome += str[i];
    }

    return str === pallindrome;
}

console.log(isStrictPallindrome("racecar")); // TRUE
console.log(isStrictPallindrome("e tacocat e")); // TRUE
console.log(isStrictPallindrome("Dud")); // FALSE
console.log(isStrictPallindrome("oho!")); // FALSE
console.log(isStrictPallindrome(" to ")); // FALSE