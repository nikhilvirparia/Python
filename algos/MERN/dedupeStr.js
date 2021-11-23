//instructions: Given a string, create a function that returns to you a new array containing only the latest instance of each letter from the sentence, without any duplicates. Make it case sensitive first so 'S' and 's' are not considered duplicates

function dedupeStr(str){
    // Establish an empty array to push non duplicate values to from the string input
    let result = []
    // Go through each index of the array and check for duplicate characters
    // When reaching a duplicate, check the result array to see if it is contained in there, if it is push original duplicate out and move new one in
    for(i = 0; i < str.length; i++){
        // result.push(str[i])
        if( ! result.includes(str[i])){
            result.push(str[i])
        } else{
            // Loop through the array from beginning again and see where duplicate is
            for(j = 0; j < result.length; j++){
                    // We need to remove the duplicate value, then push new one in
                    // console.log("J is:", j, "value at j is: ", str[j])
                    if(result[j] == str[i]){
                        // console.log("duplicate found:" , str[j])
                        result.splice(j, 1)
                        break
                    }
                }
                result.push(str[i])
            }
        }
    console.log(result)
    
}

console.log(dedupeStr("Snaps! crackles! pops!"))// ['S', 'n', 'r', 'a', 'c', 'k', 'l', 'e', ' ', 'o', 'p', 's', '!' ]
// console.log(dedupeStr("abcbb"))


//instructions: Given a string, create a function that returns to you a new array containing only the latest instance of each letter from the sentence, without any duplicates. Make it case sensitive first so 'S' and 's' are not considered duplicates

function dedupeStr(str){
    let obj = {}
    for(let i = str.length-1; i>=0; i--){
        obj[str[i]] = i
    }
    let result = Object.keys(obj) //extract the keys from the object and put it into an array
    return result.reverse()

    
}

console.log(dedupeStr("Snaps! crackles! pops!"))// ['S', 'n', 'r', 'a', 'c', 'k', 'l', 'e', ' ', 'o', 'p', 's', '!' ]

