const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.count = 0;
    this.head = null;
    this.next = null;
  }

  get size() {
    return this.count;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.count === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(element);
    }
    this.count++;
  }

  dequeue() {
    const firstEl = this.head;
    this.head = firstEl.next;
    this.count--;
    return firstEl.value;
  }
}

module.exports = Queue;
