export default class Queue {
  constructor() {
    this.queue = [];
  }
  add(fn, context, arg) {
    this.queue.push(fn.bind(context, arg));
  }
  execute() {
    for (const fn of this.queue) {
      fn.call(null);
    }
  }
}
