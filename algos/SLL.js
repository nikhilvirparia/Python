class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        // step #1) create an instance of a Node, using the input value
        var nn = new Node(value);
        // // step #1a [EDGE CASE]) check the edge case of nothing in your list
        // if(this.head == null) {
        //     // set this.head equal to whatever node I've created
        //     this.head = nn
        //     // return 'this' to end function and allow chaining of methods
        //     return this
        // }
        // step #2) point our node into the list
        nn.next = this.head
        // step #3) move the head pointer to the correct location
        this.head = nn
        // return 'this' to end function and allow chaining of methods
        return this
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        // step #1) create an instance of a Node, using the input value
        var nn = new Node(value);
        // step #1a [EDGE CASE]) check the edge case of nothing in your list
        if(this.head == null) {
            console.log("Nothing in list, so simply add to this.head")
            // set this.head equal to whatever node I've created
            this.head = nn
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // step #2) traverse to the location where you want to add the node (aka, the final node in the list)
        var runner = this.head;

        while(runner.next != null) {
            runner = runner.next
        }
        // step #3) change runner's .next pointer, to point at our new node
        runner.next = nn
        // return 'this' to end function and allow chaining of methods
        return this
    }



    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if(this.head == null){
            console.log("There's nothing in the list! Dummy!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while(runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        // return 'this' to end function and allow chaining of methods
        return this
    }

    // removes the first item in your list
    removeFromFront() {
        // your code here
        // step #1 [EDGE CASE]) check the edge case of nothing in your list
        if(this.head == null) {
            console.log("Nothing in list")
            // return 'this' to end function and allow chaining of methods
            return this
        }

        // step #2) Replaces the head to next node
        this.head = this.head.next

        // Step #3) Ends the function, and allows for chaining
        return this
    }

    // removes the last item in your list
    removeFromBack() {
        // egde case: nothing in the list, so nothing can be removed
        if(this.head == null || this.head.next == null) {
            console.log("List is too short! Cannot remove from back")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        if(this.head.next == null) {
            this.head = null
            return this
        }
        // set runner to start at the beginning of list
        var runner = this.head;

        while(runner.next.next != null) {
            runner = runner.next
        }
        runner.next = null;
        return this
    }

    // given a value, traverse through your list and return true or flase if the value exists in the list
    contains(value) {
        // your code here

        // step #1) We set the runner to the first value in the list
        var runner = this.head;

        // step #2) traverse through the list untill we find the node that equals the value
        while(runner != null) {
            // Checkes if the runner.value == runner if it is then stops the function and return true
            if(runner.value == value) {
                return true
            }
                runner = runner.next
         }

         return false
    }

}

const sll = new SLList();
sll.addToFront(-3)
sll.addToFront(-122)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(-5)
sll.printValues()
console.log("==========================================")
// sll.removeFromBack()
// sll.printValues()
// console.log("==========================================")
sll.removeFromFront()
sll.printValues()
console.log("==========================================")
//sll.contains(48) // returns true
console.log(sll.contains(48))
console.log(sll.contains(122))
// sll.printValues(18) // returns false