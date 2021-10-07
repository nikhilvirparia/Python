class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
        this.prev = null;
    }
}

class DLL{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    addBack(value){

        // Create a new Node
        let newNode = new Node(value);

        // If the list is empty, create a new Node
        if(this.head == null) {
            this.head = newNode
            this.tail = newNode
            return this // return the list itself
        }

        // Points new Node to the end of the list
        newNode.prev = this.tail;

        // Points to the newNode that's added in the back
        this.tail.next = newNode;

        // Set's the tail to the new Node
        this.tail = newNode;
    }

    addFront(value){

        // Create a new Node
        let newNode = new Node(value);

        // If the list is empty, create a new Node
        if(this.head == null) {
            this.head = newNode
            this.tail = newNode
            return this // return the list itself
        }

        // Points new Node to the front of the list
        newNode.next = this.head;

        // Previous links with new head
        this.head.prev = newNode;

        // Set's the head to the new Node
        this.head = newNode;
    }
    
    removeBack(){

        // Moving the tail to the previous one
        var prevtail = this.tail.prev;

        // Removes the previous tail pointer
        this.tail.prev = null

        //Removes the next from the previous pointer
        prevtail.next = null

        // Move the current tail back to the previous one
        this.tail = prevtail

    }


    removeFront(){

        // Moving the head to the next pointer
        var nexthead = this.head.next;

        // Remove the next head pointers
        this.head.next = null
        nexthead.prev = null

        // Move the current head to the next head
        this.head = nexthead

    }

    print(){
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
    }

    printBackwards(){
        let result = "";
        let runner = this.tail;
        while (runner != null) {
            result += `${runner.value}<-- `;
            runner = runner.prev;
        }
        console.log(result);

    }
    
}

var dll = new DLL();
dll.addFront(5);
dll.addFront(7);
dll.addBack(8);
dll.print()
dll.printBackwards()
dll.removeBack();
dll.print()
dll.removeFront();
dll.print()
