type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newNode: QNode<T> = { value: item };
    if (!this.tail) {
      this.tail = newNode;
      this.head = this.tail;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    const initialHead = this.head;
    this.head = this.head?.next;
    initialHead.next = undefined;

    return initialHead?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
