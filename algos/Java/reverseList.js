class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

    class SLL {
        constructor() {
            this.head = null;
        }

        addToFront(value) {
            var node = new Node(value);
            node.next = this.head;
            this.head = node;
            return this;
        }

        display() {
            let result = "";
            let runner = this.head;
            while (runner != null) {
                result += `${runner.value}--> `;
                runner = runner.next;
            }
            console.log(result);
        }

        reverseList() {

            // Previous node before the current
            var previous = this.head.next;

            // Current is the runner goes to the next value
            var runner = this.head.next.next;

            // temp is equal to null
            var temp = this.head

            // Iterate through the list
            while (runner != null) {
                // swap the link behind the runner
                previous.next = temp

                // Temp moves to the previous location
                temp = previous

                // Previous moves to the runner location
                previous = runner

                // Runner goes next
                runner = runner.next
            }
            // previous points to the temp for the last time
            previous.next = temp

            // change the head to null
            this.head.next = null

            //Head becomes the new previous
            this.head = previous

        }

}

var sll = new SLL();
sll.addToFront(9);
sll.addToFront(8);
sll.addToFront(7);
sll.addToFront(6);
sll.addToFront(5);
sll.display();
sll.reverseList()
sll.display();


