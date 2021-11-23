//encode--> given a string with repeating consecuctive characters,
// give a number for each number of repeats next to the letter
//example ---> aaabccccdd -> a3b1c3d2
const encode = (str)=>{
    let output = ""
    let count = 1;

    // Loop through the array
    for(let i = 0; i < str.length; i++) {
        // Set the count to compare the letters
        if(str[i] === str[i + 1]) {
            count++
        } else { // if it's not equal the current letter, and the current number is showen in the output
            output += ( `${ str[i] }${ count }`) // Output addes the letter and number is showen so far
            count = 1
        }

    }
    return output

    // Push that count value of each letter into the array

}

console.log(encode("aaabccccdd") )//a3b1c3d2


// decode--> given an encoded string, decode it
// example ---> a2b3c1---> aabbbc

const decode = (str)=>{
    let output = ""
    let count = ' '

    // Goes over the string

    for(let i = 0; i < str.length; i++) {
        // Check if the current value is a number, and if it is repeat the letter before it that many times
        if(!isNaN(str[i])) {
            count += str[i]
        } else {

        }

    }


   // str[i]
    // start with a then when I see a number then I convert a on however many times the number is required
}

decode("a2b3c1") //aabbbc

//console.log("a" + "a")
console.log("a".repeat(2))
