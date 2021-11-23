//helper function Partition--> goal is to pick a number at the end of the array, and arrange the array so that there is this element has everything that is less than it to the left (doesn't have to be ordered) and everything greater than it to the right (doesnt have to be ordered)


const findPartition = (arr, left=0, right = arr.length-1)=>{ //when integrating this with quicksort, you'll need to give default parameters
    //select a element at the end (this element is called out pivot number) --(5)
    let pvnum = right;
    let count = left;
    //go from left to right and count how many elements are less than the pivot, and whenever an element that is less than the pivot is found, swap the current value with the index of numless
    for (let i = left;i<right;i++){
        if (arr[i] < arr[pvnum]){  //compare arr[i] to pivot number value to count how many are less
            temp = arr[count];
            arr[count] = arr[i];
            arr[i] = temp;
            count++;     // swap and increment
        }
    }
    temp = arr[count];
    arr[count] = arr[pvnum];
    arr[pvnum] = temp;

    return count;
}

//[7,3,4,9,0,2,5]
//[3,7,4,9,0,2,5]
//[3,4,7,9,0,2,5]
//[3,4,0,9,7,2,5]
//[3,4,0,2,7,9,5]
//[3,4,0,2,5,9,7]
//return back the index number that the pivot number ended up in->4

console.log(findPartition([7,3,4,9,0,2,5]));


//numless = 0->1->2->3->4

const quickSort = (arr, left = 0, right = arr.length-1)=>{
    if ((right - left) < 1){
        return arr;
    }
    else {
    
        let partition = findPartition(arr, left, right);

        quickSort(arr, left, partition-1);
        return quickSort(arr, partition + 1, right);
    
    }
}


console.log(quickSort([7,3,4,9,0,2,5]));