//given a string that can be a sentence, put each word into an array
let sentence = "Hi everybody, welcome to week two"

const stringToWordArr = (input)=>{
    // Create an empty array to push final words to
    newArr = []
    newWord = ""
    // Create for loop to iterate through the original array
    for(i = 0; i <  sentence.length; i++){
        // If statement to find a space character in the original array
        if(sentence[i] != " "){
            // Add characters to newWord variable until a space is reached
            newWord += sentence[i]
            console.log(newWord)
        //  If space is reached push newWord to newArr
        } else if(sentence[i] == " "){
            newArr.push(newWord)
            newWord = ""
        } 
    }
    newArr.push(newWord)
    console.log(newArr)
}

stringToWordArr(sentence) //["Hi", "everybody," , "welcome", "to", "week", "two"]