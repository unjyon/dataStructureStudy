class Stack {
  arr = [];
  push(value) {
    return this.arr.push(value);
  }
  pop() {
    return this.arr.pop();
  }

  // 프링글스 위에가 뭔지 알 수 있도록
  // 프링글스의 맨 위는 배열의 마지막 요소
  top() {
    // return this.arr[this.arr.length - 1];에서 최신 문법은 아래와 같다.
    return this.arr.at(-1);
  }

  get length() {
    return this.arr.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(5);
stack.push(3);
stack.push(7);
console.log(stack.length); // 5
stack.pop();
console.log(stack.top()); // 3
