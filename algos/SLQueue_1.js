class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        var newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = this.tail.next;
        return this;
    }

    // remove and return the front value from the queue
    dequeue() {
        if(!this.head) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.value;
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        if(!this.head) {
            return false;
        }
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        if(this.head == null){
            console.log("Nothing in this queue!")
            return null
        }

        var runner = this.head;
        var min = runner.value;

        while(runner != null){
            if(runner.value < min){
                min = runner.value
            }
            runner = runner.next
        }

        runner = this.head;
        while(runner.next.next != null){
            if(runner.next.value === min){
                runner.next = runner.next.next
            }
            else{
                runner = runner.next
            }
        }
        if(runner.next.value == min){
            this.tail = runner
            runner.next == null
        }
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }

    // return the value of the front node without removing from list
    front() {
        if(!this.head) {
            return null;
        } else {
            return this.head.value;
        }
    }

    // return whether or not a list is empty
    isEmpty() {
        if(!this.head) {
            return "It's empty!"
        } else {
            return "It's not empty!"
        }
    }

    size(){
        var runner = this.head;
        var count = 0;
        while (runner){
            count++;
            runner = runner.next;
        }
        return count;
    }

        // Reorder SLQueue values to alternate first half values with second half values,
        // in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed.
        // 1 --> 2 --> 3 --> 4 --> 5 --> 
        // 1 --> 2 --> 3 -->    |      4 --> 5 -->
        // 1 --> 4 --> 2 --> 5 --> 3 --> 


    interleaveQueue(){
        // your code here

        // var newNode = new Node(value);
        //
        // if (!this.head){
        //     this.head = newNode;
        //     this.tail = newNode;
        // }
        //
        // this.tail.next = newNode;
        // this.tail = this.tail.next;
        // return this;

        var runner = this.head;

        var count2 = 0;

       this.size()

        while ( runner ) {
            count2++

        for(var x = 1; x <= count; x++) {
            if(x==1 || x==count && x == count2) {
                v.enqueue(runner.value)
            }
        }
        runner = runner.next
        v.displayQueue();
    }
}


var q = new SLQueue();
var v = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(5);
q.enqueue(4);
q.displayQueue();

q.interleaveQueue();