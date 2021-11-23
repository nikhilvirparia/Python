//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionsort(arr){
    for( let i = 1; i < arr.length; i++) {
        let j = i; //we create j so that we have a variable that starts where i is, that we can decrement down to the left, without affecting i
        while(j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            j--;
        }
    }
    console.log(arr)
    return arr
}

insertionsort([2,4,6,3,5,1,9,0])

//i = 1->2->3->4->5
//j =1 ->2->3->2->1->4->3->5->4->...0->6



function insertionsort(arr){
    for( let i = 1; i < arr.length; i++) {
        let j = i;
        while(j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            // let temp = arr[j];
            //     arr[j] = arr[j - 1];
            //     arr[j - 1] = temp;
            j--;
        }
    }
    console.log(arr)
}


insertionsort([7,4,2,9,3,5,1])

function insertionSort(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let j=i+1
            let holder=j-1
            console.log(i)
            while(arr[j]<arr[j-1]&&j>=0){
                temp=arr[holder]
                arr[holder]=arr[holder+1]
                arr[holder+1]=temp
                j--
                holder--
                console.log(arr)
            }
        }
    }
}

insertionSort([6,4,5,2,9,3,8])


function insertionsort(arr){
    for(var i=1; i<arr.length ;i++) {
        var x=i;
        while(arr[x-1]>arr[x]) {
            var temp = arr[x-1];
            arr[x-1] = arr[x];
            arr[x] = temp;
            x -= 1;
            console.log(arr);
        }
    }
    return arr;
}
console.log(insertionsort([3,2,1,3,7,34,1]));