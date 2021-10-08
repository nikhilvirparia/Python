class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }


}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    printValuesForward(){
        let runner = this.head;
        let result = ""
        while(runner != null){
            result += `${runner.val}->`;

            runner = runner.next;
        }
        console.log(result);
        return this;
    }

    printValuesBackward(){
        let runner = this.tail;
        let result = ""
        while(runner != null){
            result += `${runner.val}->`;
            runner = runner.prev;
        }
        console.log(result);
        return this;
    }

    addToBack(val){
        let newNode = new Node(val);
        if(this.tail ==null){
            this.tail = newNode;
            this.head = newNode;
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode

        }
        return this;

    }

    addToFront(val){
        let newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let runner = newNode;
            runner.next = this.head;
            let prevHead = this.head;
            prevHead.prev = runner;
            this.head = runner;
        }
        return this;
    }

    removeFront(){
        this.head = this.head.next;
        this.head.prev = null;
        return this;

    }

    removeEnd(){
        let newTail = this.tail.prev;
        this.tail.prev = null;
        newTail.next = null;
        this.tail = newTail;
        return this;
    }

    reverse(){

        // Current starts at the head
        var current = this.head.next;

        // Temp delacre outside the while loop
        var pnode = this.head;

        // Temp variable = null
        var temp = null;

        // While we are going through the list, there is value in that node
        while(current) {
            // Swap the pointers as we go though
            pnode.next = temp

            // Previous has a attribute prev, which will point to the current
            pnode.prev = current

            // Temp moves to previous, Previous moves to the current, and Current moves next node
            temp = pnode;
            pnode = current;
            current = current.next;

        }

        // Prev node pointers points to the temp variable
        pnode.next = temp

        // Previous pointer points to null
        pnode.prev = null

        // Switch the head to tail, and tail to head
        this.tail = this.head

        // head comes to the previous node, after tail is moved to the head
        this.head = pnode

    }

    size() {
        let runner = this.head;
        let result = 0
        while(runner != null){
            result++;
            runner = runner.next;
        }
        console.log(result);
        return result;
    }
    recurseReverse(runner = this.head){
        
    }
}

var dll = new DLL();
dll.addToFront(4);
dll.addToFront(3);
dll.addToFront(2);
dll.addToFront(1);
dll.printValuesForward()
dll.reverse()
dll.printValuesForward()


