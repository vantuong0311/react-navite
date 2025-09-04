class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack<string>();
stack.push('A');
stack.push('B');
console.log('Stack peek:', stack.peek());
console.log('Stack pop:', stack.pop());
console.log('Stack empty?', stack.isEmpty());