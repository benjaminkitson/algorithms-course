type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

class Stack<T> {
  public length: number;
  private head?: SNode<T>;
  private tail?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode: SNode<T> = { value: item };
    if (!this.tail) {
      this.tail = newNode;
      this.head = this.tail;
      return;
    }

    this.tail.prev = newNode;
    this.tail = newNode;
  }

  pop(): T | undefined {
    if (!this.tail) {
      return undefined;
    }
    console.log(this.tail);
    const initialTail = this.tail;
    this.tail = this.tail?.prev;
    initialTail.prev = undefined;

    return initialTail?.value;
  }

  peek(): T | undefined {
    return this.tail?.value;
  }
}

const testStack = new Stack();

testStack.push("hello");
testStack.push("more");

console.log(testStack.peek());

testStack.pop();
console.log(testStack.peek());

testStack.push("i am a new value");

console.log(testStack.peek());
