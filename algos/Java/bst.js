// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
    var sum = 0;

    // Add up all the number in the array
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    // if the sum is odd, if it's odd then it returns false
    if(sum % 2 != 0) {
        return false
    }

    sum = sum / 2

    // Addes the element in the array untill the sum / 2
    for(var i = 0; i < arr.length; i++) {
        sum -= arr[i]; // subtract it
        if(sum < 0) {
            return  false
        } else if (sum === 0){
            return true;
        }
    }
    return false


}
console.log(balancePoint([1,2,3,4,10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1,2,3,2,1])) // FALSE
console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
console.log(balancePoint([2,2])) // TRUE
console.log(balancePoint([2,2,2,2])) // TRUE

function balanceIndex(arr) {

    // Edge case if it's <= 2
    if(arr.length <= 2) {
        return false
    }

    let i, j
    let leftsum1 = 0 , rightsum2 = 0

    // it's iterates the array forward and backward at the same time
    // it's adding the elements from both ends
    for (i = 0; i < arr.length; i++) {
        leftsum1 += arr[i]
        rightsum2 = 0

        for (j = arr.length - 1; j > i + 1; j--) {
            rightsum2 += arr[j]

        }
        if(leftsum1 === rightsum2) {
            return true
        }
    }
    return false

}


console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
console.log(balanceIndex([9,9])) // FALSE
console.log(balanceIndex([4,2,2,6])) // TRUE
console.log(balanceIndex([9,1,9])) // TRUE
console.log(balanceIndex([1,8,1,2,3,4])) // TRUE

/* Other Solution 

const balancePoint = (arr) => {
    if(arr.length < 1)
        return false
    var sum = 0
    arr.forEach(value => sum+= value)
    var counterSum = 0
    for(var i = 0; i<arr.length-1; i++){
        sum -= arr[i]
        counterSum += arr[i]
        if(sum == counterSum)
            return true;
    }
    return false;
}

console.log(balancePoint([1,2,3,4,10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1,2,3,2,1])) // FALSE
console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
console.log(balancePoint([2,2])) // TRUE

const balanceIndex = (arr) => {
    if(arr.length < 2)
    return false
    var sum = 0
    arr.forEach(value => sum+= value)
    var counterSum = 0
    sum -= arr[0]
    for(var i = 1; i<arr.length-1; i++){
        sum -= arr[i]
        counterSum += arr[i-1]
        if(sum == counterSum)
            return true;
    }
    return false;
}

console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
console.log(balanceIndex([9,9])) // FALSE
console.log(balanceIndex([4,2,2,6])) // TRUE
console.log(balanceIndex([9,1,9])) // TRUE
console.log(balanceIndex([1,8,1,2,3,4])) // TRUE


----------------


function balancePoint(arr){
    var sumLeft = 0;
    if (arr.length < 2){
        return false;
    }
    for (var i =0; i < arr.length; i++){
        var sumRight = 0;
        sumLeft += arr[i];
        for (var j=i+1; j<arr.length;j++){
            sumRight += arr[j];
        }
        if (sumLeft === sumRight){
            return true;
        }
    }
    return false;
}


function balanceIndex(arr) {
    var sumLeft = 0;
    if (arr.length < 3){
        return false;
    }
    for (var i =0; i < arr.length; i++){
        var sumRight = 0;
        sumLeft += arr[i];
        for (var j=i+2; j<arr.length;j++){
            sumRight += arr[j];
        }
        if (sumLeft === sumRight){
            return true;
        }
        
    }
    return false;
}

-----------------------

function balancePoint(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let checkSum = 0;
    for(let i = 0; i< arr.length; i++){
        checkSum += arr[i];
        if(checkSum == sum/2){
            return true;
        }
    }
    return false;
}

function balanceIndex(arr) {
    for(let i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        for(let j = i + 1; j < arr.length; j++){
            rightSum += arr[j]
        }
        for(let j = i - 1; j >= 0; j--){
            leftSum += arr[j]
        }
        if (leftSum == rightSum){
            return true;
        }
    }
    return false;
}

----------------------

function balancePoint(arr){
    let left = 0;
    let right = 0;
    let isFalse = false;
    for (let i=arr.length-1; i>=0; --i){
        right += arr[i];
        left = 0;
        for (let j = 0; j < i; ++j) {
            left += arr[j];
        }
        if (left === right) {
            isFalse = true;
        }
    }
    return isFalse;
}
console.log(balancePoint([1,2,3,4,10])) // TRUE
console.log(balancePoint([1,2,3,2,1])) // FALSE
console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
console.log(balancePoint([2,2])) // TRUE

function balanceIndex(arr) {
    let isFalse = false
    for (let i = 0; i < arr.length; ++i) {
        let left = 0;
        let right = 0;
        for (let j = i+1; j < arr.length; ++j) {
            right += arr[j];
        }
        for (let j = i-1; j >= 0; --j){
            left += arr[j];
        }
        if (left === right) {
            isFalse = true;
        }
    }
    return isFalse
}

console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
console.log(balanceIndex([9,9])) // FALSE
console.log(balanceIndex([4,2,2,6])) // TRUE
console.log(balanceIndex([9,1,9])) // TRUE
console.log(balanceIndex([1,8,1,2,3,4])) // TRUE

------------------

function balancePoint(arr){
    for(var i = 0; i < arr.length; i++) {
        var leftSum = 0;
        var rightSum = 0;
        for(var left = 0; left < i; left ++){
            leftSum += arr[left]
        }
        for(var right = i; right < arr.length; right ++) {
            rightSum += arr[right]
        }
        if(leftSum === rightSum) {
            return true;
        }
        // console.log(leftSum);
        // console.log(rightSum);
    }
    return false;
}

function balanceIndex(arr) {
    for(var i = 0; i < arr.length; i++) {
        var leftSum = 0;
        var rightSum = 0;
        for(var left = 0; left < i; left ++){
            leftSum += arr[left]
        }
        for(var right = i+1; right < arr.length; right ++) {
            rightSum += arr[right]
        }
        if(leftSum === rightSum) {
            return true;
        }
        // console.log(leftSum);
        // console.log(rightSum);
    }
    return false;
}

function balanceIndex(arr, left = 0, right = arr.length) {
    var balancePoint = Math.floor(((right - left)/2) + left);
    var leftSum = 0;
    var rightSum = 0;
    if(arr.length <= 2) {
        return false;
    }
    for(var left = 0; left < balancePoint; left ++){
        leftSum += arr[left]
    }
    for(var right = balancePoint + 1; right < arr.length; right ++) {
        rightSum += arr[right]
    }
    console.log(leftSum);
    console.log(rightSum);
    if(leftSum === rightSum)  {
        return true;
    }
    if(right - left <= 1) {
        return false;
    }
    if(leftSum > rightSum) {
        return balanceIndex(arr, left, right/2) 
    }
    else {
        return balanceIndex(arr, balancePoint, right)
    }
}

------------

function balanceIndex(arr, left = 0, right = arr.length) {
    var balancePoint = Math.floor(((right - left)/2) + left);
    var leftSum = 0;
    var rightSum = 0;
    if(arr.length <= 2) {
        return false;
    }
    for(var i = 0; i < balancePoint; i++){
        leftSum += arr[i]
    }
    for(var i = balancePoint + 1; i < arr.length; i++) {
        rightSum += arr[i]
    }

    if(leftSum === rightSum)  {
        return true;
    }
    if(right - left <= 1) {
        return false;
    }
    
    if(leftSum > rightSum) {
        return balanceIndex(arr, left, right/2) 
    }
    else {
        return balanceIndex(arr, balancePoint, right)
    }
}

*/