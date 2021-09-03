// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// multiply input by 100 : 3.21 == 321

// take new number (321) and divide by 25 to get the number of quarters
// make sure to round down to get a whole number
// subtract the (# of quarters * 25) from the overall input # and then check the next denomination
// repeat for different denominations
// print and then return the data you collected

/* Examples 1.23 */
function generateCoinChange(input) {
    // your code here
    // Input already has a value so no input = 0
    var coins = [0, 0, 0, 0] // 0, 0, 0, 0 quarters dimes Nickels pennies

    // input = input - .25 (Quarters)
    // for( input=1.23; input>.25; input=input-.25) -> 1.23 -> .98 -> .73 -> .48 -> .23
    for ( input; input >= .25; input -= .25 ) {
        coins[0] = coins[0] + 1  // coins[0] += 1
    }
    // input = input - .10 (dimes)
    // for(input=.23; input > .10; input = input - .10) -> .23 -> .13 -> .03
    for ( input; input >= .10; input -= .10 ) {
        coins[1] = coins[1] + 1  // coins[1] += 1
    }

    // input = input - .05 (Nickels)
    // for(input=.03; input > .05; input = input - .05) -> .03 skips the loop
    for ( input; input >= .05; input -= .05 ) {
        coins[2] = coins[2] + 1  // coins[2] += 1
    }

    // input = input - .01 (pennies)
    // for(input=.03; input > .01; input = input - .01) -> .03 -> .02 -> .01 -> .00
    for ( input; input >= .01; input -= .01 ) {
        coins[3] = coins[3] + 1  // coins[3] += 1
    }

    var str = " ";

    if( coins[0] == 1 ) {
        str = str + coins[0] + " quarter, "
    } else if( coins[0] > 1 ) {
        str = str + coins[0] + " quarters, "
    } 
    if( coins[1] == 1 ) {
        str = str + coins[1] + " dime, "
    } else if( coins[1] > 1 ) {
        str = str + coins[1] + " dimes, "
    } 
    if( coins[2] == 1 ) {
        str = str + coins[2] + " nickel, "
    } else if( coins[2] > 1 ) {
        str = str + coins[2] + " nickels,  "
    } 
    if( coins[3] == 1 ) {
        str = str + coins[3] + " penny, "
    } else if( coins[3] > 1 ) {
        str = str + coins[3] + " pennies, "
    } 

    return str.substring(0, str.length-2);
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies



//var str = "hello, " -> str.substring(0, str.length-2) -> "hello"
// 7